const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.API_PORT || 3001;
const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL || '';

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: 'utf8mb4',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Helper function to construct full image URL
const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    return `${IMAGE_BASE_URL}${imagePath}`;
};

// Helper function to map database category to frontend category
const mapCategory = (categoryName) => {
    const categoryMap = {
        'Double Edging Machines': 'Edging',
        'Grinding Machine': 'Edging',
        'Cutting Machine': 'Cutting',
        'Beveling Machine': 'Beveling',
        'Sandblasting Machine': 'Sandblasting',
        'Insulating Glass Line': 'Insulating'
    };
    return categoryMap[categoryName] || categoryName;
};

// Helper function to transform database product to frontend format
const transformProduct = (product, galleryImages = []) => {
    return {
        id: `product-${product.ProductId}`,
        name: product.title,
        category: mapCategory(product.CategoryName),
        image: getImageUrl(product.image),
        gallery: galleryImages.length > 0
            ? galleryImages.map(img => getImageUrl(img))
            : [getImageUrl(product.image)],
        videoUrl: product.videoUrl || undefined,
        description: product.description || '',
        specs: {
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

// Start server
app.listen(PORT, () => {
    console.log(`🚀 API Server running on http://localhost:${PORT}`);
    console.log(`📊 Database: ${process.env.DB_NAME} @ ${process.env.DB_HOST}`);
    console.log(`🖼️  Image Base URL: ${IMAGE_BASE_URL || 'Not configured'}`);
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n⏹️  Shutting down server...');
    await pool.end();
    process.exit(0);
});
