import styled from 'styled-components';

// Styled Components -> styled.DOMElement you want to style`{style}`
// To use this, you just substitute the DOM element you want to style with the Styled Components
export const Layout = styled.div`
    min-height: 90vh;

    display: flex; 
    align-items: center;
    justify-content: space-between;

    padding: 5rem 10rem;
    color: white;
`; 

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;