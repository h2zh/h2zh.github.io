import React from "react";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/project_preview";
import AreaPreview, {
  AreaOfInterestInterface,
} from "../components/area_preview";
import Link from "next/link";

const Preview = () => {
  // areas
  const areaMetadataArray = [];
  areaMetadataArray.push({
    name: "Backend Dev",
    url: "./projects#Backend",
    projects: [],
    gradient: "from-[#9bafd9] via-[#c6f8ff] to-[#103783]",
    category: "backend",
  });
  areaMetadataArray.push({
    name: "Fullstack Dev",
    url: "./projects#Fullstack",
    projects: [],
    gradient: "from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]",
    category: "fullstack",
  });
  areaMetadataArray.push({
    name: "Open-source Projects",
    url: "./projects",
    projects: [],
    gradient: "from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]",
    category: "opensource",
  });

  const areaPreviewElements = [];
  for (let i = 0; i < areaMetadataArray.length; i++) {
    const metadata = areaMetadataArray[i];
    const element = <AreaPreview {...metadata} key={i} />;
    areaPreviewElements.push(element);
  }

  return (
    <div id="projects">
      <h3 className="font-bold text-2xl md:text-2xl tracking-tight mt-8 text-black">
        Areas{/* Featured Projects */}
      </h3>
      <div className="mt-4 flex flex-row gap-4 items-stretch md:max-w-md">
        {areaPreviewElements}
      </div>
      {/* <div className="mt-3">
        Visit my{" "}
        <Link href="https://dev.to/h2zh">
          <a className="text-blue-700">Blockchain</a>
        </Link>{" "}
        blog
      </div> */}
    </div>
  );
};

export default Preview;
