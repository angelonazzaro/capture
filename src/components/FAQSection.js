import { useState } from 'react';
import styled from "styled-components";
import { Layout } from '../styles';

import { FAQState } from '../data';
import FAQ from './FAQ';

function FAQSection() {

    const [faqState, setFaqState] = useState(FAQState());

    return (
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            {faqState.map((faq) => <FAQ key={faq.id} faq={faq} faqState={faqState} setFaqState={setFaqState} />)}
        </Faq>
    );
}

const Faq = styled(Layout)`
    display: block; 

    span {
        display: block; 
    }

    h2 {
        padding-bottom: 2rem; 
        font-weight: lighter; 
    }

    .faq-line {
        background-color: #cccccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }

    .question {
        padding: 3rem 0;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0;

        p {
            padding: 1rem 0;
        }
    }
`;

export default FAQSection; 