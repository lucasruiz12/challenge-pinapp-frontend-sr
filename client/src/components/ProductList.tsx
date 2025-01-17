import React from 'react';
import { FaSearch } from 'react-icons/fa';
import ProductCard from './ProductCard';
import Loader from './Loader';
import ProductErrorLoad from './ProductErrorLoad';

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

        products.length > 0 ?
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {products.map((product) => (
                    <ProductCard key={product.sku} product={product} />
                ))}
            </div>
            :
            <ProductErrorLoad
                message="Sin coincidencias en la búsqueda"
                icon={<FaSearch />}
            />
    );
};

export default ProductList;
