import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.scss";

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <a href="/" className={styles.logo}>
            <FontAwesomeIcon icon={faNodeJs} color="black" size="xl" />
            <span className={styles.name}>ngutudu</span>
          </a>
          <Box className={styles.navbar}>
            <a className={styles.active} href="#">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#skill">Skill</a>
            <a href="#education">Education</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
