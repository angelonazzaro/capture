import styled from "styled-components";
import { Link } from 'react-router-dom';

import { motion } from "framer-motion";
import { fadeAnimation, photoAnimation, lineAnimation } from "../animation";

function Movie({title, cover, url}) {
    return (
        <StyledMovie>
            <motion.h2 variants={fadeAnimation}>{title}</motion.h2>
            <motion.div variants={lineAnimation} className="line"></motion.div>
            <Link to={url}>
                <div style={{overflow: "hidden"}}>
                    <motion.img variants={photoAnimation} src={cover} alt={title} />
                </div>
            </Link>
        </StyledMovie>
    ); 
}

const StyledMovie = styled.div`
    padding-bottom: 10rem;

    h2 {
        padding: 1rem 0;
    }

    .line {
        height: 0.5rem;
        background: #23dd97;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default Movie;