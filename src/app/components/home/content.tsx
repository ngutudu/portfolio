"use client";

import { MouseEvent } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faDev, faFacebookSquare, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./content.module.scss";
import { TextTyping } from "./text-typing";

export const Content = () => {
  const handleClick = (id: string) => (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const element = window.document.getElementById(id);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }, 500);
    }
  };

  return (
    <div className={styles.content}>
      <h2>
        Hi There, <br />
        I&apos;m ngutudu
      </h2>
      <motion.div
        initial={{ opacity: 0.5, translateY: -50 }}
        whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h4>
          I am into <TextTyping />
        </h4>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, translateY: -50 }}
        whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Button className={styles.button} variant="contained" onClick={handleClick("about")}>
          About me <FontAwesomeIcon icon={faArrowCircleDown} />
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5, translateY: -50 }}
        whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className={styles.socials}>
          <a href="https://github.com/ngutudu" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} size="lg" color="#00d9ff" />
          </a>
          <a href="https://www.linkedin.com/in/nguyen-tung-duong/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="#00d9ff" />
          </a>
          <a href="https://facebook.com/ngutudu" target="_blank">
            <FontAwesomeIcon icon={faFacebookSquare} size="lg" color="#00d9ff" />
          </a>
          <a href="https://dev.to/ngutudu" target="_blank">
            <FontAwesomeIcon icon={faDev} size="lg" color="#00d9ff" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
