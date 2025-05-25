import React from "react";
import QuantitySelector from "./QuantitySelector";
import { useState } from "react";
import CartCard from "./CartCard";

import { useContext } from "react";
import { ShopContext } from "../pages/Layout";

function CartPage() {
  const [quantityToAddCart, setQuantityToAddCart] = useState();

  const { cartItems } = useContext(ShopContext);

  return (
    <>
      <h2 className="text-center my-10">This is Your Cart</h2>
      <div>
        {cartItems.map((cartItem) => (
          <CartCard key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div>Totals: </div>
    </>
  );
}

export default CartPage;
