import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import "./Home.css"; 
import ProductTile from "../components/product-tile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchListOfProducts() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products. Please try again later.");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <div className="loader-container">
          <Circles height="120" width="120" color="#7F1D1D" visible={true} />
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
