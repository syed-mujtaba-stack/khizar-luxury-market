
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Mail, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showContactForm, setShowContactForm] = useState(false);
  
  // FAQ categories with questions and answers
  const faqCategories = [
    {
      id: 'shopping',
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
      id: 'shipping',
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
      id: 'returns',
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
      id: 'products',
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
      id: 'account',
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
  
  // Filter FAQs based on search query and active tab
  const filteredFaqs = faqCategories
    .filter(category => activeTab === 'all' || category.id === activeTab)
    .map(category => ({
      ...category,
      faqs: category.faqs.filter(faq => 
        searchQuery.trim() === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(category => category.faqs.length > 0);
  
  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log('Contact form data:', contactForm);
    
    // Show success message
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    // Clear form
    setContactForm({
      name: '',
      email: '',
      message: ''
    });
    
    // Hide form
    setShowContactForm(false);
  };
  
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
        <div className="max-w-2xl mx-auto mb-8">
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
        
        {/* Tabs for category navigation */}
        <div className="max-w-4xl mx-auto mb-10">
          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-6">
              <TabsList>
                <TabsTrigger value="all">All Categories</TabsTrigger>
                {faqCategories.map(category => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <TabsContent value="all">
              {/* FAQ content for all categories */}
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
            </TabsContent>
            
            {/* Individual category tabs */}
            {faqCategories.map(category => (
              <TabsContent key={category.id} value={category.id}>
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold mb-6">{category.title}</h2>
                  
                  {filteredFaqs.find(c => c.id === category.id)?.faqs.length ? (
                    <Accordion type="single" collapsible className="space-y-4">
                      {filteredFaqs
                        .find(c => c.id === category.id)?.faqs
                        .map((faq, faqIndex) => (
                          <AccordionItem 
                            key={faqIndex} 
                            value={`${category.id}-${faqIndex}`}
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
                  ) : (
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-3">No results found</h3>
                      <p className="text-gray-600 mb-6">
                        We couldn't find any FAQs matching your search in this category.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setSearchQuery('')}
                      >
                        Clear Search
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Contact section */}
        <div className="bg-gradient-to-r from-brand-orange/10 to-brand-skyBlue/10 rounded-lg p-8 text-center mt-12">
          <h3 className="text-2xl font-serif font-bold mb-3">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our customer support team is ready to help you.
          </p>
          
          {showContactForm ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleContactSubmit} className="space-y-4 text-left">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactFormChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={contactForm.email}
                    onChange={handleContactFormChange}
                    required
                    placeholder="your-email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Your Question</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                    placeholder="What would you like to know?"
                    rows={4}
                  />
                </div>
                <div className="flex justify-center gap-4 pt-2">
                  <Button type="submit" className="btn-luxury">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowContactForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="btn-luxury"
                onClick={() => setShowContactForm(true)}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </Button>
              <Button variant="outline">
                Live Chat
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
