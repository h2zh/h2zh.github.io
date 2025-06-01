import React from "react";
import { ProjectPreviewInterface } from "./project_preview";
import Link from "next/link";
import cn from "classnames";

// An interface/class for props
export interface AreaOfInterestInterface {
  name: string;
  url: string;
  projects: ProjectPreviewInterface[];
  gradient: string;
  category: string;
}

const AreaPreview = (props: AreaOfInterestInterface) => {
  return (
    <Link href={props.url}>
      <div
        className={cn(
          "transform hover:scale-[1.03] transition-all",
          "rounded-xl w-full md:w-full bg-gradient-to-r p-1",
          "flex",
          props.gradient
        )}
      >
        <div className="flex flex-col justify-center h-full w-full bg-white rounded-lg p-4">
          <div className="flex flex-col md:flex-row justify-between ">
            <h4 className="text-sm md:text-xl font-bold  text-center">
              {props.name}
            </h4>
          </div>
          {/* <div className="flex items-center text-gray-800 capsize">More</div> */}
        </div>
      </div>
    </Link>
  );
};

export default AreaPreview;
