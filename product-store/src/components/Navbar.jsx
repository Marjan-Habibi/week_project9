import {
  ShoppingCart,
  Sun,
  Moon,
  Search,
  Menu
} from "lucide-react";

import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { state, dispatch } = useContext(SettingsContext);
  const cart = useSelector((s) => s.cart.totalQuantity);
  const [open, setOpen] = useState(false);

  // ✅ categories (هماهنگ با FakeStore API)
  const categories = [
    { label: "All", value: "" },
    { label: "Men", value: "men's clothing" },
    { label: "Women", value: "women's clothing" },
    { label: "Electronics", value: "electronics" },
    { label: "Jewelry", value: "jewelery" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 shadow-md transition ${
        state.theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-500 hover:opacity-80 transition"
        >
          🛍 Product Store
        </Link>

        {/* DESKTOP CATEGORIES */}
        <div className="hidden md:flex gap-5 text-sm font-medium">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() =>
                dispatch({ type: "SET_CATEGORY", payload: cat.value })
              }
              className={`hover:text-yellow-500 transition ${
                state.category === cat.value
                  ? "text-yellow-500 font-bold"
                  : ""
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* SEARCH */}
        <div className="hidden md:block relative w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 pl-10 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 bg-transparent"
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH", payload: e.target.value })
            }
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* DARK MODE */}
          <button
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {state.theme === "light" ? <Moon /> : <Sun />}
          </button>

          {/* CART */}
          <Link
            to="/cart"
            className="relative hover:scale-110 transition"
          >
            <ShoppingCart size={26} />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 rounded-full">
              {cart}
            </span>
          </Link>

          {/* MOBILE MENU */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">

          {/* SEARCH MOBILE */}
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-xl outline-none"
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH", payload: e.target.value })
            }
          />

          {/* CATEGORIES MOBILE */}
          <div className="space-y-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  dispatch({ type: "SET_CATEGORY", payload: cat.value });
                  setOpen(false);
                }}
                className="block w-full text-left hover:text-yellow-500"
              >
                {cat.label}
              </button>
            ))}
          </div>

          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>

          <Link to="/cart" onClick={() => setOpen(false)} className="block">
            Cart
          </Link>
        </div>
      )}
    </div>
  );
}