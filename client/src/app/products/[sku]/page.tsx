'use client';

import { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import Loader from '@/components/Loader';

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
};

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
        // Realizamos fetch a un JSON local y filter a su respuesta para simular el servidor. En condiciones normales, el filter vendría hecho desde el backend.
        // const response = await fetch(`http://localhost:3001/products?sku=${sku}`);
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }

        const data: [Product] = await response.json();
        const filterData = data.filter(el => el.sku === sku);

        if (filterData.length === 0) {
          notFound();
        };

        setProduct(filterData[0]);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Hubo un error al cargar el producto');
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      };
    };

    fetchProduct();
  }, [sku]);

  if (loading) {
    return <Loader />;
  };

  if (error) {
    return <div>{error}</div>;
  };

  if (!product) {
    return <div>No se encontró el producto</div>;
  };

  return (
    <div className="container mx-auto p-4 h-[80%]">
      <h1 className="text-5xl py-8">Detalle de producto</h1>
      <div className="container flex justify-center mx-auto p-4 h-[100%]">
        <div className="p-4 border rounded w-[70%]">
          <div className="flex flex-row h-[100%]">
            <div className="flex flex-col justify-center items-center w-[50%] h-[100%]">
              <img className="h-[90%] w-[75%]" src={product.image} alt={product.name} width={40} height={40} />
            </div>
            <div className="flex flex-col w-[50%] h-[100%]">
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p>Precio: ${product.price}</p>
              <p>Stock: {product.stock}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
