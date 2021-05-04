import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {motion} from "framer-motion";
import Image from 'next/image'

const Services =()=> {


  return (
    
      <>
          <motion.div
              style={{
                  
                  fontSize: '3em',
                  fontFamily: "Poppins, sans-serif",
                  cursor: "grab",
                  textAlign:'center'
              }}
              drag
              dragConstraints={{ top: 100, right: 100, bottom: 20, left: 20 }}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
              dragElastic={0.5}
              whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)"}}
              whileTap={{ cursor: "grabbing" }}
          >
          <h4>Individualni Trening</h4>
          </motion.div>

          <motion.div
              style={{
                  
                  fontSize: '3em',
                  fontFamily: "Poppins, sans-serif",
                  cursor: "grab",
                  textAlign:'center'
              }}
              drag
              dragConstraints={{ top: 100, right: 100, bottom: 20, left: 20 }}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
              dragElastic={0.5}
              whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)"}}
              whileTap={{ cursor: "grabbing" }}
          >
          <h4>Poluindividualni Trening</h4>
          </motion.div>

          <motion.div
              style={{
                  
                  fontSize: '3em',
                  fontFamily: "Poppins, sans-serif",
                  cursor: "grab",
                  textAlign:'center'
              }}
              drag
              dragConstraints={{ top: 100, right: 100, bottom: 20, left: 20 }}
              dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
              dragElastic={0.5}
              whileHover={{scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)"}}
              whileTap={{ cursor: "grabbing" }} 
          >
          <h4>Mini Grupe
          </h4>
          </motion.div>

      </>
  )
}
export default Services;

// const Services = () => {
//     return (
//      <>
//      <Head>Services</Head>
      
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ rotate: 180, scale: 1 }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//         damping: 20
//       }}
//     >
//         <h4>Individualni Trening</h4>
//     </motion.div>

//       </>
//       );
// }
 
// export default Services;


    //   <div className={styles.services}>
    //       <motion.div 
    //        whileHover={{scale: 1.1,
    //        textShadow: "0px 0px 8px rgb(255,255,255)", 
           

    //     }}
    //         className={styles.service}
    //         className={styles.individualni}
    //         >
            
    //           <h4 className={styles.hService}>Individualni treninzi</h4>
    //           {/* <p className={styles.pService}>Individulani treninzi su najkvalitetniji oblik fizičke aktivnosti u odnosu na klasično vežbanje u teretani. Rad sa ličnim trenerom karakteriše najveći mogući stepen iskorišćenosti treninga i  posvećenosti vežbaču za razliku od teretane gde ste uglavnom prepušteni slobodnoj proceni koje grupe mišića treba vežbati</p> */}
    //       </motion.div>

        

    //       <motion.div
    //        whileHover={{scale: 1.1,
    //         textShadow: "0px 0px 8px rgb(255,255,255)", 
 
    //      }}
    //       className={styles.service}
    //       className={styles.grupni}>
              
    //           <h4 className={styles.hService}>Grupni treninzi</h4>
    //          {/* <p className={styles.pService}>Grupni treninzi – postoje razni programi, koreografije i kombinacije, ali svima je zajedničko da je to unapred osmišljen set vežbi koju trener demonstrira i izvodi zajedno sa grupom vežbača. Kombinacija vežbi je tematski osmišljena da aktivira sve važne mišiće u telu kako bi se treningom ravnomerno aktiviralo celo telo, ili bar određene grupe mišića kao tematske celine.</p> */}
    //       </motion.div>
        
    //       <motion.div
    //        whileHover={{scale: 1.1,
    //         textShadow: "0px 0px 8px rgb(255,255,255)", 
 
    //      }}
    //       className={styles.service}
    //       className={styles.miniGrupe}>
    //           <h4 className={styles.hService}>Mini grupe</h4>
    //           {/* <p className={styles.pService}>MINI GRUPA podrazumeva trening za minimum 2, a maximum 5 osoba. Osmišljeno je kao polu-individualni trening. Dovoljno mala grupa daje nam mogućnost da svakom vežbaču pristupimo dovoljno individualno i približimo ga željenom cilju.</p> */}
    //       </motion.div>
    //   </div>