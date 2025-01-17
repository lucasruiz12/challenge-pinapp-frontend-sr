"use client";

import React, { useState, useCallback, useEffect } from "react";
import { debounce } from "lodash";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

type Product = {
  sku: string;
  name: string;
  category: { name: string } | null;
  brand: string;
  price: number;
};

export default function Page() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchProducts = async (sku: string) => {
    setLoading(true);
    try {
      // Realizamos fetch a un JSON local y filter a su respuesta para simular el servidor. En condiciones normales, el filter vendría hecho desde el backend.
      // const response = await fetch(`http://localhost:3001/products`);
      const response = await fetch('/data.json');
      const data: Product[] = await response.json();
      const filterData = data.filter((el) => el.sku.includes(sku.toUpperCase()) || el.name.includes(sku.toUpperCase()));
      setProducts(filterData);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Error fetching products:", error);
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
  };

  const debouncedFetchProducts = useCallback(debounce((value: string) => fetchProducts(value), 500), []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      debouncedFetchProducts(value);
    } else {
      setTimeout(() => {
        setProducts([]);
      }, 1500);
    };
  };

  useEffect(() => {
    if (searchTerm) {
      debouncedFetchProducts(searchTerm);
    };
  }, [searchTerm]);

  return (
    <div className="container mx-auto p-4 h-[80%]">
      <h1 className="text-5xl py-8">Buscador de productos</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
      <ProductList products={products} loading={loading} />
    </div>
  );
};
