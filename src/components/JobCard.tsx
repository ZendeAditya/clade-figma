import React from "react";

type Props = {};
import { CiLocationOn } from "react-icons/ci";
import { TbCoins } from "react-icons/tb";
import Skills from "./Skills";
import AboutJob from "./AboutJob";
import AboutCompany from "./AboutCompany";
import OverView from "./OverView";
const JobCard = (props: Props) => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="w-full">
        <div className=" border border-b-black/40 px-5 py-2">
            <div className="flex items-start md:items-center gap-2 lg:gap-5 justify-start flex-col md:flex-row">
            <h2 className="text-lg font-semibold">Senior Product Designer</h2>
            <p className="text-sm">posted 2 days ago</p>
            <div className="flex items-center justify-between gap-3 ps-3 text-xs">
                <span className="text-sm relative before:absolute before:h-2 before:w-2 before:rounded-full  before:bg-green-500  before:bottom-0 before:ms-3 block  -mx-3 my-3 py-1"></span>
                <span className="border border-green-500 rounded-full w-20 px-2  text-center  block bg-green-300">
                Open
                </span>
            </div>
            </div>
            <div className="flex items-center gap-3 lg:py-4">
            <div className="flex items-center justify-between gap-2">
                <span>
                <CiLocationOn />
                </span>
                <h2>Deleware,USA</h2>
            </div>
            <div className="flex items-center justify-between gap-2">
                <span>
                <TbCoins />
                </span>
                <h2>$300k-$400k</h2>
            </div>
            </div>
        </div>
        <div className=" border border-b-black/40 px-5 py-2 ">
            <Skills/>
        </div>
        <div className=" border border-b-black/40 px-5 py-2 ">
            <AboutJob/>
        </div>
        <div className=" border border-b-black/40 px-5 py-2 ">
            <AboutCompany/>
        </div>
      </div>
      <div className="lg:w-[29rem]">
        <OverView/>
      </div>
    </section>
  );
};

export default JobCard;
