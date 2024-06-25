import React from "react";
import { CiTrash } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { FiUsers, FiUserCheck, FiMessageSquare, FiEye } from "react-icons/fi";
type Props = {};

const OverView = (props: Props) => {
  return (
    <main className="py-4">
      <div className="flex items-center justify-start lg:justify-between px-4 gap-4 text-xs">
        <button className="flex items-center text-center hover:text-white gap-2 py-2 px-8 rounded-md bg-orange-300 border border-orange-600">
          <CiTrash /> <span>Delete Job</span>
        </button>
        <button className="flex items-center text-center text-white gap-2 py-2 px-8 rounded-md bg-orange-600 border border-orange-600">
          <GoPencil /> <span>Edit Job</span>
        </button>
      </div>
      <div className="py-3 flex flex-col gap-4 text-center">
        <div className="flex items-center justify-start lg:justify-between px-4 gap-4 ">
          <div className="flex items-center justify-start lg:justify-between px-4 gap-2 ">
            <FiUsers />
            <span>Applications</span>
          </div>
          <div>
            <h2>400</h2>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-start lg:justify-between px-4 gap-4 ">
          <div className="flex items-center justify-start lg:justify-between px-4 gap-2 ">
            <FiUserCheck />
            <span>Matches</span>
          </div>
          <div>
            <h2>100</h2>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-start lg:justify-between px-4 gap-4 ">
          <div className="flex items-center justify-start lg:justify-between px-4 gap-2 ">
            <FiMessageSquare />
            <span>Messages</span>
          </div>
          <div>
            <h2>147</h2>
          </div>
        </div>
        <hr />

        <div className="flex items-center justify-start lg:justify-between px-4 gap-4 ">
          <div className="flex items-center justify-start lg:justify-between px-4 gap-2 ">
            <FiEye />
            <span>Views</span>
          </div>
          <div>
            <h2>800</h2>
          </div>
        </div>
        <hr />
      </div>
    </main>
  );
};

export default OverView;
