import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <StyledNav>
            <h1><Link to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/aboutus">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contactus">3. Contact Us</Link></li>
            </ul>
        </StyledNav>
    );
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: auto;

    padding: 1rem 10rem;

    background-color: #282828;

    h1 {
        a {
            font-size: 2.5rem;
            font-family: 'Lobster', sans-serif;
            font-weight: lighter;
        }
    }
    
    a {
        color: white; 
        text-decoration: none;
    }

    ul {
        list-style: none;

        display: flex;

        li {
            padding-left: 10rem;
            position: relative;
        }
    }

    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;

        #logo {
            display: inline-block;
            margin: 1rem;
        }

        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            
            li {
                padding: 0;
            }
        }
    }

`;

export default Nav; 