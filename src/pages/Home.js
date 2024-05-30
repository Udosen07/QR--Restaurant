import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Hero from "../components/Hero";
import { IoSearchSharp } from "react-icons/io5";
import {
  FaRegHeart,
  FaYoutube,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Home = () => {
  const settings = {
    customPaging: function (i) {
      const imgUrls = [
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76SvSZnjb3rrrsYbVDwBqM8d6eYfWftVHNQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPj85ytyxEan2xjSq--qIADL0aV9RfADTq6A&s",
        "https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJv227ZVRYmMNcyCMDaqqzu5aqd46bB-cVg&s",
      ];
      return (
        <a>
          <img
            src={imgUrls[i]}
            alt={`Thumbnail ${i + 1}`}
            className="h-10 rounded-md"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb mt-10",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Background>
        <Navbar />
        <Hero />
      </Background>

      <div className="rounded-t-3xl bg-gray-300 w-full md:w-[600px] mx-auto absolute left-1/2 transform -translate-x-1/2 top-[45%] text-black">
        <div className="damonContainer">
          <h1 className="my-4 text-xl font-semibold">Dishes</h1>
          <div>
            <div className="relative w-[40%] mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IoSearchSharp className="text-gray-500" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search Products"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 px-4">
              <div className="">
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div className="space-y-2">
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <hr />
          <h1 className="my-4 text-xl font-semibold">Beverages</h1>
          <div>
            <div className="relative w-[40%] mx-auto">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IoSearchSharp className="text-gray-500" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search Products"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 px-4">
              <div className="">
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div className="space-y-2">
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>

              <div>
                <div className="w-full h-[fit-content] flex space-x-4 justify-center my-2">
                  <img
                    src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg"
                    alt="meal"
                    className="w-3/5 h-32 object-cover"
                  />
                  <FaRegHeart className="text-red-500 text-2xl cursor-pointer" />
                </div>
                <p className="text-lg">Burger</p>
                <h2 className="font-semibold text-lg">$25.00</h2>

                <button className="bg-purple-500 text-white py-2 px-16 rounded mt-4 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="slider-container py-6 px-4">
            <Slider {...settings}>
              <div className="flex justify-center w-3/5 h-[200px] md:h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-center w-3/5 h-[200px] md:h-[300px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76SvSZnjb3rrrsYbVDwBqM8d6eYfWftVHNQ&s"
                  alt="Slide 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-center w-3/5 h-[200px] md:h-[300px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPj85ytyxEan2xjSq--qIADL0aV9RfADTq6A&s"
                  alt="Slide 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-center w-3/5 h-[200px] md:h-[300px]">
                <img
                  src="https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg"
                  alt="Slide 4"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex justify-center w-3/5 h-[200px] md:h-[300px]">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJv227ZVRYmMNcyCMDaqqzu5aqd46bB-cVg&s"
                  alt="Slide 5"
                  className="object-cover w-full h-full"
                />
              </div>
            </Slider>
          </div>

          <div className="flex justify-center items-center gap-4 mt-16 mb-4">
            <div>
              <a href="#" className="text-2xl">
                <FaYoutube />
              </a>
            </div>
            <div>
              <a href="#" className="text-2xl">
                <FaSquareXTwitter />
              </a>
            </div>
            <div>
              <a href="#" className="text-2xl">
                <FaLinkedin />
              </a>
            </div>
            <div>
              <a href="#" className="text-2xl">
                <FaFacebook />
              </a>
            </div>
            <div>
              <a href="#" className="text-2xl">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
