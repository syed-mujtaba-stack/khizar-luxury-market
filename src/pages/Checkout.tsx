
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { CreditCard, Truck, MapPin } from 'lucide-react';

// Mock order items for demonstration
const orderItems = [
  {
    id: '1',
    name: 'Premium Leather Handbag',
    price: 75000,
    quantity: 1
  },
  {
    id: '2',
    name: 'Luxury Watch',
    price: 120000,
    quantity: 1
  }
];

// Define form schema
const checkoutSchema = z.object({
  fullName: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(10, { message: 'Valid phone number is required' }),
  address: z.string().min(5, { message: 'Address is required' }),
  city: z.string().min(2, { message: 'City is required' }),
  postalCode: z.string().min(4, { message: 'Postal code is required' }),
  paymentMethod: z.enum(['card', 'cod']),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState(1);
  
  // Initialize the form
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'card',
    },
  });

  // Calculate order totals
  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 500; // Fixed shipping fee
  const total = subtotal + shipping;

  const onSubmit = (data: CheckoutFormValues) => {
    setIsProcessing(true);
    
    // Simulate checkout process
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order Placed Successfully",
        description: "Thank you for your order! Your order number is #KLM12345",
      });
      
      // In real application, redirect to order confirmation page
    }, 2000);
    
    console.log('Order submitted:', data);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-serif font-bold mb-8">Checkout</h1>
        
        {/* Checkout steps */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center">
            <div className={`flex flex-col items-center ${step >= 1 ? 'text-brand-orange' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-brand-orange text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <span className="text-sm">Shipping</span>
            </div>
            
            <div className={`w-16 h-1 mx-2 ${step >= 2 ? 'bg-brand-orange' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${step >= 2 ? 'text-brand-orange' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-brand-orange text-white' : 'bg-gray-200'}`}>
                2
              </div>
              <span className="text-sm">Payment</span>
            </div>
            
            <div className={`w-16 h-1 mx-2 ${step >= 3 ? 'bg-brand-orange' : 'bg-gray-200'}`}></div>
            
            <div className={`flex flex-col items-center ${step >= 3 ? 'text-brand-orange' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-brand-orange text-white' : 'bg-gray-200'}`}>
                3
              </div>
              <span className="text-sm">Confirmation</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout form */}
          <div className="w-full lg:w-2/3">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      Shipping Information
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your address" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter postal code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" asChild>
                        <Link to="/cart">Back to Cart</Link>
                      </Button>
                      <Button 
                        type="button" 
                        onClick={() => {
                          form.trigger(['fullName', 'email', 'phone', 'address', 'city', 'postalCode']);
                          
                          const isValid = !form.formState.errors.fullName &&
                            !form.formState.errors.email &&
                            !form.formState.errors.phone &&
                            !form.formState.errors.address &&
                            !form.formState.errors.city &&
                            !form.formState.errors.postalCode;
                            
                          if (isValid) {
                            setStep(2);
                          }
                        }}
                      >
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-medium flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Payment Method
                    </h2>
                    
                    <FormField
                      control={form.control}
                      name="paymentMethod"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="space-y-3"
                            >
                              <div className="flex items-center space-x-3 border p-4 rounded-md">
                                <RadioGroupItem value="card" id="card" />
                                <Label htmlFor="card" className="flex items-center">
                                  <CreditCard className="mr-2 h-5 w-5" />
                                  Credit/Debit Card
                                </Label>
                              </div>
                              <div className="flex items-center space-x-3 border p-4 rounded-md">
                                <RadioGroupItem value="cod" id="cod" />
                                <Label htmlFor="cod" className="flex items-center">
                                  <Truck className="mr-2 h-5 w-5" />
                                  Cash on Delivery
                                </Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {form.watch('paymentMethod') === 'card' && (
                      <div className="space-y-4 bg-gray-50 p-4 rounded-md">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="nameOnCard">Name on Card</Label>
                            <Input id="nameOnCard" placeholder="Enter name as on card" />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between pt-4">
                      <Button variant="outline" type="button" onClick={() => setStep(1)}>
                        Back
                      </Button>
                      <Button type="submit" disabled={isProcessing}>
                        {isProcessing ? "Processing..." : "Place Order"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Form>
          </div>
          
          {/* Order summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-serif font-bold mb-4">
                Order Summary
              </h2>
              
              {/* Order items */}
              <div className="space-y-4">
                {orderItems.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <span>PKR {item.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              {/* Order totals */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>PKR {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>PKR {shipping.toLocaleString()}</span>
                </div>
                
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>PKR {total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
