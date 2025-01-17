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
    <div className="p-4 border rounded-2xl shadow-2xl w-full bg-gradient-to-r from-[#00b7e4] via-[#00b7e4] to-[#e10000] transition duration-500 hover:border-[#001568]">
      <h2 className="text-xl text-white font-semibold">SKU: {product.sku}</h2>
      <p className="text-md text-white">{product.name || "Nombre no disponible"}</p>
      <p className="text-md text-white">
        {typeof product.category === "object" && product.category !== null && typeof product.category.name === "string"
          ? `Categoría: ${product.category.name}`
          : "Categoría no disponible"}
      </p>
      <p className="text-md text-white">Marca: {product.brand || "Marca no disponible"}</p>
      <p className="text-md text-white">
        Precio: {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : "Precio no disponible"}
      </p>
      <Link href={`/products/${product.sku}`}>
        <button className="bg-blue-800 text-white px-6 py-3 rounded-lg mt-4 transition transform hover:scale-105 hover:bg-blue-700">
          Ver Detalle
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
