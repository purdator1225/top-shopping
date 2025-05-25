import { Outlet } from "react-router";
import Header from "../components/Header";
import { useState } from "react";

function Layout() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <Header cartItems={cartItems}></Header>
      <main className="max-w-screen-xl m-auto min-h-screen">
        <Outlet context={{ cartItems, setCartItems }} />
      </main>
    </>
  );
}

export default Layout;
