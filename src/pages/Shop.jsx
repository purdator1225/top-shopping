import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { cartItems, setCartItems } = useOutletContext();

  useEffect(() => {
    setLoading(true);
    const productsFetch = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="text-center font-bold p-8">
      <h1>Welcome to A Fake Store</h1>

      <section>
        {loading ? (
          "Loading..."
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard
                cartContext={{ cartItems, setCartItems }}
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                rating={product.rating}
                image={product.image}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Shop;
