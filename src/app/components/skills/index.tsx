"use client";

import { motion } from "framer-motion";
import { Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const skills = [
  {
    icon: "reactjs",
    name: "ReactJS",
  },
  {
    icon: "expressjs",
    name: "ExpressJS",
  },
  {
    icon: "nodejs",
    name: "NodeJS",
  },
  {
    icon: "redux",
    name: "Redux",
  },
  {
    icon: "firebase",
    name: "Firebase",
  },
  {
    icon: "material-ui",
    name: "MUI",
  },
  {
    icon: "chakra-ui",
    name: "ChakraUI",
  },
  {
    icon: "tailwind",
    name: "TailwindCSS",
  },
  {
    icon: "bootstrap",
    name: "Bootstrap",
  },
  {
    icon: "sass",
    name: "Sass",
  },
  {
    icon: "html",
    name: "HTML5",
  },
  {
    icon: "css",
    name: "CSS3",
  },
  {
    icon: "javascript",
    name: "JavaScript",
  },
  {
    icon: "mongodb",
    name: "MongoDB",
  },
  {
    icon: "mysql",
    name: "MySQL",
  },
  {
    icon: "postgre",
    name: "PostgreSQL",
  },
  {
    icon: "git",
    name: "Git",
  },
  {
    icon: "github",
    name: "GitHub",
  },
  {
    icon: "reactjs",
    name: "React Native",
  },
  {
    icon: "nextjs",
    name: "NextJS",
  },
  {
    icon: "nestjs",
    name: "NestJS",
  },
  {
    icon: "docker",
    name: "Docker",
  },
  {
    icon: "typescript",
    name: "Typescript",
  },
  {
    icon: "solidity",
    name: "Solidity",
  },
];

export const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <Container>
        <h1>
          <FontAwesomeIcon icon={faLaptopCode} /> Skills & <span style={{ color: "rgb(255, 230, 0)" }}>Abilities</span>
        </h1>
        <motion.div
          initial={{ opacity: 0.5, translateY: -100 }}
          whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className={styles.grid}>
            {skills.map((skill) => (
              <div className={styles.item} key={skill.name}>
                <div className={styles.images}>
                  <img src={`/icons/${skill.icon}.png`} />
                </div>
                <div>{skill.name}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
