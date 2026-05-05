import { useProducts } from "../hooks/useProducts";
import ProductCard from "./ProductCard";
import Loader from "./Loader";
import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export default function ProductList() {
  const { data, isLoading, error } = useProducts();
  const { state } = useContext(SettingsContext);

  if (isLoading) return <Loader />;
  if (error) return <p>Error...</p>;

  const filtered = data.filter((p) =>
    p.title.toLowerCase().includes(state.search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}