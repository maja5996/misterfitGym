import Header from './Header'
import Styles from '../styles/Home.module.css'
import Motion from './Motion'
import { MotionConfig } from 'framer-motion'

const Layout = ({children}) => {
    return (
        <>
        <div  className={Styles.content}>
            
            <Header/>
            <Motion/>
           {children}
      
      
        </div>

        </>
    );
};

export default Layout;