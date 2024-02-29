import Link from "next/link";
import About from "./components/About";
import Article from "./components/Article";
import Experience from "./components/Experience";
import Profile from "./components/Profile";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-20 relative md:px-4">
      <section className="flex-1 md:sticky md:top-0 md:left-0 h-dvh">
        <Profile />
      </section>
      <section className="flex-1 mb-10 md:my-24 space-y-16 md:space-y-24">
        <About />
        <Experience />
        <Project />
        <Article />
        <small className="flex justify-center md:justify-end">
          Inspired by:{" "}
          <Link href="https://brittanychiang.com/" target="_blank" className="underline underline-offset-2 ml-1">
            Brittany Chiang
          </Link>
        </small>
      </section>
    </main>
  );
}
