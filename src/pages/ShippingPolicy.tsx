
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ShippingPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-serif text-center">Shipping Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2 className="text-xl font-medium mt-6 mb-4">Delivery Information</h2>
            <p className="mb-4">
              At Khizar Luxury Market, we strive to provide excellent service by ensuring prompt delivery of your orders.
              Below you'll find our shipping terms and conditions.
            </p>

            <h3 className="text-lg font-medium mb-2">Processing Time</h3>
            <p className="mb-4">
              All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your order confirmation.
              You will receive a shipping confirmation email with tracking information once your order has been shipped.
            </p>

            <h3 className="text-lg font-medium mb-2">Shipping Methods & Delivery Times</h3>
            <ul className="list-disc pl-5 mb-4">
              <li className="mb-2">
                <strong>Standard Shipping:</strong> 5-7 business days
              </li>
              <li className="mb-2">
                <strong>Express Shipping:</strong> 2-3 business days
              </li>
              <li className="mb-2">
                <strong>Next Day Delivery:</strong> Next business day (order must be placed before 12 PM)
              </li>
            </ul>

            <h3 className="text-lg font-medium mb-2">Shipping Costs</h3>
            <p className="mb-4">
              Shipping costs are calculated based on the weight, dimensions, and destination of your package.
              The exact shipping cost will be displayed during checkout before you complete your purchase.
            </p>

            <h3 className="text-lg font-medium mb-2">Free Shipping</h3>
            <p className="mb-4">
              We offer free standard shipping on all orders over $150 within the contiguous United States.
              International orders and orders to Alaska, Hawaii, and U.S. territories do not qualify for free shipping.
            </p>

            <h3 className="text-lg font-medium mb-2">International Shipping</h3>
            <p className="mb-4">
              We ship to most countries worldwide. International shipping times vary depending on the destination
              and may take 7-21 business days. Please note that international orders may be subject to import duties
              and taxes, which are the responsibility of the recipient.
            </p>

            <h3 className="text-lg font-medium mb-2">Order Tracking</h3>
            <p className="mb-4">
              You can track your order by clicking the tracking link in your shipping confirmation email
              or by visiting the "Track My Order" page on our website with your order number and email.
            </p>

            <h3 className="text-lg font-medium mb-2">Shipping Delays</h3>
            <p className="mb-4">
              While we strive to deliver all orders within the estimated timeframe, delays may occur due to
              unforeseen circumstances such as weather conditions, carrier delays, or customs clearance for
              international orders. We appreciate your understanding in such situations.
            </p>

            <h3 className="text-lg font-medium mb-2">Contact Us</h3>
            <p>
              If you have any questions about our shipping policy, please contact our customer service team
              at support@khizarluxury.com or call us at (555) 123-4567.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ShippingPolicy;
