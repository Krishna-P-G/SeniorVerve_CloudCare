import React from "react";
import { logo } from "../../assets";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span pr-12">
          <span
            className="h-[25px] font-bold pb-12"
            style={{
              color: "#20B486",
              fontSize: "35px",
              fontFamily: "inherit",
            }}
          >
            SeniorVerve
          </span>
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className="py-2 text-[#6D737A]">Call :91+ 9876543210</h3>
          <h3 className="py-2 text-[#6D737A]">
            Sri Krishna College of Technology <br></br> Kovaipudur, Coimbatore
          </h3>
          <h3 className="py-2 text-[#363A3D]">Email: example@mail.com</h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaDribbble size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaLinkedinIn size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <FaInstagram size={25} style={{ color: "#4DC39E" }} />
            </div>
            {/* <div className='p-4 bg-[#E9F8F3] rounded-xl'><FaBehance size={25} style={{color:'#4DC39E'}} /></div> */}
          </div>
        </div>

        <div className="pl-16 pt-4">
          <h3 className="text-2xl font-bold">Explore</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Services</li>
            <li className="py-2">Achievements</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>

        <div className="pl-16 pt-4">
          <h3 className="text-2xl font-bold">Home Services</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Personal Care Assistance</li>
            <li className="py-2">Housekeeping </li>
            <li className="py-2"> Electrician </li>
            <li className="py-2"> Driver </li>
            <li className="py-2"> Plumber </li>
          </ul>
        </div>

        <div className="max-[780px]:col-span-2 col-span-2 pl-16 pt-4">
          <h3 className="text-2xl font-bold">Stay in the Loop</h3>
          <h3 className="py-8 pr-4 text-[#6D737A]">
            Discover the latest updates and exclusive offers straight to your
            inbox. Join now and never miss out!
          </h3>
          <form className="pr-16">
            <input
              className="bg-[#F2F3F4] p-4 w-full rounded"
              placeholder="Email here"
            />
            <button className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
