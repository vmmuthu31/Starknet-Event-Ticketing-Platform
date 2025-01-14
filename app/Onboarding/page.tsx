"use client";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import Assets from "../components/Assets/Assets";
import { motion } from "framer-motion";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className=" bg-[url('/BgImg2.webp')] bg-cover bg-center min-h-screen text-black MediumDisp">
      <div className="py-3 md:py-6">
        <div className="text-customEnd">
          <Header />
        </div>
        <div className=" flex justify-center items-center max-h-screen pt-16">
          <div className="h-[550px] w-[410px] bg-[#F4F9FF] border border-[#4390F2]/30 rounded-[30px] custom-shadow p-5 space-y-3 ">
            <div className="bg-[#EDF3F0] w-fit mx-auto rounded-[10px] border-2 border-[#4390F2]/20">
              <Image
                className="p-3 h-14 rounded-[10px] w-auto mx-auto "
                src={Assets.Login}
                alt="Login"
              />
            </div>
            <p className=" text-2xl bricolage-font text-center font-semibold">
              Sign in with email
            </p>
            <h1 className=" text-sm text-center">
              Log in to manage your events, access tickets, <br /> and explore
              new opportunities.
            </h1>
            <div className=" space-y-1">
              <h1 className=" ">Name</h1>
              <input
                type="text"
                placeholder="you@gmail.com"
                className=" w-full p-2 px-4 rounded-[10px] bg-[#4390F2]/5 border-2 border-[#4390F2]/40"
              />
            </div>
            <div className=" space-y-1">
              <h1 className=" ">Password</h1>
              <input
                type="text"
                placeholder="Password"
                className=" w-full p-2 px-4 rounded-[10px] bg-[#4390F2]/5 border-2 border-[#4390F2]/40"
              />
              <p className=" text-black/60 flex justify-end text-sm hover:underline hover:cursor-pointer">
                Forgot Password?
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="text-white bg-[#4390F2] w-full p-2 px-3 flex justify-center items-center border-4 border-[#78ABFC] rounded-[10px]"
            >
              Get Started
            </motion.button>

            <div className="py-3 relative">
              <div className="border-b-2 border-dashed border-black/40 relative"></div>
              <h1 className="bg-[#F4F9FF] w-fit absolute top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 z-10">
                or sign in with
              </h1>
            </div>

            <motion.h1
              whileTap={{ scale: 0.9 }}
              className="text-black/60 bg-[#F4F9FF] w-full p-3 flex justify-center items-center gap-2 custom-shadow BookHead border border-white/10 rounded-[10px]"
            >
              <Image
                className=" h-6 w-auto "
                src={Assets.Google}
                alt="Google"
              ></Image>
              Sign in with Google
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
