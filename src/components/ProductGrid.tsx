import React from 'react';

export interface ProductGridProps {
    categoryId: number | string;
    limit?: number;
}

// Mock data for demonstration purposes
const MOCK_PRODUCTS = [
    { id: 1, name: 'Product 1', price: 999, image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', price: 1299, image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product 3', price: 799, image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Product 4', price: 1499, image: 'https://via.placeholder.com/300' },
];

export const ProductGrid: React.FC<ProductGridProps> = ({ categoryId, limit = 4 }) => {
    const products = MOCK_PRODUCTS.slice(0, limit);

    return (
        <div className="py-12">
            <h2 className="text-2xl font-bold mb-6">Category {categoryId}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
