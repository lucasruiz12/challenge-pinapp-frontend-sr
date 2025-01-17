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

export default function ProductDetailCard({ product }: { product: Product }) {
  return (
    <div className="container mx-auto p-4 h-[80%]">
      <h1 className="text-5xl py-8">Detalle de producto</h1>
      <div className="container flex justify-center mx-auto p-4 h-[100%]">
        <div className="p-4 border rounded-2xl shadow-2xl w-[70%] bg-gradient-to-r from-[#00b7e4] via-[#001568] to-[#001568]">
          <div className="flex md:flex-row flex-col h-[100%]">
            <div className="flex flex-col justify-center items-center md:w-[50%] md:h-[100%] w-[100%] h-[50%]">
              <img className="h-[90%] md:w-[75%] w-[50%] rounded-3xl shadow-xl" src={product.image} alt={product.name} width={40} height={40} />
            </div>
            <div className="flex flex-col justify-around md:w-[50%] md:h-[100%] w-[100%] h-[50%] text-white">
              <h1 className="md:text-4xl text-lg font-semibold">{product.name} ({product.sku})</h1>
              <p className="md:text-xl text-md"><b>Descripción del producto:</b> {product.description}</p>
              <p className="md:text-xl text-md"><b>Categoría:</b> {product.category.name}</p>
              <p className="md:text-xl text-md"><b>Marca:</b> {product.brand}</p>
              <p className="md:text-xl text-md"><b>Precio de lista:</b> ${product.price}</p>
              <p className="md:text-xl text-md"><b>{product.stock}</b> unidades de stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
