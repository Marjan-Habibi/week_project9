import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector((state) => state.cart.items);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          Your cart is empty 😢
        </p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* TOTAL */}
          <div className="mt-6 text-right border-t pt-4">
            <h3 className="text-xl font-bold text-yellow-500">
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </>
      )}

    </div>
  );
}