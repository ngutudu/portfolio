"use client";
import { Container } from "@mui/material";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from "@mui/lab";

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
              <TimelineDot color="warning">
                <FontAwesomeIcon icon={faBriefcase} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.content}>
                <h2>Self Employed</h2>
                <h3>Full Stack Developer</h3>
                <p>July 2023 - present</p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning">
                <FontAwesomeIcon icon={faBriefcase} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.content}>
                <h2>Oraichain Labs | Kawaiiverse Team</h2>
                <h3>Tech Lead</h3>
                <p>March 2023 - June 2023</p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning">
                <FontAwesomeIcon icon={faBriefcase} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.content}>
                <h2>Oraichain Labs</h2>
                <h3>Blockchain Developer</h3>
                <p>Sep 2020 - March 2023</p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning">
                <FontAwesomeIcon icon={faBriefcase} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.content}>
                <h2>BKC Labs | HUST</h2>
                <h3>Mobile Application Developer | Partime</h3>
                <p>Jan 2020 - Sep 2020</p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning">
                <FontAwesomeIcon icon={faBriefcase} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.content}>
                <h2>BKC Labs | HUST</h2>
                <h3>Website Developer | Partime</h3>
                <p>Sep 2019 - Jan 2020</p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="warning">
                <FontAwesomeIcon icon={faBriefcase} />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className={styles.content}>
                <h2>Rabiloo</h2>
                <h3>PHP Developer | Internship</h3>
                <p>March 2019 - June 2019</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>
    </section>
  );
};
