import Header from './Header'
import Styles from '../styles/Home.module.css'

import { motion } from "framer-motion"


 
    export const Motion = () => (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      )

export default Motion;