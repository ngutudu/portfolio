import { Button, Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faDev, faFacebookSquare, faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.scss";
import { TextTyping } from "./text-typing";
import { Particals } from "./particals";
import { Hero } from "./hero";

export const Home = () => {
  return (
    <section className={styles.home} id="home">
      <Particals />
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2>
            Hi There, <br />
            I'm ngutudu
          </h2>
          <h4>
            I am into <TextTyping />
          </h4>
          <Button className={styles.button} variant="contained">
            About me <FontAwesomeIcon icon={faArrowCircleDown} />
          </Button>
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
        </div>
        <Hero />
      </Container>
    </section>
  );
};
