import home1 from '../img/home1.png';
// Import Styled
import styled from 'styled-components'; 

function AboutSection() {
    return (
        <About>
            <Description>
                <div className="title">
                    {/* Separating the text in different chunks that will be
                        animated independently */}
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come </h2>
                    </Hide>
                     <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography or video ideas that you have.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="guy with a camera" />
            </Image>
        </About>
    );
}

// Styled Components -> styled.DOMElement you want to style`{style}`
// To use this, you just substitute the DOM element you want to style with the Styled Components
const About = styled.div`
    min-height: 90vh;

    display: flex; 
    align-items: center;
    justify-content: space-between;

    padding: 5rem 10rem;
    color: white;
`; 

const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export default AboutSection;