import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function Sidebar() {
  const { dispatch } = useContext(SettingsContext);

  return (
    <div className="w-64 bg-white p-4 shadow rounded-xl">

      <h2 className="font-bold mb-3">Categories</h2>

      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "" })}>
        All
      </button>

      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "cars" })}>
        Cars 🚗
      </button>

      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "cosmetics" })}>
        Cosmetics 💄
      </button>

      <button onClick={() => dispatch({ type: "SET_CATEGORY", payload: "toys" })}>
        Toys 🧸
      </button>

    </div>
  );
}