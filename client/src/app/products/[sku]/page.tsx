'use client';

import { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';

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
  const params = useParams(); // Uso del hook useParams para obtener el sku de la URL

  const sku = params.sku as string; // Aseguramos que sku es de tipo string

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null); 

      try {
        const response = await fetch(`http://localhost:3001/products?sku=${sku}`);
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }

        const data = await response.json();
        if (data.length === 0) {
          notFound(); // Redirige a la página 404 si no se encuentra el producto
        }

        setProduct(data[0]);
      } catch (err) {
        setError('Hubo un error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [sku]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}
