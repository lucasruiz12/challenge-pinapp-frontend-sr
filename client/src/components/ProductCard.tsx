import Link from 'next/link';

type Product = {
  sku: string;
  name: string;
  category: { name: string } | null;
  brand: string;
  price: number;
};

interface ProductCardProps {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="p-4 border rounded">
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
        <button className="bg-blue-800 text-white px-4 py-2 rounded mt-2">Ver Detalle</button>
      </Link>
    </div>
  );
};

export default ProductCard;
