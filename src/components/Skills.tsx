import React from "react";

type Props = {};

const Skills = (props: Props) => {
  return (
    <main className="flex gap-3 items-start justify-between flex-col md:flex-row lg:px-10 py-8">
      {/* skills  */}
      <div className="[&_ul>li]:py-2 ">
        <ul>
          <h1 className="font-semibold">Skill Required</h1>
          <li>Figma</li>
          <li>Adobe Illustrator</li>
          <li>Adobe XD</li>
        </ul>
      </div>
      {/* preferred language  */}
      <div className="[&_>h2]:py-2">
        <h1 className="font-semibold">Language</h1>
        <h2>English</h2>
      </div>
      {/* type  */}
      <div className="[&_>h2]:py-2">
        <h1 className="font-semibold">Type</h1>
        <h2>Full Time</h2>
      </div>
      {/* experience  */}
      <div className="[&_>h2]:py-2">
        <h1 className="font-semibold">Experince</h1>
        <h2>3+ Years of Experience</h2>
      </div>
    </main>
  );
};

export default Skills;
