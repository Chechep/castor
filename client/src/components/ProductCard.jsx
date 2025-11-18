import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800">
      <img src={product.image} className="w-full h-48 object-cover rounded-xl mb-3" />
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-sm opacity-70">{product.size}</p>
      <p className="font-bold mt-2">Ksh {product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="block mt-3 px-4 py-2 text-center bg-black text-white rounded-lg dark:bg-white dark:text-black"
      >
        View
      </Link>
    </div>
  );
}
