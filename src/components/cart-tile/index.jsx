import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";
import "./CartTile.css"; // Import external CSS file

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="cart-tile">
      <div className="cart-item-content">
        <img src={cartItem?.image} className="cart-item-image" alt={cartItem?.title} />
        <div className="cart-item-details">
          <h1 className="cart-item-title">{cartItem?.title}</h1>
          <p className="cart-item-price">${cartItem?.price}</p>
        </div>
      </div>
      <button onClick={handleRemoveFromCart} className="cart-remove-btn">
        Remove From Cart
      </button>
    </div>
  );
}
