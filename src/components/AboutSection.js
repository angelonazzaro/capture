import home1 from '../img/home1.png';
// Import Styled
import { Layout, Description, Hide, Image } from '../styles';
// Import Framer Motion
import { motion } from 'framer-motion'; 

function AboutSection() {

    // framer motion variance
    const titleAnimation = {
        hidden: {opacity: 0},
        show: {opacity: 1, transition: {duration: 2}}
    }

    const container = {
        hidden: {x: 100},
        show: {x: 0, transition: {ease: "easeOut", staggerChildren: 0.35}}
    }

    return (
        <Layout>
            <Description>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    {/* Separating the text in different chunks that will be
                        animated independently */}
                    <Hide>
                        {/* Lets us animate the h2 */}
                        <motion.h2 variants={titleAnimation} >
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come </motion.h2>
                    </Hide>
                     <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography or video ideas that you have.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </Layout>
    );
}

export default AboutSection;