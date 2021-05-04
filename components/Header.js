import Link from 'next/link'
import headerStyles from '../styles/Header.module.css'
import { CgGym } from "react-icons/cg";
import {  HiUsers} from "react-icons/hi";
import { HiCalendar  } from "react-icons/hi";
import { FaHome  } from "react-icons/fa";
import { motion } from 'framer-motion'

const iconsVariants = {
    hidder: {rotate: -180},
    visible: {
        rotate: 0,
        transition: {duration : 1}
    }
}

const Header = () => {
    return (
     
        <div  className={headerStyles.header} >
    
        <ul>
     <Link href="/"><motion.a whileHover={{scale: 0.8, rotate:360}} whileTap={{scale:0.5, rotate:360}} className={headerStyles.ul}><FaHome className={headerStyles.icon}/></motion.a></Link>
       
             
                <Link href="/services"><motion.a whileHover={{scale: 0.8, rotate:360}} whileTap={{scale:0.5, rotate:360}} className={headerStyles.ul}><CgGym className={headerStyles.icon}/></motion.a></Link>
        
                <Link href="/instructors"><motion.a whileHover={{scale: 0.8, rotate:360}} whileTap={{scale:0.5, rotate:360}} className={headerStyles.ul}><HiUsers className={headerStyles.icon}/></motion.a></Link>
        
                <Link href="/calendar"><motion.a  whileHover={{scale: 0.8, rotate:360}} whileTap={{scale:0.5, rotate:360}} className={headerStyles.ul}><HiCalendar className={headerStyles.icon}/></motion.a></Link>
            </ul>
    

         </div>
        
        );
    };
    
    export default Header;