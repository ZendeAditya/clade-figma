import React from "react";

type Props = {};

const JobPreview = (props: Props) => {
  return (
    <main>
      <ul className="flex items-center justify-between gap-2 px-2 lg:px-8 flex-wrap py-2 text-sm md:text-lg lg:text-xl border border-b-black/40 h-12 [&_li]:cursor-pointer before:[&_li]:absolute relative before:[&_li]:h-[2px] before:[&_li]:w-0 before:[&_li]:bg-blue-800 before:[&_li]:bottom-2 hover:before:[&_li]:w-12 hover:before:[&_li]:duration-500 hover:before:[&_li]:ease-in  hover:before:[&_li]:opacity-75 [&_li]:active:text-orange-500">
        <li className="text-orange-500">Job preview</li>
        <li>Applications</li>
        <li>Match</li>
        <li>Messages</li>
      </ul>
    </main>
  );
};

export default JobPreview;
