'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const faqs = [
  {
    question: 'What is the return policy?',
    answer: 'You can return any item within 30 days of purchase for a full refund.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to over 100 countries worldwide.',
  },
  {
    question: 'How can I track my order?',
    answer: 'You will receive a tracking link via email once your order ships.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    answerRefs.current.forEach((el, idx) => {
      if (el) {
        gsap.to(el, {
          height: openIndex === idx ? el.scrollHeight : 0,
          opacity: openIndex === idx ? 1 : 0,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      }
    });
  }, [openIndex]);

  return (
    <section className="py-12 px-4 bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">FAQs</h2>

      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-4 font-medium text-lg flex justify-between items-center"
            >
              <span className="text-gray-900">{faq.question}</span>
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            <div
              ref={(el) => (answerRefs.current[index] = el)}
              className="overflow-hidden text-gray-600"
              style={{ height: 0, opacity: 0 }}
            >
              <p className="pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
