import React from "react";
import { useState } from "react";
import QuantitySelector from "./QuantitySelector";

function CartCard({ cartItem }) {
  const { qty, id, image, title, price } = cartItem;
  const [quantityToAddCart, setQuantityToAddCart] = useState(qty);
  return (
    <div className="bg-slate-300 p-6 rounded-2xl">
      <div className="flex gap-8 items-center">
        <img className="h-[100px] aspect-square" src={image} alt={title} />
        <h3>{title}</h3>

        <div className="ml-auto flex items-center gap-16">
          <QuantitySelector
            quantity={quantityToAddCart}
            setQuantity={setQuantityToAddCart}
          />
          <h5>$ {Number(quantityToAddCart * price).toFixed(2)}</h5>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
