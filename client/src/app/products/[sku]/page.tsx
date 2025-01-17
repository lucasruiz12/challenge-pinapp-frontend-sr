'use client';

import { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import { FaExclamationTriangle, FaSearch } from 'react-icons/fa';
import Loader from '@/components/Loader';
import ProductDetailCard from '@/components/ProductDetailCard';
import ProductErrorLoad from '@/components/ProductErrorLoad';

interface Product {
  sku: string;
  name: string;
  description: string;
  image: string;
  category: {
    id: string;
    name: string;
  };
  brand: string;
  price: number;
  stock: number;
}

export default function ProductDetailPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const sku = params.sku as string;

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('/data.json');

        const data: Product[] = await response.json();
        const filterData = data.filter((el) => el.sku === sku);

        if (filterData.length === 0) {
          notFound();
        };
        
        setProduct(filterData[0]);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    fetchProduct();
  }, [sku]);

  if (loading) {
    return <Loader />;
  };

  if (!product) {
    return (
      <ProductErrorLoad
        message="Producto no encontrado"
        icon={<FaSearch />}
      />
    );
  };
  
  if (error) {
    return (
      <ProductErrorLoad
        message="No se pudo cargar"
        icon={<FaExclamationTriangle />}
      />
    );
  };

  return <ProductDetailCard product={product} />;
};
