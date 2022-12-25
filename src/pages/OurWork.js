import styled from 'styled-components';
import Movie from '../components/Movie';

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function OurWork({movies}) { 
    return (
        <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{backgroundColor: "white"}}>
            {movies.map((movie) => <Movie key={movie.url} title={movie.title} cover={movie.mainImg} url={movie.url} />)}
        </Work>
    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;

    padding: 5rem 10rem; 
`;

export default OurWork;