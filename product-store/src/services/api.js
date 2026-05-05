import axios from "axios";

export const fetchProducts = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data;
};

export const fetchSingleProduct = async (id) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};