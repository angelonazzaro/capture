import home1 from '../img/home1.png';
// Import Styled
import { Layout, Description, Hide, Image } from '../styles';
// Import Framer Motion
import { motion } from 'framer-motion'; 
import { pageAnimation, titleAnimation, fadeAnimation, photoAnimation } from '../animation';

import Wave from './Wave';

function AboutSection() {

    return (
        <Layout>
            <Description>
                <motion.div variants={pageAnimation} initial="hidden" animate="show" className="title">
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
                <motion.p variants={fadeAnimation}>Contact us for any photography or video ideas that you have.</motion.p>
                <motion.button variants={fadeAnimation}>Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="guy with a camera" />
            </Image>
            <Wave />
        </Layout>
    );
}

export default AboutSection;