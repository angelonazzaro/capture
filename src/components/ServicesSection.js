import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

import styled from 'styled-components';
import { Layout, Description, Image } from '../styles';

import { fadeAnimation } from '../animation';
import { useScroll } from './Scroll';

function ServicesSection() {

    const [element, controls] = useScroll();
 
    return (
        <Services variants={fadeAnimation} animate={controls} ref={element}>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                       <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                       <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                       <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="Services Home" />
            </Image>
        </Services>
    ); 
}

// This copies everything from the Layout styled component and lets you customize it 
const Services = styled(Layout)`
    h2 {
        padding-bottom: 5rem; 
    }

    p {
        width: 70%; 
        padding: 2rem 0 4rem 0;
    }
`;

const Cards = styled.div`
    display: flex; 
    flex-wrap: wrap; 

    .card {
        flex-basis: 20rem; 

        .icon {
            display: flex;
            align-items: center;

            h3 {
                margin-left: 1rem;
                background-color: white;
                color: black;
                padding: 1rem;
            }
        }
    }
`;

export default ServicesSection;