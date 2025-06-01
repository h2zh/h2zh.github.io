import Image from "next/image";
import Link from "next/link";
import cn from "classnames";
import React, { useRef } from "react";

import { FaLink } from "react-icons/fa";

// An interface/class for props
export interface ProjectPreviewInterface {
  title: string;
  description: string[];
  linkUrl: string;
  image: string;
  category: string;
}

const ProjectPreview = (props: ProjectPreviewInterface) => {
  const ref = useRef(); // to contain logo and text in a Link component
  const buttonRef = ref.current && <FaLink />;
  return (
    <div className="flex flex-col justify-between h-full w-full bg-white rounded-lg py-3">
      <div className="flex flex-col md:flex-row justify-between">
        <h4 className="text-lg md:text-lg font-medium mb-3 sm:mb-4 w-full text-gray-900 ">
          {props.linkUrl ? (
            <Link
              href={props.linkUrl}
              className="flex flex-row items-center space-x-1"
            >
              <FaLink size={"15px"} />
              <span>&nbsp; {props.title}</span>
              {/* add space between icon and text */}
            </Link>
          ) : (
            props.title
          )}
        </h4>
      </div>
      <ul className="list-disc pl-4">
        {props.description.map((des, idx) => {
          return <li key={idx}> {des}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectPreview;
