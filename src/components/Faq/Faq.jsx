import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        { question: "What is SaathPay?", answer: "SaathPay is a splitwise-style expense management app that helps users track shared expenses easily." },
        { question: "How do I create an account?", answer: "Simply sign up using your email or phone number and set up your profile." },
        { question: "Is SaathPay free to use?", answer: "Yes! SaathPay offers a free version with essential features. Additional premium features may be available." },
        { question: "Can I add friends to split expenses?", answer: "Absolutely! You can invite friends to join groups and split expenses seamlessly." },
        { question: "How secure is my data?", answer: "SaathPay uses advanced encryption and security measures to protect your data." }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq_body container-fluid">
            <div className="text-center pt-sm-5 faq-header">
                <h1>FAQs</h1>
                <h1>Frequently Asked Questions</h1>
            </div>

            <div className="faq-list container">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
                        <div className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
                        </div>
                        {activeIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
