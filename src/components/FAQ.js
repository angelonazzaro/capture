
function FAQ({faq, faqState, setFaqState}) {

    const updateFAQs = () => {
        setFaqState(faqState.map((fq) => {
            if (faq.id === fq.id)
                fq.isOpen = !fq.isOpen;
            return fq;
        })); 
    }

    return (
        <div className="question" onClick={updateFAQs}>
            <h4>{faq.title}</h4>
            {faq.isOpen && (  
                <div className="answer">
                    <p>{faq.answer}</p>
                </div>
            )}
            <div className="faq-line"></div>
        </div>
    );
}

export default FAQ;