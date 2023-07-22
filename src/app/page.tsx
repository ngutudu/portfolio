import { Header } from "./components/header";
import { Home } from "./components/home";
import { AboutMe } from "./components/aboutMe";
import { Skills } from "./components/skills";
import { Education } from "./components/education";
import { Experience } from "./components/experience";

export default function Page() {
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Skills />
      <Education />
      <Experience />
    </>
  );
}
