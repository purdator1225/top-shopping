import ProductCard from "../components/ProductCard";

import { useContext } from "react";
import { ShopContext } from "./Layout";

function Shop() {
  const { products } = useContext(ShopContext);

  return (
    <div className="text-center font-bold p-8">
      <h1>Welcome to A Fake Store</h1>

      <section>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Shop;
