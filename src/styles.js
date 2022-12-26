import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled Components -> styled.DOMElement you want to style`{style}`
// To use this, you just substitute the DOM element you want to style with the Styled Components
export const Layout = styled(motion.div)`
    min-height: 90vh;

    display: flex; 
    align-items: center;
    justify-content: space-between;

    padding: 5rem 10rem;
    color: white;

    @media (max-width: 1300px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`; 

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }

    @media (max-width: 1300px) {
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
        }
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;