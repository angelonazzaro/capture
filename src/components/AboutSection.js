import home1 from '../img/home1.png';
// Import Styled
import styled from 'styled-components'; 
import { Layout, Description, Hide, Image } from '../styles';

function AboutSection() {
    return (
        <Layout>
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
        </Layout>
    );
}

export default AboutSection;