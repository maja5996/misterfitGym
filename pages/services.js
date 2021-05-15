import { motion } from "framer-motion";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <motion.div
        className={styles.service}
        drag
        dragConstraints={{ top: 100, right: 100, bottom: 20, left: 20 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        dragElastic={0.5}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <h4 className={styles.serviceNaslov}>Individualni Trening</h4>
      </motion.div>

      <motion.div
        className={styles.service}
        drag
        dragConstraints={{ top: 100, right: 100, bottom: 20, left: 20 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        dragElastic={0.5}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <h4 className={styles.serviceNaslov}>Poluindividualni Trening</h4>
      </motion.div>

      <motion.div
        className={styles.service}
        drag
        dragConstraints={{ top: 100, right: 100, bottom: 20, left: 20 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        dragElastic={0.5}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <h4 className={styles.serviceNaslov}>Mini Grupe</h4>
      </motion.div>
    </>
  );
};
export default Services;
