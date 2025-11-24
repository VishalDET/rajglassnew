const functions = require('firebase-functions');
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: true })); // Allow all origins for now, or configure specific domains
app.use(express.json());

// Database Connection Pool
// Note: In Cloud Functions, global variables are preserved between invocations
// but connections might be dropped. Ensure error handling is robust.
const pool = mysql.createPool({
    host: process.env.DB_HOST || functions.config().db?.host,
    port: process.env.DB_PORT || functions.config().db?.port || 3306,
    user: process.env.DB_USER || functions.config().db?.user,
    password: process.env.DB_PASSWORD || functions.config().db?.password,
    database: process.env.DB_NAME || functions.config().db?.name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Helper Functions
const mapCategory = (categoryName) => {
    const mapping = {
        'Bevelling Machine': 'Glass Bevelling Machine',
        'Edging Machine': 'Glass Edging Machine',
        'Sand Blasting Machine': 'Glass Sand Blasting Machine',
        'Drilling Machine': 'Glass Drilling Machine',
        'Washing Machine': 'Glass Washing Machine',
        'Double Edger Machine': 'Glass Double Edger Machine',
        'Shape Edging Machine': 'Glass Shape Edging Machine',
        'Cutting Machine': 'Glass Cutting Machine'
    };
    return mapping[categoryName] || categoryName;
};

const transformProduct = (product, galleryImages = []) => {
    const imageBaseUrl = process.env.IMAGE_BASE_URL || functions.config().app?.image_base_url || '';
    return {
        id: `product-${product.ProductId}`,
        name: product.ProductName,
        category: mapCategory(product.CategoryName),
        originalCategory: product.CategoryName,
        description: product.Description || '',
        price: product.Price || 0,
        image: product.ProductImage ? `${imageBaseUrl}${product.ProductImage}` : '',
        gallery: galleryImages.map(img => `${imageBaseUrl}${img}`),
        features: [
            product.Feature1,
            product.Feature2,
            product.Feature3,
            product.Feature4,
            product.Feature5
        ].filter(Boolean),
        specifications: {
            power: product.power || 'N/A',
            speed: product.speed || 'N/A',
            maxGlassSize: product.measurement || 'N/A',
            thickness: product.processing || 'N/A',
            voltage: product.voltage || undefined,
            model: product.model || undefined,
            weight: product.weight || undefined,
            angle: product.angle || undefined
        }
    };
};

// API Routes

// Get all products
app.get('/api/products', async (req, res) => {
    try {
        const [products] = await pool.query(`
      SELECT
        p.*,
        c.CategoryName,
        GROUP_CONCAT(pi.ImagePath) as gallery
      FROM tblproducts p
      LEFT JOIN tblcategory c ON p.CategoryId = c.CategoryId
      LEFT JOIN tblproductimages pi ON p.ProductId = pi.ProductId
      WHERE c.IsActive = 1
      GROUP BY p.ProductId
      ORDER BY p.ProductId DESC
    `);

        const transformedProducts = products.map(product => {
            const galleryImages = product.gallery
                ? product.gallery.split(',').filter(img => img)
                : [];
            return transformProduct(product, galleryImages);
        });

        res.json(transformedProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products', message: error.message });
    }
});

// Get single product by ID
app.get('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id.replace('product-', '');

        const [products] = await pool.query(`
      SELECT
        p.*,
        c.CategoryName,
        GROUP_CONCAT(pi.ImagePath) as gallery
      FROM tblproducts p
      LEFT JOIN tblcategory c ON p.CategoryId = c.CategoryId
      LEFT JOIN tblproductimages pi ON p.ProductId = pi.ProductId
      WHERE p.ProductId = ?
      GROUP BY p.ProductId
    `, [productId]);

        if (products.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const product = products[0];
        const galleryImages = product.gallery
            ? product.gallery.split(',').filter(img => img)
            : [];

        res.json(transformProduct(product, galleryImages));
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch product', message: error.message });
    }
});

// Get all categories
app.get('/api/categories', async (req, res) => {
    try {
        const [categories] = await pool.query(`
      SELECT CategoryId, CategoryName
      FROM tblcategory
      WHERE IsActive = 1
      ORDER BY CategoryName
    `);

        const transformedCategories = categories.map(cat => ({
            id: cat.CategoryId,
            name: mapCategory(cat.CategoryName),
            originalName: cat.CategoryName
        }));

        res.json(transformedCategories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ error: 'Failed to fetch categories', message: error.message });
    }
});

// Health check endpoint
app.get('/api/health', async (req, res) => {
    try {
        await pool.query('SELECT 1');
        res.json({ status: 'ok', message: 'Database connection successful' });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
});

// Export the Express app as a Cloud Function
exports.api = functions.https.onRequest(app);
