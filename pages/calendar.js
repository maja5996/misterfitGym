import { motion } from "framer-motion";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { SocialIcon } from "react-social-icons";

const Calendar = () => {
  return (
    <>
      <Head>
        <title>Find us</title>
      </Head>

      <motion.div className={styles.info}>
        <motion.h4
          className={styles.h4Info}
          initial={{ y: -350 }}
          animate={{ y: -55 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20 }}
        >
          Pronađite nas: <br />
        </motion.h4>

        <motion.ul>
          <motion.li
            className={styles.ifnoli}
            initial={{ y: -350 }}
            animate={{ y: -5 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 20 }}
          >
            Na adresi: Gundulićeva 1a, Novi Sad
          </motion.li>

          <motion.li
            className={styles.ifnoli}
            initial={{ y: -350 }}
            animate={{ y: -0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 20 }}
          >
            Na instagramu:
          </motion.li>
        </motion.ul>

        <motion.div
          initial={{ y: -350 }}
          animate={{ y: 20, x: -300 }}
          transition={{ delay: 0.18, type: "spring", stiffness: 25 }}
        >
          <SocialIcon
            url="https://instagram.com/misterfitns"
            bgColor="black"
            className={styles.iconInfo}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Calendar;
