import { FaHeartCircleMinus } from "react-icons/fa6";

const FavouritesDis = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-6 my-16">
      <div className="text-6xl">
        <FaHeartCircleMinus />
      </div>
      <p>You haven't favourited any product yet</p>
      <button className="w-[60%] bg-blue-700 text-white py-2">
        Start Shopping
      </button>
    </div>
  );
};

export default FavouritesDis;
