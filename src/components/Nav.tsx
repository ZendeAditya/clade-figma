"use client";
import React, { useState } from "react";
import { PiSuitcaseThin } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

type Props = {};

const Nav: React.FC = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <nav
      className="flex items-center justify-between px-4 py-2 h-16 borderb-b-2 border
    "
    >
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold italic cursor-pointer">
          <Link href="/">Clade</Link>
        </h1>
      </div>
      {/* desktop menu  */}
      <div className="hidden md:block">
        <ul className="flex flex-row gap-4 ps-4 py-2 [&_li]:cursor-pointer">
          <li className="flex items-center justify-start gap-2 border-2 rounded-full px-6 py-2 w-fit hover:bg-orange-500 hover:text-white hover:duration-500 hover:shadow-md">
            <span>
              <PiSuitcaseThin />
            </span>
            <span>Jobs</span>
          </li>
          <li className="flex items-center justify-start gap-2 border-2 rounded-full px-6 py-2 w-fit hover:bg-orange-500 hover:text-white hover:duration-500 hover:shadow-md">
            <span>
              <FaRegMessage />
            </span>
            <span>Messages</span>
          </li>
          <li className="flex items-center justify-start gap-2 border-2 rounded-full px-6 py-2 w-fit hover:bg-orange-500 hover:text-white hover:duration-500 hover:shadow-md">
            <span>
              <MdOutlinePayments />
            </span>
            <span>Payments</span>
          </li>
        </ul>
      </div>

      {/* mobile menu  */}
      <div
        className={`md:hidden absolute right-0 h-[calc(100vh-4rem)] top-[4rem]    bg-slate-400  border border-l-2 border-l-orange-300 w-52 ${
          !open ? "translate-x-52" : ""
        } duration-500 ease-in transition-all `}
      >
        <ul className="flex flex-col gap-4 ps-4 py-12 [&_li]:cursor-pointer">
          <li className="flex items-center justify-start gap-2 border-2 rounded-full px-6 py-2 w-fit hover:bg-orange-500 hover:text-white hover:duration-500 hover:shadow-md">
            <span>
              <PiSuitcaseThin />
            </span>
            <span>Jobs</span>
          </li>
          <li className="flex items-center justify-start gap-2 border-2 rounded-full px-6 py-2 w-fit hover:bg-orange-500 hover:text-white hover:duration-500 hover:shadow-md">
            <span>
              <FaRegMessage />
            </span>
            <span>Messages</span>
          </li>
          <li className="flex items-center justify-start gap-2 border-2 rounded-full px-6 py-2 w-fit hover:bg-orange-500 hover:text-white hover:duration-500 hover:shadow-md">
            <span>
              <MdOutlinePayments />
            </span>
            <span>Payments</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <FaRegBell size={24} />
        </div>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                alt="profile photo"
                className="w-10 h-10 rounded-full object-contain"
                width={10}
                height={10}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="md:hidden">
          {!open ? (
            <button onClick={toggleOpen}>
              <GiHamburgerMenu size={24} />
            </button>
          ) : (
            <button onClick={toggleOpen}>
              <GiHamburgerMenu size={24} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
