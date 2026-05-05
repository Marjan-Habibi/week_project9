import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="h-40 mx-auto" />
        <h2 className="mt-2 font-semibold line-clamp-2">
          {product.title}
        </h2>
      </Link>

      <p className="text-yellow-500 font-bold">${product.price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 w-full bg-yellow-400 py-2 rounded-xl"
      >
        Add to Cart
      </button>
    </div>
  );
}