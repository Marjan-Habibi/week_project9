import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProduct } from "../services/api";

export default function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchSingleProduct(id),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img src={data.image} className="h-60" />
      <h1 className="text-xl font-bold">{data.title}</h1>
      <p>{data.description}</p>
      <p>${data.price}</p>
    </div>
  );
}