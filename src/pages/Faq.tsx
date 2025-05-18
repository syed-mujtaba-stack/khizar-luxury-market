
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Search } from 'lucide-react';

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // FAQ categories with questions and answers
  const faqCategories = [
    {
      title: "Shopping & Orders",
      faqs: [
        {
          question: "How do I place an order?",
          answer: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. Follow the prompts to enter your shipping and payment information to complete your purchase."
        },
        {
          question: "Is it safe to shop on your website?",
          answer: "Yes, we use secure encryption technology to protect your personal and payment information. All transactions are processed through secure payment gateways to ensure your data remains confidential."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "Orders can be modified or cancelled within 1 hour of placing them. Please contact our customer service team immediately if you need to make changes to your order."
        },
        {
          question: "Do you offer gift wrapping?",
          answer: "Yes, we offer premium gift wrapping services for an additional fee. You can select this option during checkout and even include a personalized message for the recipient."
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      faqs: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping within Pakistan typically takes 3-5 business days. For luxury items, we offer premium shipping that includes tracking and insurance, which takes 2-3 business days."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we only ship within Pakistan. We are working on expanding our shipping options to international destinations in the near future."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order is dispatched, you will receive a tracking number via email and SMS. You can use this number on our 'Track My Order' page or through the courier's website to monitor your delivery status."
        },
        {
          question: "Is delivery available to all areas in Pakistan?",
          answer: "We deliver to most areas in Pakistan. However, some remote locations may have extended delivery times or additional shipping charges. You can check if your area is covered during the checkout process."
        }
      ]
    },
    {
      title: "Returns & Refunds",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We accept returns within 30 days of purchase for most items. Products must be unused, in their original packaging, and include all accessories. Luxury items have special return conditions, please check the product page for specific details."
        },
        {
          question: "How do I initiate a return?",
          answer: "To initiate a return, log into your account, go to your order history, and select the 'Return Item' option next to the product you wish to return. Alternatively, you can contact our customer service team for assistance."
        },
        {
          question: "How long does it take to process a refund?",
          answer: "Once we receive and inspect your returned item, refunds are typically processed within 5-7 business days. The time it takes for the amount to reflect in your account depends on your payment method and financial institution."
        },
        {
          question: "Do I have to pay for return shipping?",
          answer: "For items returned due to defects or errors on our part, return shipping is free. For other returns, shipping costs are the responsibility of the customer unless otherwise stated in the product's return policy."
        }
      ]
    },
    {
      title: "Products & Quality",
      faqs: [
        {
          question: "Are your luxury products authentic?",
          answer: "Yes, we guarantee the authenticity of all products sold on our platform. We source directly from authorized distributors and manufacturers to ensure you receive genuine luxury items."
        },
        {
          question: "Do your products come with a warranty?",
          answer: "Most of our products come with a manufacturer's warranty. The warranty period and coverage vary depending on the product and brand. Warranty information is included in the product description."
        },
        {
          question: "What if I receive a damaged product?",
          answer: "If you receive a damaged or defective product, please contact our customer service within 48 hours of delivery. We will arrange for a replacement or refund based on your preference and the availability of the product."
        },
        {
          question: "How do I care for luxury items purchased from your store?",
          answer: "Each luxury item comes with specific care instructions. Generally, we recommend storing items in their original packaging when not in use, keeping them away from direct sunlight and moisture, and following the manufacturer's cleaning guidelines."
        }
      ]
    },
    {
      title: "Account & Security",
      faqs: [
        {
          question: "How do I create an account?",
          answer: "You can create an account by clicking on the 'Account' button in the navigation menu and selecting 'Register'. Fill in the required information and verify your email address to complete the registration."
        },
        {
          question: "I forgot my password. How do I reset it?",
          answer: "On the login page, click on 'Forgot Password'. Enter your registered email address, and we will send you a link to reset your password. Follow the instructions in the email to create a new password."
        },
        {
          question: "How is my personal information protected?",
          answer: "We use advanced security measures to protect your personal information. Our website employs SSL encryption, and we never share your details with third parties without your consent. You can review our Privacy Policy for more information."
        },
        {
          question: "Can I update my shipping address or payment information?",
          answer: "Yes, you can update your shipping address and payment information by logging into your account and navigating to the 'Account Settings' section. Make your changes and save the updated information."
        }
      ]
    }
  ];
  
  // Filter FAQs based on search query
  const filteredFaqs = searchQuery.trim() === '' 
    ? faqCategories 
    : faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0);
  
  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Find answers to common questions about our products, orders, shipping, returns, and more. Can't find what you're looking for? Contact our customer service team.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Search bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for questions or keywords..."
              className="pl-10 py-3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* FAQ content */}
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((category, index) => (
            category.faqs.length > 0 && (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-serif font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${index}-${faqIndex}`}
                      className="border border-gray-200 rounded-md overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 font-medium text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-gray-50">
                        <p className="text-gray-700">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-3">No results found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any FAQs matching your search. Try different keywords or browse our FAQ categories.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setSearchQuery('')}
            >
              Clear Search
            </Button>
          </div>
        )}
        
        {/* Contact section */}
        <div className="bg-gradient-to-r from-brand-orange/10 to-brand-skyBlue/10 rounded-lg p-8 text-center mt-12">
          <h3 className="text-2xl font-serif font-bold mb-3">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our customer support team is ready to help you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-luxury">
              Contact Support
            </Button>
            <Button variant="outline">
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
