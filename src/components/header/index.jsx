import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">

        <Link to="/" className="logo">
          REACT REDUX SHOPPING CART
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li>
            <Link to="/cart" className="nav-link">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
