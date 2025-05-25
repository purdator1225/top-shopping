import { NavLink } from "react-router";
import Cart from "./Cart";

function Header({ cartItems }) {
  return (
    <div className="p-5 bg-blue-700 text-white">
      <div className="max-w-screen-xl m-auto flex justify-center gap-4">
        <div className="flex justify-center gap-5">
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
            to="/shop"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
            to="/"
          >
            Home
          </NavLink>
        </div>

        <div className="ml-auto">
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}

export default Header;
