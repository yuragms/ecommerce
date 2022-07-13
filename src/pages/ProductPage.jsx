import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            alt="product_image"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10">
          <h1 className="title text-[40px]">Creamy Hoody Original</h1>
          <p className="pr-20[4rem] text-justify mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            molestiae voluptatem. Fugit incidunt eligendi id quas pariatur sint
            consectetur earum? Accusantium aspernatur illo fugiat possimus quod,
            amet maxime sit! Deleniti!
          </p>
          <p className="mt-7 text-3xl">
            Price:<b>$70</b>
          </p>
          <div className="flex text-2xl mt-7">
            {/* color variants */}
            Colors
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5"></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5">
              <option selected disabled>
                Select
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;