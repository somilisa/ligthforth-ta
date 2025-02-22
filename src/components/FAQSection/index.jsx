import { useState } from "react";
import styles from "./styles.module.scss";

import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How soon will my order ship?",
      answer:
        "Orders typically ship within 2-3 business days. You’ll receive a notification with tracking details once shipped.",
    },
    {
      id: 2,
      question: "Is there any warranty exclusion?",
      answer:
        "We cover most manufacturing defects under warranty. However, accidental damage or misuse is not covered.",
    },
    {
      id: 3,
      question: "What payment methods are accepted?",
      answer:
        "We accept credit/debit cards, PayPal, and bank transfers depending on your region.",
    },
  ];

  // Toggle accordion
  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <article key={faq.id} className={styles.faqItem}>
              <header
                className={styles.faqHeader}
                onClick={() => handleToggle(index)}
              >
                <h3 className={styles.question}>{faq.question}</h3>
                <span className={styles.icon}>
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </header>
              {activeIndex === index && (
                <p className={styles.answer}>{faq.answer}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
