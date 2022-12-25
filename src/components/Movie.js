import styled from "styled-components";
import { Link } from 'react-router-dom';

function Movie({title, cover, url}) {
    return (
        <StyledMovie>
            <h2>{title}</h2>
            <div className="line"></div>
            <Link to={url}>
                <img src={cover} alt={title} />
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
        background: #cccccc;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default Movie;