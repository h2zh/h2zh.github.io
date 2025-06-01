import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import cn from "classnames";
import { HiMenuAlt4, HiMinus } from "react-icons/hi";

function NavItem({ href, text }: any) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <>
      <div
        className={cn(
          isActive
            ? "font-semibold text-gray-800"
            : "font-normal text-gray-600",
          "inline-block sm:px-3 p-2 rounded-lg hover:bg-gray-200 transition-all"
        )}
      >
        <Link href={href}>{text}</Link>
      </div>
    </>
  );
}

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const handleNav = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  return (
    <div className="justify-between">
      {/* right control button */}
      <div>
        <nav
          className={cn(
            isNavbarVisible ? "hidden" : "visible",
            "text-2xl sm:hidden absolute right-8"
          )}
        >
          <HiMenuAlt4 onClick={handleNav} />
        </nav>
        <nav
          className={cn(
            isNavbarVisible ? "visible" : "hidden",
            "text-2xl sm:hidden absolute right-8"
          )}
        >
          <HiMinus onClick={handleNav} />
        </nav>
      </div>
      {/* left Navbar */}
      <div className="flex flex-row ">
        <nav
          className={cn(
            isNavbarVisible ? "visible" : "hidden",
            "sm:flex flex-row justify-start relative max-w-xl pb-2 text-gray-900"
            // sm:flex aims to display whole navbar when screen size grow
          )}
        >
          <div className="ml-[-0.60rem]">
            <NavItem href="/" text="Home" />
            <NavItem href="/aboutme" text="About Me" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
