import { useState } from "react";
import QuantitySelector from "./QuantitySelector";

import { useContext } from "react";
import { ShopContext } from "../pages/Layout";

function ProductCard({ title, price, image, rating, id }) {
  const { addToCart, products } = useContext(ShopContext);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const product = products.find((matchedProduct) => matchedProduct.id === id);

  return (
    <div className=" bg-stone-100 p-5 flex flex-col gap-2 text-black rounded-2xl">
      <h3 className="h-[100px]">{title}</h3>
      <img
        className="w-full object-cover object-top h-[200px]"
        src={image}
        alt={title}
      />
      <h4>$ {price}</h4>
      <p>{rating.rate}</p>
      <QuantitySelector
        quantity={quantityToAdd}
        setQuantity={setQuantityToAdd}
      />
      <button
        data-id={id}
        onClick={() => addToCart(product, quantityToAdd)}
        className="bg-red-500 p-5 text-white rounded-4xl"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
