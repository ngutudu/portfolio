import { Container } from "@mui/material";
import styles from "./index.module.scss";
import { Particals } from "./particals";
import { Content } from "./content";
import { Hero } from "./hero";

export const Home = () => {
  return (
    <section className={styles.home} id="home">
      <Particals />
      <Container className={styles.container}>
        <Content />
        <Hero />
      </Container>
    </section>
  );
};
