import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2x1 pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font semibold text-lg text-gray-600">Our OFFICE</p>

          <p className="text-gray-500">
             Vinay Station
            <br /> Davanagere, INDIA
          </p>

          <p className="text-gray-500">
            Tel:(415)555-0123 <br /> Email:vinay.techdev@gamil.com
          </p>

          <p className="font-semibold text-lg">Careers at PRESCRIPTO</p>

          <p className="text-gray-500">
            Lern more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500̥">
            Explore Jobs
          </button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
