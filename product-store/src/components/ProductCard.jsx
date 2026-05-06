import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md 
    hover:shadow-2xl transition duration-300 hover:-translate-y-1 relative overflow-hidden">

      {/* IMAGE */}
      <Link to={`/product/${product.id}`}>
        <div className="h-44 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            className="h-full object-contain group-hover:scale-110 transition duration-300"
          />
        </div>
      </Link>

      {/* CATEGORY BADGE */}
      <span className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded-full">
        {product.category}
      </span>

      {/* TITLE */}
      <Link to={`/product/${product.id}`}>
        <h2 className="mt-3 text-sm font-semibold line-clamp-2 hover:text-yellow-500 transition">
          {product.title}
        </h2>
      </Link>

      {/* RATING */}
      <div className="flex items-center gap-1 mt-1 text-yellow-500">
        <Star size={14} />
        <span className="text-xs text-gray-500">
          {product.rating?.rate || 4.5}
        </span>
      </div>

      {/* PRICE */}
      <p className="text-yellow-500 font-bold text-lg mt-2">
        ${product.price}
      </p>

      {/* BUTTON */}
      <button
        onClick={() => {
          dispatch(addToCart(product));
          toast.success("Added to cart 🛒");
        }}
        className="mt-3 w-full flex items-center justify-center gap-2 
        bg-yellow-400 hover:bg-yellow-500 active:scale-95 
        transition py-2 rounded-xl shadow-md hover:shadow-lg"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </button>

    </div>
  );
}