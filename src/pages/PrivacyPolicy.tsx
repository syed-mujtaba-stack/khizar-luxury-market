
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-serif text-center">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-4">Last Updated: May 21, 2025</p>
            
            <h2 className="text-xl font-medium mt-6 mb-4">Introduction</h2>
            <p className="mb-4">
              Khizar Luxury Market ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information
              when you visit our website, use our mobile application, or make a purchase from us.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Information We Collect</h2>
            <h3 className="text-lg font-medium mb-2">Personal Information</h3>
            <p className="mb-4">
              We may collect personal information that identifies, relates to, describes, or can be
              reasonably linked to you, including but not limited to:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Name, postal address, email address, and telephone number</li>
              <li className="mb-2">Payment information (credit card details, billing address)</li>
              <li className="mb-2">Purchase history and product preferences</li>
              <li className="mb-2">Account information if you create an account with us</li>
              <li className="mb-2">Communication preferences and marketing opt-ins</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Usage Information</h3>
            <p className="mb-4">
              We may also collect information about how you use our website or mobile application:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">IP address and device information</li>
              <li className="mb-2">Browser type and version</li>
              <li className="mb-2">Operating system</li>
              <li className="mb-2">Pages viewed and navigation patterns</li>
              <li className="mb-2">Referring website or source</li>
              <li className="mb-2">Time spent on our site and frequency of visits</li>
            </ul>

            <h2 className="text-xl font-medium mt-6 mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Processing and fulfilling your orders</li>
              <li className="mb-2">Managing your account</li>
              <li className="mb-2">Communicating with you about orders, products, and services</li>
              <li className="mb-2">Personalizing your shopping experience</li>
              <li className="mb-2">Improving our website, products, and customer service</li>
              <li className="mb-2">Sending promotional emails and marketing communications</li>
              <li className="mb-2">Conducting analytics and research</li>
              <li className="mb-2">Protecting against fraud and unauthorized transactions</li>
              <li className="mb-2">Complying with legal obligations</li>
            </ul>

            <h2 className="text-xl font-medium mt-6 mb-4">Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies, web beacons, and similar technologies to enhance your browsing experience, 
              analyze traffic patterns, and personalize content. You can control cookies through your 
              browser settings, although this may impact certain features of our website.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Information Sharing and Disclosure</h2>
            <p className="mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Service providers and business partners who help us operate our business</li>
              <li className="mb-2">Payment processors to complete transactions</li>
              <li className="mb-2">Shipping and logistics companies to deliver your orders</li>
              <li className="mb-2">Marketing and advertising partners</li>
              <li className="mb-2">Legal authorities when required by law</li>
            </ul>

            <h2 className="text-xl font-medium mt-6 mb-4">Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. 
              However, please note that no method of transmission over the internet or electronic 
              storage is 100% secure.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Your Rights and Choices</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, 
              including the right to access, correct, delete, or restrict the processing of your data.
              To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Changes to This Privacy Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. The updated version will be indicated 
              by an updated "Last Updated" date at the top of this page.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
              privacy@khizarluxury.com or call (555) 123-4567.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
