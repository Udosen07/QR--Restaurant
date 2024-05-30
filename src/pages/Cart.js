import Navbar from "../components/Navbar";
import Background from "../components/Background";
import OrderDis from "../components/OrderDis";
import { useState } from "react";
import FavouritesDis from "../components/FavouritesDis";

const Cart = () => {
  const [toggle, setToggle] = useState(false);

  const handleFavouritesToggle = () => {
    setToggle(true);
  };

  const handleOrderToggle = () => {
    setToggle(false);
  };

  return (
    <div>
      <Background>
        <Navbar />
      </Background>

      <div className="rounded-3xl bg-gray-300 w-full md:w-[600px] mx-auto absolute left-1/2 transform -translate-x-1/2 top-[45%] text-black">
        <div className="damonContainer my-4">
          <p className="text-lg font-semibold mb-8">Your Cart</p>
          <div className="flex  items-center bg-gray-600 p-1 rounded-md cursor-pointer">
            <p
              className={`  ${
                toggle
                  ? "text-center w-full"
                  : "text-center w-full bg-white rounded-md"
              }`}
              onClick={handleOrderToggle}
            >
              Order Summary
            </p>
            <p
              className={`  ${
                toggle
                  ? "text-center w-full bg-white rounded-md"
                  : "text-center w-full"
              }`}
              onClick={handleFavouritesToggle}
            >
              Favorites
            </p>
          </div>
          {toggle ? <FavouritesDis /> : <OrderDis />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
