import styled from 'styled-components';

function Nav() {
    return (
        <StyledNav>
            <h1><a href="#">Capture</a></h1>
            <ul>
                <li><a href="#">1. About Us</a></li>
                <li><a href="#">2. Our Work</a></li>
                <li><a href="#">3. Contact Us</a></li>
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

`;

export default Nav; 