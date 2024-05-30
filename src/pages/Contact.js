import Navbar from "../components/Navbar";
import Background from "../components/Background";

const Contact = () => {
  return (
    <div>
      <Background>
        <Navbar />
      </Background>

      <div className="rounded-3xl bg-gray-300 w-full md:w-[600px] mx-auto absolute left-1/2 transform -translate-x-1/2 top-[45%] text-black">
        <div className="damonContainer my-16">
          <h1 className="text-center my-4 text-3xl font-bold">Contact Us</h1>
          <div className="bg-green-400 text-center w-full rounded-md my-8 py-4 cursor-pointer">
            <h2 className="text-white font-semibold">Visit our Website</h2>
          </div>
          <div className="flex items-center gap-4 my-4">
            <div className="bg-green-600 text-center w-full rounded-md py-4 cursor-pointer">
              <h2 className="text-white font-semibold">Call Us</h2>
            </div>
            <div className="bg-gray-400 text-center w-full rounded-md py-4 cursor-pointer">
              <h2 className="text-white font-semibold">Email Us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
