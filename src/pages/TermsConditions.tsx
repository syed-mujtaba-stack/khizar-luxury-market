
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const TermsConditions = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-serif text-center">Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-sm text-gray-500 mb-4">Last Updated: May 21, 2025</p>
            
            <h2 className="text-xl font-medium mt-6 mb-4">Introduction</h2>
            <p className="mb-4">
              Welcome to Khizar Luxury Market. These Terms and Conditions govern your use of our 
              website and the purchase of products from our store. By accessing our website or 
              placing an order, you agree to be bound by these Terms and Conditions.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Definitions</h2>
            <p className="mb-4">
              "Website" refers to khizarluxury.com.<br />
              "We," "our," and "us" refer to Khizar Luxury Market.<br />
              "You" and "your" refer to the user or purchaser.<br />
              "Products" refers to the items offered for sale on our website.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Account Registration</h2>
            <p className="mb-4">
              To purchase products from our website, you may need to create an account. You are 
              responsible for maintaining the confidentiality of your account information and 
              password. You agree to accept responsibility for all activities that occur under 
              your account.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Products and Pricing</h2>
            <p className="mb-4">
              We make every effort to display our products and their features as accurately as 
              possible. However, we do not guarantee that product descriptions or other content 
              on our website are accurate, complete, reliable, current, or error-free.
            </p>
            <p className="mb-4">
              Prices for products are subject to change without notice. We reserve the right to 
              modify or discontinue any product without notice at any time. We shall not be liable 
              to you or any third party for any modification, suspension, or discontinuance of any 
              product.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Order Acceptance and Fulfillment</h2>
            <p className="mb-4">
              Your receipt of an order confirmation does not constitute our acceptance of your order. 
              We reserve the right to limit or cancel quantities purchased per person, household, 
              or order. We may also require additional verification or information before accepting 
              an order.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Payment Terms</h2>
            <p className="mb-4">
              We accept various payment methods as indicated on our website. By providing your 
              payment information, you represent and warrant that you have the legal right to use 
              any payment method(s) utilized in connection with any purchase.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Shipping and Delivery</h2>
            <p className="mb-4">
              Shipping and delivery terms are as specified in our Shipping Policy. We are not 
              responsible for delays in delivery due to circumstances beyond our reasonable control.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Returns and Refunds</h2>
            <p className="mb-4">
              Our return and refund policy is as specified in our Returns & Exchanges Policy. 
              Please refer to that policy for detailed information on returning products and 
              obtaining refunds.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content on our website, including text, graphics, logos, images, audio clips, 
              digital downloads, and software, is our property or the property of our content 
              suppliers and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the fullest extent permitted by law, we shall not be liable for any direct, 
              indirect, incidental, special, consequential, or punitive damages arising out 
              of or in any way connected with your access to, use of, or inability to use our 
              website or products.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Indemnification</h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless Khizar Luxury Market, its officers, 
              directors, employees, agents, and suppliers from and against any claims, liabilities, 
              damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating 
              to your violation of these Terms and Conditions.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Governing Law</h2>
            <p className="mb-4">
              These Terms and Conditions shall be governed by and construed in accordance with 
              the laws of [Jurisdiction], without giving effect to any principles of conflicts of law.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Changes to Terms and Conditions</h2>
            <p className="mb-4">
              We reserve the right to update or modify these Terms and Conditions at any time 
              without prior notice. Your continued use of our website following any changes 
              constitutes your acceptance of the revised Terms and Conditions.
            </p>

            <h2 className="text-xl font-medium mt-6 mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
              legal@khizarluxury.com or call (555) 123-4567.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default TermsConditions;
