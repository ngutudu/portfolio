"use client";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.scss";
import { useEffect, useRef, MouseEvent } from "react";

export const Header = () => {
  const prevMousePosition = useRef(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      prevMousePosition.current = window.scrollY;
    }
    const handleScroll = () => {
      const header = window.document.getElementById("header");
      if (header) {
        if (window.scrollY > prevMousePosition.current) {
          header.style.transform = "translateY(-200px)";
        } else {
          header.style.transform = "translateY(0)";
        }
      }
      prevMousePosition.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const element = window.document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  };

  return (
    <AppBar position="fixed" id="header" style={{ transition: "transform 0.3s ease-in-out" }}>
      <Container>
        <Toolbar>
          <a href="/" className={styles.logo}>
            <FontAwesomeIcon icon={faNodeJs} size="xl" className={styles.icon} />
            <span className={styles.name}>ngutudu</span>
          </a>
          <Box className={styles.navbar}>
            <a href="#home" onClick={handleClick("home")}>
              Home
            </a>
            <a href="#about" onClick={handleClick("about")}>
              About
            </a>
            <a href="#skills" onClick={handleClick("skills")}>
              Skill
            </a>
            <a href="#education" onClick={handleClick("education")}>
              Education
            </a>
            <a href="#experience" onClick={handleClick("experience")}>
              Experience
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
