"use client";

import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import Link from "next/link";

type Product = {
  sku: string;
  name: string;
  category: { name: string } | null; // category como un objeto opcional
  brand: string;
  price: number;
};

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Función que hace el fetch a la API de productos
  const fetchProducts = async (sku: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/products`);
      const data: Product[] = await response.json();
      const filterData = data.filter(el => el.sku.includes(sku) || el.name.includes(sku));
      setProducts(filterData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Callback de debounce usando useCallback
  const debouncedFetchProducts = useCallback(
    debounce((value: string) => fetchProducts(value), 500),
    []
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      debouncedFetchProducts(value);
    } else {
      setProducts([]); // Limpia los productos si el término está vacío
    }
  };

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        placeholder="Buscar por SKU o nombre"
        className="p-2 border rounded"
        onChange={handleSearch}
        value={searchTerm}
      />
      {loading ? (
        <div className="loader">Cargando...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.map((product) => (
            <div key={product.sku} className="p-4 border rounded">
              <h2>SKU: {product.sku}</h2>
              <p>Producto: {product.name || "Nombre no disponible"}</p>
              <p>
                {typeof product.category === "object" && product.category !== null && typeof product.category.name === "string"
                  ? `Categoría: ${product.category.name}`
                  : "Categoría no disponible"}
              </p>
              <p>Marca: {product.brand || "Marca no disponible"}</p>
              <p>Precio: {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : "Precio no disponible"}</p>
              <Link href={`/products/${product.sku}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Ver Detalle</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
