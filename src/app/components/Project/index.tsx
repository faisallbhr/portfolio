"use client";

import { PROJECTS } from "@/app/utils/constant";
import { useActiveSection } from "@/app/utils/useActiveSection";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export default function Project() {
  const { isSticky } = useActiveSection();
  return (
    <section id="projects">
      <h2
        className={`w-full px-4 py-2 mb-4 font-semibold duration-300 z-10 ${isSticky.projects ? "sticky top-0 backdrop-blur-md shadow-sm shadow-white" : ""}`}
      >
        PROJECTS
      </h2>
      <div className="px-4">
        <span className="h-px w-full px-4 bg-white md:block hidden relative -top-4 "></span>
      </div>
      <div className="space-y-2">
        {PROJECTS.map((item, index) => (
          <Link key={index} href={item.link} target="_blank" className="block">
            <div className="group hover:md:bg-gray-50 hover:md:bg-opacity-10 p-4 duration-300 rounded cursor-pointer">
              <h3 className=" group-hover:text-cyan-400">
                {item.name} &bull; {item.position}{" "}
                <span className="duration-150 inline-block translate-y-1 group-hover:translate-y-0 group-hover:translate-x-1">
                  <LuArrowUpRight />
                </span>
              </h3>
              <span className="italic text-sm">{item.description}</span>
              <ul className="my-2">
                {item.jobDesc.map((job, jobIndex) => (
                  <li key={jobIndex} className="flex items-start">
                    <span className="h-1.5 max-w-1.5 w-full bg-white rounded-full mr-2 mt-2.5"></span>
                    <p className="text-gray-400">{job}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech, techIndex) => (
                  <small
                    key={techIndex}
                    className="px-3 py-1 rounded-full bg-cyan-200/20 text-cyan-400 font-medium shadow"
                  >
                    {tech}
                  </small>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
