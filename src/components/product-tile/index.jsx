import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";
import "./ProductTile.css"; // ✅ Import CSS file

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <img
          src={product?.image}
          alt={product?.title}
          className="product-image"
        />
      </div>

      {/* Product Title */}
      <h1 className="product-title">{product?.title}</h1>

      {/* Product Price */}
      <p className="product-price">${product?.price}</p>

      {/* Add/Remove Button */}
      <button
        onClick={
          cart.some((item) => item.id === product.id)
            ? handleRemoveFromCart
            : handleAddToCart
        }
        className="product-button"
      >
        {cart.some((item) => item.id === product.id)
          ? "Remove from Cart"
          : "Add to Cart"}
      </button>
    </div>
  );
}
