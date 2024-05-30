import Navbar from "../components/Navbar";
import Background from "../components/Background";

const Order = () => {
  return (
    <div>
      <Background>
        <Navbar />
      </Background>

      <div className="rounded-3xl bg-gray-300 w-full md:w-[600px] mx-auto absolute left-1/2 transform -translate-x-1/2 top-[45%] text-black">
        <div className="damonContainer my-20">
          <h1 className="text-center my-4 text-3xl font-bold">
            Order Food!!!!
          </h1>
          <div className="bg-gray-800 text-center w-[90%] mx-auto rounded-md my-8 py-4">
            <h2 className="text-white font-semibold">Give Food Order</h2>
            <p className="text-gray-300">Delivery or Pick-up Option</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
