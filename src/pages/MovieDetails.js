import { useState, useEffect } from 'react';
import styled from "styled-components";
import { useLocation } from 'react-router-dom';

function MovieDetails({movies}) {

    const location = useLocation();
    const [movie, setMovie] = useState(null);

    // Runs each time movies or location are changed
    useEffect(() => {
        setMovie(movies.filter((movie) => movie.url === location.pathname)[0]); 
    }, [movies, location]);

    return (
        <>
            {/* Load up the components only when the movie data is available */}
            {movie && (
                <StyledMovieDetails>
                    <Headline>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt={movie.title} />
                    </Headline>
                    <Awards>
                        {movie.awards.map((award) => <Award key={award.title} title={movie.title} 
                            description={award.description} />)}
                    </Awards>
                    <Image>
                        <img src={movie.secondaryImg} alt={movie.title} />
                    </Image>
                </StyledMovieDetails>
            )}
        </>
    ); 
}

const StyledMovieDetails = styled.div`
    color: white;
`;

const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;

    position: relative;

    h2 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover; 
    }
`;

const Awards = styled.div`
    min-height: 80vh;

    display: flex;
    align-items: center;
    justify-content: space-around;

    margin: 5rem 10rem;

    @media (max-width: 1500px) {
        display: block;
        margin: 2rem 2rem;
    }
`;

const Image = styled.div`

    min-height: 50vh;

    img {
        width: 100%;
        height: 100vh;
        object-fit: cover; 
    }
`;

// Award component
function Award({title, description}) {
    return (
        <StyledAward>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );
}

const StyledAward = styled.div`
    padding: 5rem; 
    text-align: center;

    h3 {
        font-size: 2rem;
    }

    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0;
    }

    p {
        padding: 2rem 0;
    }
`;

export default MovieDetails;