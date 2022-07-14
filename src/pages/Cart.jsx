import React from "react";
import Announce from "../components/Announce";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div>
        <div className="flex justify-center text-5xl">Cart</div>
        <div className="flex items-center justify-between mt-4">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white">
            Continue Shopping
          </button>
          <div>
            <p>Items in yourCart : 3</p>
            <p>Whitlist Item: 0</p>
          </div>
          <button className="btn">Checkout</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
