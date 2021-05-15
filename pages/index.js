import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <motion.div
        className={styles.homeContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, fontSize: "11em" }}
        transition={{ delay: 0.1, duration: 1.1 }}
      >
        <span className={styles.fit}>M</span>i
        <span className={styles.fit}>S</span>TER
        <motion.span animate={{ y: 100 }}>fit</motion.span>
      </motion.div>
    </>
  );
};

export default Home;
