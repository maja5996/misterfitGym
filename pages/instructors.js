
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

const Instructors = () => {
    return (
     <>
      <Head>
        <title>Instructors</title>
      </Head> 
  <div className={styles.centerFlipCard }> 
	<div className={styles.flipcard }>
  <div className={styles.flipcardinner}>
    <div className={styles.flipcardfrontStefan}>

    </div>
    <div className={styles.flipcardback}  >
      <h1>Stefan</h1> 
      <p className={styles.info }>Personal Trainer</p> 
      <p className={styles.info }>Contact: 061123123</p>
    </div>
  </div>
</div>
<div className={styles.flipcard }>
  <div className={styles.flipcardinner}>
    <div className={styles.flipcardfrontMarko}>
      
    </div>
    <div className={styles.flipcardback}>
      <h1>Marko</h1> 
      <p className={styles.info }>Personal Trainer</p> 
      <p className={styles.info }>Contact: 060123123</p>
    </div>
  </div>
</div>
</div>   
</>
    
    );
};

export default Instructors;
{/* <div className={styles.instructors}>
	<div className={styles.instrContainers}>
		<h4>Stefan</h4>
	</div>

	<div className={styles.instrContainers}>
		<h4>Marko</h4>
	</div>
</div> */}