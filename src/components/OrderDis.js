import { FaCartPlus } from "react-icons/fa";

const OrderDis = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 my-16">
      <div className="text-6xl">
        <FaCartPlus />
      </div>
      <p>Your cart is empty</p>
      <button className="w-[60%] bg-blue-700 text-white py-2">
        Start Shopping
      </button>
    </div>
  );
};

export default OrderDis;
