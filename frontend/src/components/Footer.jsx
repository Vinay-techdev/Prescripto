import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        {/*-------Left section ---------*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} />
          <p className="w-full md:w-2/3 text-gray leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/*------- Center section ---------*/}
        <div>
          <p className="text-x1 font-medium md-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/*------- Right section ---------*/}
        <div>
          <p className="text-x1 font-medium md-5">GET IN TOUCH</p>
          <ul>
            <li>+91 123456789</li>
            <li>vinay.techdev2gmail.com</li>
          </ul>
        </div>
      </div>

      {/*------- Copyright Text ---------*/}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 - All Right Reserved.
        </p>
      </div>
      
    </div>
  );
};

export default Footer;
