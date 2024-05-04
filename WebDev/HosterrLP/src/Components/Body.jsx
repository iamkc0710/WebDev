import { Input } from "postcss";
import React from "react";

const Body = () => {
  return (
    <div className="-space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end lg:items-center">
        <img
          src="./assets/Blue-Shape.svg"
          className=" -rotate-45 h-64 md:h-74 lg:h-[400px]"
        ></img>
        <img
          src="./assets/Pink-Shape.svg"
          className="absolute -rotate-[30deg] h-64 md:h-74 lg:h-[400px]"
        ></img>
        <img
          src="./assets/Purple-Shape.svg"
          className="absolute -rotate-[15deg] h-64 md:h-74 lg:h-[400px]"
        ></img>
        <img
          src="./assets/Hero-Model.png"
          className="absolute h-64 md:h-74 lg:h-[400px]"
        ></img>
      </div>

      <div className="lg:flex-1 lg:order-1 lg:justify-start lg:items-center">
        <h1 className=" text-5xl font-bold font-Playfair leading-tight">
          Host your website in less than 5 minutes.
        </h1>
        <p className="font-lato text-gray-400">
          with Hosterr, get your website up running in no less than 5 minutes
          with the most competitive pricing packages available online.
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400"
            type="email"
            placeholder="Enter E-mail Address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
            Join Waitlist
          </button>
        </form>

        <div className="flex gap-2 justify-center my-2">
          <img src="./assets/Checkmark.svg" className=""></img>
          <p className="font-lato text-gray-400">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
