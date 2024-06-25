import React from "react";

type Props = {};

const AboutJob = (props: Props) => {
  return (
    <div className="">
      <h1 className="font-semibold">About the job</h1>
      <ul className="list-decimal py-2 ps-4 flex flex-col gap-3">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching on latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>
          Work on creating graphics content and other graphic related works
        </li>
      </ul>
      <ul className="list-disc py-2 [&_li]:mx-6 flex flex-col gap-3">
        <h1 className="font-semibold">Benefits:</h1>
        <li>Health insurance</li>
        <li>Provident Fund</li>
      </ul>
      <ul className="list-disc py-2 [&_li]:mx-6 flex flex-col gap-3">
      <h1 className="font-semibold">Schedule:</h1>
        <li>Day shift</li>
      </ul>
      <ul className="list-disc py-2 [&_li]:mx-6 flex flex-col gap-3">
        <h1 className="font-semibold">Supplemental pay types:</h1>{" "}
        <li>Performance bonus Yearly bonus Work</li>
      </ul>
      <h2> Location: In person</h2>
    </div>
  );
};

export default AboutJob;
