import React from "react";
import { useOutletContext } from "react-router";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";
import CartCard from "./CartCard";

function CartPage() {
  const { cartItems, setCartItems } = useOutletContext();

  const [quantityToAddCart, setQuantityToAddCart] = useState();

  return (
    <>
      <h2 className="text-center my-10">This is Your Cart</h2>
      <div>
        {cartItems.map((cartItem) => (
          <CartCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </>
  );
}

export default CartPage;
