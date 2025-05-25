import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router";

function Cart({ cartItems }) {
  return (
    <NavLink to={"/cart"}>
      <div className="h-full">
        <div className="relative">
          <div className="absolute top-[-15px] left-[-25px] rounded-full bg-red-500 aspect-auto px-2">
            {cartItems.reduce((acc, currentValue) => acc + currentValue.qty, 0)}
          </div>
          <FiShoppingCart size={30} />
        </div>

        {/* <div>{total}</div> */}
      </div>
    </NavLink>
  );
}

export default Cart;
