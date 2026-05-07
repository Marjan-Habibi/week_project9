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
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { state, dispatch } = useContext(SettingsContext);
  const cart = useSelector((s) => s.cart.totalQuantity);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // Categories
  const categories = [
    { label: "All", value: "" },
    { label: "Men", value: "men's clothing" },
    { label: "Women", value: "women's clothing" },
    { label: "Electronics", value: "electronics" },
    { label: "Jewelry", value: "jewelery" },
  ];

  // Handle category click
  const handleCategory = (value) => {
    dispatch({
      type: "SET_CATEGORY",
      payload: value,
    });

    navigate("/");
    setOpen(false);
  };

  return (
    <div
      className={`sticky top-0 z-50 shadow-md border-b transition duration-300 ${
        state.theme === "dark"
          ? "bg-[#0b1220] border-gray-800 text-white"
          : "bg-white border-gray-200 text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-500 hover:scale-105 transition"
        >
          🛍 Product Store
        </Link>

        {/* DESKTOP CATEGORIES */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium">

          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategory(cat.value)}
              className={`transition hover:text-yellow-500 ${
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
            className={`w-full px-4 py-2 pl-10 rounded-xl outline-none border transition ${
              state.theme === "dark"
                ? "bg-gray-900 border-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                : "bg-white border-gray-300 text-black focus:ring-2 focus:ring-yellow-400"
            }`}
            onChange={(e) =>
              dispatch({
                type: "SET_SEARCH",
                payload: e.target.value,
              })
            }
          />

          <Search
            className="absolute left-3 top-2.5 text-gray-400"
            size={18}
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">

          {/* THEME BUTTON */}
          <button
            onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className={`p-2 rounded-full transition ${
              state.theme === "dark"
                ? "hover:bg-gray-800"
                : "hover:bg-gray-100"
            }`}
          >
            {state.theme === "light" ? <Moon /> : <Sun />}
          </button>

          {/* CART */}
          <Link
            to="/cart"
            className="relative hover:scale-110 transition"
          >
            <ShoppingCart size={26} />

            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs px-2 rounded-full font-bold">
              {cart}
            </span>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className={`md:hidden px-6 pb-5 space-y-4 ${
            state.theme === "dark"
              ? "bg-[#0b1220]"
              : "bg-white"
          }`}
        >

          {/* MOBILE SEARCH */}
          <input
            type="text"
            placeholder="Search..."
            className={`w-full px-4 py-2 rounded-xl outline-none border ${
              state.theme === "dark"
                ? "bg-gray-900 border-gray-700 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
            onChange={(e) =>
              dispatch({
                type: "SET_SEARCH",
                payload: e.target.value,
              })
            }
          />

          {/* MOBILE CATEGORIES */}
          <div className="space-y-2">

            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategory(cat.value)}
                className={`block w-full text-left transition ${
                  state.category === cat.value
                    ? "text-yellow-500 font-bold"
                    : "hover:text-yellow-500"
                }`}
              >
                {cat.label}
              </button>
            ))}

          </div>

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block"
          >
            Home
          </Link>

          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className="block"
          >
            Cart
          </Link>

        </div>
      )}
    </div>
  );
}