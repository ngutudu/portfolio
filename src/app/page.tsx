import { Box } from "@mui/material";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { AboutMe } from "./components/aboutMe";

export default function Page() {
  return (
    <Box>
      <Header />
      <Home />
      <AboutMe />
    </Box>
  );
}
