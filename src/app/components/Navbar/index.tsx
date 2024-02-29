"use client";

import { scrollToSection } from "@/app/utils/scrollToSection";
import { NAV_ITEMS } from "@/app/utils/constant";
import { useActiveSection } from "@/app/utils/useActiveSection";

export default function Navbar() {
  const { activeSection } = useActiveSection();

  return (
    <ul className="hidden md:block space-y-2 -mt-40">
      {NAV_ITEMS.map((item, index) => (
        <li key={index}>
          <button onClick={() => scrollToSection(item.section)} className="flex gap-2 items-center group w-fit">
            <span
              className={`block h-px ${activeSection === item.section ? "bg-white w-20" : "bg-gray-400 w-12"} group-hover:bg-white group-hover:w-20 duration-300`}
            ></span>
            <small
              className={`${activeSection === item.section ? "font-semibold" : "font-normal text-gray-400"} group-hover:font-semibold group-hover:text-white duration-300`}
            >
              {item.name}
            </small>
          </button>
        </li>
      ))}
    </ul>
  );
}
