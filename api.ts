import { Machine } from './types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

export interface ApiResponse<T> {
    data?: T;
    error?: string;
    message?: string;
}

/**
 * Fetch all products from the API
 */
export async function fetchProducts(): Promise<Machine[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}

/**
 * Fetch a single product by ID
 */
export async function fetchProductById(id: string): Promise<Machine> {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
}

/**
 * Fetch all categories
 */
export async function fetchCategories(): Promise<Array<{ id: number; name: string; originalName: string }>> {
    try {
        const response = await fetch(`${API_BASE_URL}/categories`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const categories = await response.json();
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
}

/**
 * Check API health status
 */
export async function checkApiHealth(): Promise<{ status: string; message: string }> {
    try {
        const response = await fetch(`${API_BASE_URL}/health`);
        const health = await response.json();
        return health;
    } catch (error) {
        console.error('Error checking API health:', error);
        return { status: 'error', message: 'Cannot connect to API server' };
    }
}
