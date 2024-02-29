export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (sectionId == "about") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
