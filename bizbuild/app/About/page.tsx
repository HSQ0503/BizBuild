import React from "react";
import MissionPage from "./_components/MissionPage";
import PencilPage from "./_components/PencilPage";
import OurStory from "./_components/OurStory";

const Page = () => {
  return (
    <div className="w-full h-full">
      <div>
        <MissionPage />
      </div>
      <div>
        <OurStory />
      </div>
      <div>
        <PencilPage />
      </div>
    </div>
  );
};

export default Page;