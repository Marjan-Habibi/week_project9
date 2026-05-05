import { useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between p-4 border-b">
      <p>{item.title}</p>

      <div className="flex gap-2">
        <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      </div>

      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
}