
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ReturnsPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-serif text-center">Returns & Exchanges</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2 className="text-xl font-medium mt-6 mb-4">Returns Policy</h2>
            <p className="mb-4">
              We want you to be completely satisfied with your purchase. If you're not entirely happy,
              we're here to help with our hassle-free returns and exchanges process.
            </p>

            <h3 className="text-lg font-medium mb-2">Return Eligibility</h3>
            <p className="mb-4">
              Items can be returned within 30 days of delivery under the following conditions:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">The item is in its original condition</li>
              <li className="mb-2">The item is unworn, unwashed, and undamaged</li>
              <li className="mb-2">Original tags and packaging are intact</li>
              <li className="mb-2">A proof of purchase is provided</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Non-Returnable Items</h3>
            <p className="mb-4">
              For hygiene and safety reasons, the following items cannot be returned:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">Intimates and undergarments</li>
              <li className="mb-2">Personalized or customized items</li>
              <li className="mb-2">Beauty products that have been opened or used</li>
              <li className="mb-2">Sale items marked as "Final Sale"</li>
            </ul>

            <h3 className="text-lg font-medium mb-2">How to Initiate a Return</h3>
            <ol className="list-decimal pl-5 mb-4">
              <li className="mb-2">Visit our Returns Portal or contact customer service</li>
              <li className="mb-2">Enter your order number and email address</li>
              <li className="mb-2">Select the items you wish to return and reason for return</li>
              <li className="mb-2">Print the provided return shipping label</li>
              <li className="mb-2">Package the item(s) securely with all original packaging</li>
              <li className="mb-2">Drop off the package at an authorized shipping location</li>
            </ol>

            <h3 className="text-lg font-medium mb-2">Refund Process</h3>
            <p className="mb-4">
              Once we receive your return, our team will inspect the item and process your refund within 5-7 business days.
              Refunds will be issued to the original payment method used for the purchase.
            </p>

            <h3 className="text-lg font-medium mb-2">Exchanges</h3>
            <p className="mb-4">
              If you would like to exchange an item for a different size or color, please follow the same process
              as returns. For faster service, we recommend placing a new order for the desired item and returning
              the original purchase for a refund.
            </p>

            <h3 className="text-lg font-medium mb-2">Return Shipping Costs</h3>
            <p className="mb-4">
              For standard returns, a flat fee of $7.95 will be deducted from your refund to cover return shipping costs.
              Returns due to defects, damages, or incorrect items shipped are free of charge.
            </p>

            <h3 className="text-lg font-medium mb-2">International Returns</h3>
            <p className="mb-4">
              International customers are responsible for return shipping costs and any applicable customs fees.
              Please contact our customer service team for specific instructions on international returns.
            </p>

            <h3 className="text-lg font-medium mb-2">Contact Us</h3>
            <p>
              If you have any questions about our returns policy, please contact our customer service team
              at returns@khizarluxury.com or call us at (555) 123-4567.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ReturnsPolicy;
