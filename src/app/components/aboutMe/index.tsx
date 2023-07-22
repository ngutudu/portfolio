"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Tilt } from "react-tilt";
import styles from "./index.module.scss";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 10, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export const AboutMe = () => {
  return (
    <Container className={styles.aboutme} component={"section"} id="about">
      <h1>
        <FontAwesomeIcon icon={faUser} /> About <span style={{ color: "rgb(115, 3, 167)" }}>Me</span>
      </h1>
      <div className={styles.content}>
        <div className={styles.images}>
          <Tilt options={defaultOptions}>
            <img src="/images/ngutudu.jpg" />
          </Tilt>
        </div>
        <div className={styles.info}>
          <motion.div
            initial={{ opacity: 0.5, translateY: -100 }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2>I&apos;m ngutudu</h2>
            <h4>Fullstack developer</h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, translateY: -100 }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p>
              I am a Full-Stack developer based in Hanoi, Vietnam. I am an Information Technology graduate from HUST. I
              am very passionate about improving my coding skills & developing decentralized applications & websites. I
              build WebApps and Websites using MERN Stack. Working for myself to improve my skills.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, translateY: -100 }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p>
              Email: <a href="mailto:ngutuduhust@gmail.com">ngutuduhust@gmail.com</a>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, translateY: -100 }}
            whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p>Place : Hanoi, Vietnam</p>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};
