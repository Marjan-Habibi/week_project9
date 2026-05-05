import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="p-6">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h2 className="mt-4 text-xl">Total: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}