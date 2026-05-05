import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <img src={product.image} className="h-40 mx-auto" />

      <h2 className="mt-2 font-semibold">{product.title}</h2>
      <p className="text-blue-500">${product.price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 w-full bg-blue-500 text-white py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}