import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function ProductList() {
  const { data, isLoading, error } = useProducts();
  const { state } = useContext(SettingsContext);

  if (isLoading) return <Loader />;

  if (error) return (
    <p className="text-center text-red-500 mt-10">
      Error loading products...
    </p>
  );

  let filtered = data || [];

  if (state.search) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(state.search.toLowerCase())
    );
  }

  if (state.category) {
    filtered = filtered.filter(
      (p) => p.category === state.category
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">
        Discover Products
      </h1>

      {/* EMPTY STATE */}
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No products found 😢
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

        </div>
      )}
    </div>
  );
}