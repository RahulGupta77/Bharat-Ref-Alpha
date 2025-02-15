import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { IoReaderOutline } from "react-icons/io5";
import { MdPhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { CoreCompetencies } from "./CoreCompetencies";

const HomePage = () => {
  return (
    <>
      <section className="container grid lg:grid-cols-2 place-items-center gap-10">
        {/* Left Column: Text Content */}
        <div className="text-center lg:text-start space-y-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
              Bharat Refrigeration,
            </span>{" "}
            Industrial Expert for{" "}
            <div className="bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Air-Conditioning
            </div>{" "}
            Needs
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Your Trusted A.M.C Contractor for Industrial Cooling Systems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center md:justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-1/3 ">
              <Link
                to={"/services"}
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <IoReaderOutline className="h-8 w-8 md:h-12 md:w-12" />
                Learn More
              </Link>
            </Button>

            <Link
              to={"/contacts"}
              rel="noopener noreferrer"
              className="w-full md:w-1/3 flex items-center justify-center gap-3 px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors"
            >
              <MdPhoneInTalk />
              Contact Us
            </Link>
          </div>
        </div>

        <div className="md:w-[550px] w-[370px] lg:w-[700px]">
          <AspectRatio ratio={16 / 9}>
            <img
              src="/assets/hero_img.png"
              alt="Client Industry Image"
              className="h-full w-full rounded-md object-cover"
            />
          </AspectRatio>
        </div>

        {/* Shadow Effect */}
        <div className="shadow"></div>
      </section>

      <Separator />

      <section className="py-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-gradient-to-r from-[#FFA500] to-[#FF4500] text-transparent bg-clip-text">
            Our Core Competencies{" "}
          </span>
        </h2>

        <CoreCompetencies />
      </section>
    </>
  );
};

export default HomePage;
