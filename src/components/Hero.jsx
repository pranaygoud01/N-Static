import React, { useState } from "react";
import { SiGooglegemini } from "react-icons/si";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="flex justify-center border-b border-b-neutral-300 relative">
      {/* Watermark Logo */}
      <img
        src={logo}
        alt="Watermark Logo"
        className="pointer-events-none select-none opacity-10 absolute inset-0 m-auto max-w-xs max-h-xs z-0"
      />

      <div className="max-w-8xl min-h-[60vh] lg:h-[70vh] max-lg:px-5 px-10 gap-10 w-full grid grid-cols-1 md:grid-cols-2 relative z-10">
        {/* Left Content */}
        <div className="flex flex-col gap-4 justify-center relative pt-10 max-lg:pt-5 md:py-0">
          <span className="absolute top-15 max-lg:top-6 max-lg:right-3 right-15">
            <SiGooglegemini className="text-careys-pink-900  text-xl" />
          </span>
          <p className="text-xs text-careys-pink-500  font-semibold">SUSHI AND SHAKES</p>
          <h1 className="font-semibold text-2xl md:text-4xl uppercase leading-tight text-black">
            Taste the Artistry of Sushi & the Indulgence of Shakes
          </h1>
          <p className="text-neutral-500 text-xs md:text-base">
            Savor the freshest sushi rolls, handcrafted with precision,
            alongside decadent shakes bursting with flavor. Dive into a creative
            menu where every bite promises tradition, excitement, and a sweet
            finish. Welcome to your new favorite spot for sushi cravings and
            shake delights!
          </p>

          <div className="flex  sm:flex-row items-start sm:items-center gap-3 mt-5">
            <a
              href="https://order.sushiandshakes.com/"
              className="font-semibold text-white px-8 py-2  text-xl max-lg:text-lg  bg-careys-pink-700 "
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="w-full  h-64 md:h-auto bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
