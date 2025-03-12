import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";
import "./Cart.css"; // Import CSS

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  
  // ✅ Ensure correct state access
  const cart = useSelector((state) => state.cart.items); 

  // ✅ Prevent reduce errors
  useEffect(() => {
    if (Array.isArray(cart) && cart.length > 0) {
      setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
    } else {
      setTotalCart(0);
    }
  }, [cart]);

  return (
    <div className="cart-container">
      {cart.length > 0 ? (
        <>
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((cartItem) => (
                <CartTile key={cartItem.id} cartItem={cartItem} />
              ))}
            </div>
          </div>
          <div className="cart-summary">
            <h1 className="summary-title">Your Cart Summary</h1>
            <p>
              <span className="summary-text">Total Items:</span> {cart.length}
            </p>
            <p>
              <span className="summary-text">Total Amount:</span> ${totalCart.toFixed(2)}
            </p>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h1>Your cart is empty</h1>
          <Link to="/">
            <button className="shop-button">SHOP NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
}
