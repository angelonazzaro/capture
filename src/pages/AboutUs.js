import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FAQSection from "../components/FAQSection";

// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import { ScrollTop } from "../components/Scroll";

function AboutUs() {
    return (
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FAQSection />
            <ScrollTop />
        </motion.div>
    );
}

export default AboutUs;