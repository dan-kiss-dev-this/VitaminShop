"use client";
import { useState } from "react";
import "./styles.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "How are our supplements different from others?",
      answer:
        "Our supplements are crafted with premium, bioavailable ingredients and undergo rigorous third-party testing. We focus on scientifically-backed formulations that maximize absorption and effectiveness.",
    },
    {
      question: "What benefits can I expect from taking supplements?",
      answer:
        "Regular supplementation can support overall wellness, boost energy levels, improve cognitive function, strengthen immune system, and fill nutritional gaps in your diet. Results vary based on individual needs and consistency.",
    },
    {
      question: "How do I know which supplements are right for me?",
      answer:
        "We recommend starting with essential nutrients like Vitamin D3, Omega-3s, and Magnesium. Our online assessment tool can provide personalized recommendations based on your health goals and lifestyle.",
    },
    {
      question: "What's our approach to ingredient sourcing?",
      answer:
        "We partner with trusted suppliers who maintain strict quality control standards. All ingredients are tested for purity, potency, and potential contaminants before, during, and after production.",
    },
    {
      question: "How do I determine the right dosage?",
      answer:
        "Each supplement comes with recommended dosage instructions based on scientific research. Always start with the suggested serving size and consult with a healthcare professional for personalized advice.",
    },
    {
      question: "What's the best time to take supplements?",
      answer:
        "Timing varies by supplement. Fat-soluble vitamins are best taken with meals, while others may be better on an empty stomach. Each product includes specific timing recommendations.",
    },
    {
      question: "How do I purchase from our online store?",
      answer:
        "Simply browse our catalog, select your products, and check out securely. We offer subscription options for regular savings and free shipping on orders over $50.",
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not completely satisfied, return the unused portion within 30 days for a full refund, no questions asked.",
    },
    {
      question: "How do we ensure quality and safety?",
      answer:
        "Our supplements are manufactured in FDA-registered facilities following GMP guidelines. We conduct multiple quality checks and third-party testing for purity and potency.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes! We ship to most countries worldwide. International shipping rates and delivery times vary by location. Check our shipping policy for detailed information.",
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1>FAQs</h1>

        <div className="faq-list">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${
                  openIndex === index ? "active" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {item.question}
                <span className="plus-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <button className="promo-button">Unlock 50% Off</button>
    </div>
  );
};

export default FAQ;
