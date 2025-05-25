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
      <div className="flex flex-col">
        <h2 className="text-center my-10">This is Your Cart</h2>
        <div>
          {cartItems.map((cartItem) => (
            <CartCard key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="text-xl p-6 ml-auto">
          <h2>
            Total: ${" "}
            {cartItems
              .reduce(
                (acc, currentValue) =>
                  acc + currentValue.qty * currentValue.price,
                0
              )
              .toFixed(2)}
          </h2>
        </div>
      </div>
    </>
  );
}

export default CartPage;
