import { ShoppingCart, Sun, Moon } from "lucide-react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { state, dispatch } = useContext(SettingsContext);
  const cart = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="flex justify-between items-center p-4 bg-yellow-400 shadow">
      <Link to="/" className="font-bold text-xl">Store</Link>

      <input
        placeholder="Search..."
        className="px-3 py-1 rounded"
        onChange={(e) =>
          dispatch({ type: "SET_SEARCH", payload: e.target.value })
        }
      />

      <div className="flex gap-4 items-center">
        <button
          onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        >
          {state.theme === "light" ? <Moon /> : <Sun />}
        </button>

        <Link to="/cart" className="relative">
          <ShoppingCart />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded">
            {cart}
          </span>
        </Link>
      </div>
    </div>
  );
}