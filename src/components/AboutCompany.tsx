import React from "react";

type Props = {};
import Image from "next/image";
import logoa from "../../public/logoa.png";
const AboutCompany = (props: Props) => {
  return (
    <div className="">
      <div className="flex items-center justify-start gap-2">
        <Image src={logoa} alt="company" className="h-10 w-10 rounded-md" />
        <h2>Atlassian</h2>
      </div>

      <div className="flex items-center justify-start py-3 [&_ul>li>span]:text-sm [&_ul>li>h3]:text-lg [&_ul>li]:py-2 gap-5 lg:gap-10">
        <ul>
          <li>
            <h3>Company Size</h3>
            <span>1k-2k Employees</span>
          </li>

          <li>
            <h3>Sector </h3>
            <span>Information technology, <br /> Infrastructure</span>
          </li>
          <li>
            <h3>Founded In </h3>
            <span>2019</span>
          </li>
        </ul>
        <ul>
          <li>
            <h3>Type </h3>
            <span>Privet</span>
          </li>

          <li>
            <h3>Funding </h3>
            <span>Bootstrapped</span>
          </li>
          <li>
            <h3>Founded By </h3>
            <span>Scott Farquhar, Mike Cannon-Brookes</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCompany;
