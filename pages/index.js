import { motion } from 'framer-motion'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home = () => {
  return (
    <motion.div className={styles.homeContainer}
    initial={{opacity: 0}}
    animate={{opacity:1, fontSize:"11em"}}
    transition={{delay: 0.2, duration:2}}
    >

<span className={styles.fit}>M</span>i<span className={styles.fit}>S</span>TER
  
  <motion.span animate={{y:100}}>fit</motion.span>

    </motion.div>
  )

}

export default Home;

    