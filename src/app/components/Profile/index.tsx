import { SOCIAL_MEDIA } from "@/app/utils/constant";
import Link from "next/link";
import Navbar from "../Navbar";

export default function Profile() {
  return (
    <section className="h-full flex flex-col md:justify-between py-14 md:py-24 px-4">
      <div>
        <h1 className="font-bold text-4xl md:text-5xl">Faisal Bahari</h1>
        <h2 className="font-medium text-xl md:text-2xl mt-1 text-cyan-400">Frontend Web Developer</h2>
        <p className="text-gray-400 mt-2 mb-4">
          Crafting responsive and engaging user interfaces, emphasizing clean and maintainable code.
        </p>
      </div>
      <Navbar />
      <div className="flex gap-x-4">
        {SOCIAL_MEDIA.map((item, index) => (
          <Link href={item.link} target="_blank" key={index}>
            <item.image
              size={32}
              title={item.title}
              className="hover:text-cyan-400 border hover:border-cyan-400 p-1.5 rounded bg-black duration-300"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
