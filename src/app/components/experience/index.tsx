"use client";
import { Container } from "@mui/material";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section className={styles.experience} id="experience">
      <Container>
        <h1>
          <FontAwesomeIcon icon={faBriefcase} /> Experience
        </h1>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TimelineDot color="warning">
                  <FontAwesomeIcon icon={faBriefcase} />
                </TimelineDot>
              </motion.div>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className={styles.content}>
                  <h2>Self Employed</h2>
                  <h3>Full Stack Developer</h3>
                  <p>July 2023 - present</p>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TimelineDot color="warning">
                  <FontAwesomeIcon icon={faBriefcase} />
                </TimelineDot>
              </motion.div>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className={styles.content}>
                  <h2>Oraichain Labs | Kawaiiverse Team</h2>
                  <h3>Tech Lead</h3>
                  <p>March 2023 - June 2023</p>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TimelineDot color="warning">
                  <FontAwesomeIcon icon={faBriefcase} />
                </TimelineDot>
              </motion.div>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className={styles.content}>
                  <h2>Oraichain Labs</h2>
                  <h3>Blockchain Developer</h3>
                  <p>Sep 2020 - March 2023</p>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TimelineDot color="warning">
                  <FontAwesomeIcon icon={faBriefcase} />
                </TimelineDot>
              </motion.div>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className={styles.content}>
                  <h2>BKC Labs | HUST</h2>
                  <h3>Mobile Application Developer | Partime</h3>
                  <p>Jan 2020 - Sep 2020</p>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TimelineDot color="warning">
                  <FontAwesomeIcon icon={faBriefcase} />
                </TimelineDot>
              </motion.div>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className={styles.content}>
                  <h2>BKC Labs | HUST</h2>
                  <h3>Website Developer | Partime</h3>
                  <p>Sep 2019 - Jan 2020</p>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <TimelineDot color="warning">
                  <FontAwesomeIcon icon={faBriefcase} />
                </TimelineDot>
              </motion.div>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0.5, translateY: -100 }}
                whileInView={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className={styles.content}>
                  <h2>Rabiloo</h2>
                  <h3>PHP Developer | Internship</h3>
                  <p>March 2019 - June 2019</p>
                </div>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </section>
  );
};
