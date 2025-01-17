import React from 'react';
import ProductCard from './ProductCard';
import Loader from './Loader';

interface Product {
    sku: string;
    name: string;
    category: { name: string } | null;
    brand: string;
    price: number;
};

interface ProductListProps {
    products: Product[];
    loading: boolean;
};

const ProductList: React.FC<ProductListProps> = ({ products, loading }) => {
    if (loading) {
        return <Loader />;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {products.length > 0 ? products.map((product) => (
                <ProductCard key={product.sku} product={product} />
            ))
            :
            <p>Sin coincidencias en la búsqueda</p>
        }
        </div>
    );
};

export default ProductList;
