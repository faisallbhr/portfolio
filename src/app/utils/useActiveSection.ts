import { useState, useEffect } from "react";
import { StickyState } from "./interface";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("about");

  const [isSticky, setIsSticky] = useState<StickyState>({
    about: false,
    experience: false,
    projects: false,
    articles: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const experienceSection = document.getElementById("experience");
      const projectsSection = document.getElementById("projects");
      const articlesSection = document.getElementById("articles");

      const sections = [
        { id: "about", section: aboutSection },
        { id: "experience", section: experienceSection },
        { id: "projects", section: projectsSection },
        { id: "articles", section: articlesSection }
      ];

      for (const { id, section } of sections) {
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          let condition;
          if (window.innerWidth <= 768) {
            condition = top < 0 && bottom > 0 && bottom <= window.innerHeight;
          } else {
            condition = top < 300 && bottom > 300 && bottom <= window.innerHeight;
          }

          if (condition) {
            setActiveSection(id);
            if (window.innerWidth <= 768) {
              setIsSticky({
                ...isSticky,
                [id]: true
              });
            }
            break;
          } else {
            setIsSticky({
              ...isSticky,
              [id]: false
            });
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    activeSection: activeSection,
    isSticky: isSticky
  };
};
