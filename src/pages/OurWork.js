import styled from 'styled-components';
import Movie from '../components/Movie';

import { motion } from "framer-motion";
import { pageAnimation, sliderContainer, sliderAnimation } from "../animation";

function OurWork({movies}) { 
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{backgroundColor: "white"}}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={sliderAnimation} />
                <Frame2 variants={sliderAnimation} />
                <Frame3 variants={sliderAnimation} />
                <Frame4 variants={sliderAnimation} />
            </motion.div>
            {movies.map((movie) => <Movie key={movie.url} title={movie.title} cover={movie.mainImg} url={movie.url} />)}
        </Work>
    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;

    padding: 5rem 10rem; 

    @media (max-width: 1300px) {
        padding: 2rem 2rem;
    }
`;

// Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background-color: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(motion.div)`
    background-color: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background-color: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background-color: #8effa0;
`;

export default OurWork;