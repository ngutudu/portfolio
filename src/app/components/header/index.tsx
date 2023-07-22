"use client";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.scss";
import { useEffect, useRef, MouseEvent, useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const prevMousePosition = useRef(0);
  const [deviceWidth, setDeviceWidth] = useState<number>();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    const menu = window.document.getElementById("menu");
    if (!menu) return;
    if (open) {
      menu.className = styles.menu1;
    } else {
      menu.className = styles.menu2;
    }
    setOpen((open) => !open);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      prevMousePosition.current = window.scrollY;
      setDeviceWidth(window.innerWidth);
    }

    const handleScroll = () => {
      const header = window.document.getElementById("header");
      if (header && window.innerWidth > 600) {
        if (window.scrollY > prevMousePosition.current) {
          header.style.transform = "translateY(-200px)";
        } else {
          header.style.transform = "translateY(0)";
        }
      }
      prevMousePosition.current = window.scrollY;
    };

    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (id: string) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const element = window.document.getElementById(id);
    if (element) {
      setTimeout(() => {
        setOpen(false);
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }, 500);
    }
  };

  if (!deviceWidth) return <></>;

  if (deviceWidth <= 600)
    return (
      <>
        <AppBar position="fixed" id="header" style={{ transition: "transform 0.3s ease-in-out" }}>
          <Container>
            <Toolbar>
              <a href="/" className={styles.logo}>
                <FontAwesomeIcon icon={faNodeJs} size="xl" className={styles.icon} />
                <span className={styles.name}>ngutudu</span>
              </a>
              <div id="menu">
                <FontAwesomeIcon icon={open ? faTimes : faBars} size="2xl" onClick={toggle} />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        <div className={`${styles["navbar-mobile"]} ${open ? styles.open : ""}`}>
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
        </div>
      </>
    );

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
