import { Outlet } from "react-router";
import Header from "../components/Header";
import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

function Layout() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const addToCart = (product, quantityToAdd) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + quantityToAdd }
            : item
        );
      } else {
        return [...prev, { ...product, qty: quantityToAdd }];
      }
    });
  };

  useEffect(() => {
    setLoading(true);
    const productsFetch = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        setLoading(false);
      });

    return () => {};
  }, []);

  return (
    <>
      <ShopContext.Provider value={{ cartItems, products, addToCart }}>
        <Header></Header>
        <main className="max-w-screen-xl m-auto">
          {loading ? "Loading..." : <Outlet />}
        </main>
      </ShopContext.Provider>
    </>
  );
}

export default Layout;
