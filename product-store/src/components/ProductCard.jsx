import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { state } = useContext(SettingsContext);

  return (
    <div
      className={`rounded-2xl p-4 shadow-lg transition hover:scale-[1.02] hover:shadow-2xl ${
        state.theme === "dark"
          ? "bg-gray-800 text-white"
          : "bg-white text-black"
      }`}
    >
      <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
        {product.category}
      </span>

      <img
        src={product.image}
        alt={product.title}
        className="h-44 mx-auto object-contain mt-4"
      />

      <h2 className="mt-4 font-semibold line-clamp-2 min-h-[50px]">
        {product.title}
      </h2>


      <p className="text-sm text-yellow-500 mt-1">
        ⭐ {product.rating?.rate}
      </p>

      <p className="text-2xl font-bold text-yellow-400 mt-2">
        ${product.price}
      </p>

     
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-medium transition duration-300"
      >
  
      </button>
    </div>
  );
}