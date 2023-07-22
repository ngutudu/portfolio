"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@mui/material";
import styles from "./index.module.scss";

export const Education = () => {
  return (
    <section className={styles.education} id="education">
      <Container>
        <h1>
          <FontAwesomeIcon icon={faGraduationCap} /> My <span style={{ color: "rgb(115, 3, 167)" }}>Education</span>
        </h1>
        <h4>Education is not the learning of facts, but the training of the mind to think.</h4>
        <motion.div
          initial={{ opacity: 0.5, translateY: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src="/images/hust.png" />
          <h2 style={{ color: "#012970" }}>Bachelor Of Engineering In Information Systems</h2>
          <h4>Hanoi University of Science and Technology | HUST</h4>
          <h4 style={{ color: "rgb(34, 109, 0)" }}>2016-2021 | Completed</h4>
          <h5>Grade: Very Good</h5>
        </motion.div>
      </Container>
    </section>
  );
};
