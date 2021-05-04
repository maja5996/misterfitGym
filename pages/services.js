import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const Services = () => {
  return (
    <>
      <motion.div
        className={styles.service}
        drag
        dragConstraints={{ top: 100, right: 100, bottom: 20, left: 20 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        dragElastic={0.5}
        whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)" }}
        whileTap={{ cursor: "grabbing" }}
      >
        <h4>Individualni Trening</h4>
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
        <h4>Poluindividualni Trening</h4>
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
        <h4>Mini Grupe</h4>
      </motion.div>
    </>
  );
};
export default Services;
