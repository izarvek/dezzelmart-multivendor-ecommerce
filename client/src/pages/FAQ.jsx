import React, { useState } from 'react';
import { Search, ChevronDown, ShoppingCart, Truck, CreditCard, RefreshCw, MessageCircle } from 'lucide-react';

// Sample FAQ data for an e-commerce site
const faqData = [
  {
    category: 'Ordering & Account',
    icon: ShoppingCart,
    questions: [
      {
        q: "How do I place an order on DezzelMart?",
        a: "Ordering is easy! Browse our categories, add items to your cart, and proceed to checkout. You can check out as a guest or create a DezzelMart account for faster future purchases and order tracking."
      },
      {
        q: "Can I change or cancel my order after it has been placed?",
        a: "We process orders quickly, but you may be able to modify or cancel within 30 minutes of placing it. Please contact our support team immediately with your order number. Once shipping preparation begins, we cannot guarantee changes."
      },
      {
        q: "I forgot my password. How do I reset it?",
        a: "On the login page, click 'Forgot Password'. Enter the email address associated with your DezzelMart account, and we will send you a link to securely reset your password."
      },
    ]
  },
  {
    category: 'Shipping & Delivery',
    icon: Truck,
    questions: [
      {
        q: "What are DezzelMart's shipping options and delivery times?",
        a: "We offer Standard (3-7 business days), Expedited (2-3 business days), and Next-Day shipping options. Delivery times are estimated after the order has been processed (usually within 24 hours)."
      },
      {
        q: "How can I track my shipment?",
        a: "Once your order ships, you will receive an email notification containing your tracking number and a link to the carrier's website. You can also find this information in your 'Order History' if you have an account."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, DezzelMart ships to over 50 countries worldwide. International shipping rates and delivery times will be calculated at checkout based on your location."
      },
    ]
  },
  {
    category: 'Returns & Refunds',
    icon: RefreshCw,
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day satisfaction guarantee. Items must be unused, in their original packaging, and include all tags. Customized or final-sale items may be excluded. Please visit our dedicated Returns Center page to start the process."
      },
      {
        q: "How long does it take to receive a refund?",
        a: "Once we receive and inspect your return, refunds are typically processed within 5-10 business days. The time it takes for the funds to appear in your account depends on your bank or payment provider."
      },
      {
        q: "My item arrived damaged. What should I do?",
        a: "We apologize! Please contact us within 48 hours of delivery with your order number and clear photos of the damage. We will arrange for a free return and send a replacement immediately."
      },
    ]
  },
  {
    category: 'Payments & Security',
    icon: CreditCard,
    questions: [
      {
        q: "What payment methods does DezzelMart accept?",
        a: "We accept Visa, MasterCard, American Express, Discover, PayPal, and DezzelMart Gift Cards."
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely. DezzelMart uses industry-standard SSL encryption and is PCI compliant. Your payment details are never stored on our servers."
      },
    ]
  },
];

// Component for a single FAQ item (accordion)
const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-gray-800 focus:outline-none transition-colors duration-150 hover:text-indigo-600"
        onClick={toggleFAQ}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={`w-5 h-5 ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : 'rotate-0'}`}
        />
      </button>
      {/* Accordion Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
        style={{ transitionProperty: isOpen ? 'max-height, opacity, margin-top' : 'max-height, opacity' }}
      >
        <p className="text-gray-600 pr-10 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// Component for a category block
const FAQCategory = ({ category, icon: Icon, questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center mb-6 border-b pb-4">
        <Icon className="w-8 h-8 text-indigo-600 mr-3" />
        <h3 className="text-2xl font-extrabold text-gray-900">{category}</h3>
      </div>
      <div className="space-y-2">
        {questions.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.q}
            answer={faq.a}
            isOpen={openIndex === index}
            toggleFAQ={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Main App Component
const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);


  return (
    // Root div with mandated padding classes
    <div className="min-h-screen bg-gray-50 font-[Inter] py-12 px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
          DezzelMart Help Center
        </h1>
        <p className="text-xl text-gray-500">
          Answers to your most frequently asked questions about ordering, shipping, and returns.
        </p>
      </header>

      {/* Search Bar Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQs (e.g., 'delivery time', 'return policy')"
            className="w-full py-4 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm transition duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* FAQ Categories Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {filteredFaqData.length > 0 ? (
          filteredFaqData.map((category, index) => (
            <FAQCategory
              key={index}
              category={category.category}
              icon={category.icon}
              questions={category.questions}
            />
          ))
        ) : (
          <div className="lg:col-span-2 text-center py-20 bg-white rounded-xl shadow-sm">
            <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">
              No results found for "{searchTerm}". Try a different search term or check our categories.
            </p>
          </div>
        )}
      </main>

      {/* Contact CTA */}
      <section className="mt-16 text-center py-10 rounded-xl bg-indigo-50 shadow-inner">
        <h2 className="text-3xl font-bold text-indigo-800 mb-3">
          Still Need Help?
        </h2>
        <p className="text-lg text-indigo-600 mb-6">
          Our dedicated support team is ready to assist you 24/7.
        </p>
        <button
          onClick={() => alert('Opening live chat support...')}
          className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-sm hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
        >
          Contact Support
        </button>
      </section>
    </div>
  );
};

export default FAQ;