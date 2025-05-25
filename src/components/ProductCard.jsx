import { useState } from "react";
import QuantitySelector from "./QuantitySelector";

function ProductCard({ title, price, image, rating, id, cartContext }) {
  const { cartItems, setCartItems } = cartContext;

  const [quantityToAdd, setQuantityToAdd] = useState(1);

  console.log(cartContext);

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + quantityToAdd } : item
        );
      } else {
        return [...prev, { id, price, image, title, qty: quantityToAdd }];
      }
    });

    setQuantityToAdd(1);

    console.log("cartItems", cartItems);
  };

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
        onClick={handleAddToCart}
        className="bg-red-500 p-5 text-white rounded-4xl"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
