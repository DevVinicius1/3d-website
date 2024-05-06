import { motion } from "framer-motion"
import { styles } from "../syles"
import { staggerContainer } from "../utils/motion"


const SectionWrapper = (Component,idName) => 

function HOC() {
    
return  (
    <motion.section 
     variants={staggerContainer()}
     initial="hidden"
     whileInView="show"
     viewport={{once:true, amount: 0.25}}
     className={` ${styles.padding} max-w-7xl mx-auto relative z-0`}
    
    >
  
  <span id={idName}>
     
 
  </span>  {/* aqui nesse span esta servindo somente para indicar que o idname da referenciação se encontra nessa section */}

  
    <Component/>

    </motion.section>
   

)





}



export default SectionWrapper