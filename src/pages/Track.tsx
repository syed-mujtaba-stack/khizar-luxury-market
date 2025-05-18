
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { Separator } from '@/components/ui/separator';
import { 
  Package,
  Truck, 
  Calendar, 
  CheckCircle, 
  Clock,
  MapPin
} from 'lucide-react';

const Track = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [trackingResult, setTrackingResult] = useState<null | {
    orderNumber: string;
    status: 'processing' | 'shipped' | 'out-for-delivery' | 'delivered';
    statusText: string;
    estimatedDelivery: string;
    currentLocation: string;
    timeline: {
      date: string;
      time: string;
      status: string;
      location: string;
    }[];
    products: {
      name: string;
      quantity: number;
      image: string;
    }[];
  }>(null);

  // Handle tracking number submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      toast({
        title: "Error",
        description: "Please enter a tracking number",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call to fetch tracking information
    setTimeout(() => {
      // For demo purposes, always show a sample result
      setTrackingResult({
        orderNumber: trackingNumber.trim(),
        status: 'shipped',
        statusText: 'Your package is on its way',
        estimatedDelivery: 'May 22, 2025',
        currentLocation: 'Lahore Distribution Center',
        timeline: [
          {
            date: 'May 18, 2025',
            time: '09:45 AM',
            status: 'Order Placed',
            location: 'Online'
          },
          {
            date: 'May 19, 2025',
            time: '11:30 AM',
            status: 'Order Processed',
            location: 'Warehouse'
          },
          {
            date: 'May 20, 2025',
            time: '02:15 PM',
            status: 'Shipped',
            location: 'Lahore Distribution Center'
          },
          {
            date: 'May 22, 2025',
            time: '',
            status: 'Estimated Delivery',
            location: 'Customer Address'
          }
        ],
        products: [
          {
            name: 'Luxury Leather Wallet',
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=300&h=300&fit=crop'
          },
          {
            name: 'Designer Sunglasses',
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop'
          }
        ]
      });
      
      setIsLoading(false);
    }, 1500);
  };

  // Get status progress percentage
  const getProgressPercentage = (status: string) => {
    switch (status) {
      case 'processing':
        return 25;
      case 'shipped':
        return 50;
      case 'out-for-delivery':
        return 75;
      case 'delivered':
        return 100;
      default:
        return 0;
    }
  };

  return (
    <Layout>
      {/* Hero section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Track Your Order</h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            Enter your order number or tracking number to check the status of your shipment.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Tracking form */}
        <div className="max-w-2xl mx-auto mb-12">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Enter your tracking or order number"
              className="flex-grow"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <Button 
              type="submit" 
              className="btn-luxury sm:w-auto"
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Track Order"}
            </Button>
          </form>
        </div>
        
        {/* Tracking results */}
        {trackingResult && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gray-50 px-6 py-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-lg font-medium">Order #{trackingResult.orderNumber}</h2>
                  <p className="text-gray-500 text-sm">Estimated delivery: {trackingResult.estimatedDelivery}</p>
                </div>
                <div className="mt-3 md:mt-0">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
                    ${trackingResult.status === 'delivered' ? 'bg-green-100 text-green-800' : 
                      trackingResult.status === 'out-for-delivery' ? 'bg-blue-100 text-blue-800' :
                      trackingResult.status === 'shipped' ? 'bg-amber-100 text-amber-800' :
                      'bg-gray-100 text-gray-800'}`}>
                    {trackingResult.statusText}
                  </span>
                </div>
              </div>
              
              {/* Progress tracker */}
              <div className="px-6 py-8">
                <div className="relative">
                  {/* Progress bar */}
                  <div className="overflow-hidden h-2 mb-6 text-xs flex rounded bg-gray-200">
                    <div 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-orange"
                      style={{ width: `${getProgressPercentage(trackingResult.status)}%` }}
                    ></div>
                  </div>
                  
                  {/* Status points */}
                  <div className="flex justify-between">
                    <div className="text-center">
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center
                        ${getProgressPercentage(trackingResult.status) >= 25 ? 'bg-brand-orange text-white' : 'bg-gray-200'}`}>
                        <Package size={20} />
                      </div>
                      <p className="mt-2 text-sm font-medium">Processing</p>
                    </div>
                    <div className="text-center">
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center
                        ${getProgressPercentage(trackingResult.status) >= 50 ? 'bg-brand-orange text-white' : 'bg-gray-200'}`}>
                        <Truck size={20} />
                      </div>
                      <p className="mt-2 text-sm font-medium">Shipped</p>
                    </div>
                    <div className="text-center">
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center
                        ${getProgressPercentage(trackingResult.status) >= 75 ? 'bg-brand-orange text-white' : 'bg-gray-200'}`}>
                        <MapPin size={20} />
                      </div>
                      <p className="mt-2 text-sm font-medium">Out for Delivery</p>
                    </div>
                    <div className="text-center">
                      <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center
                        ${getProgressPercentage(trackingResult.status) === 100 ? 'bg-brand-orange text-white' : 'bg-gray-200'}`}>
                        <CheckCircle size={20} />
                      </div>
                      <p className="mt-2 text-sm font-medium">Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              {/* Current status */}
              <div className="px-6 py-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-skyBlue/10 flex items-center justify-center text-brand-skyBlue">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-medium">Current Location</p>
                    <p className="text-gray-600">{trackingResult.currentLocation}</p>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              {/* Order items */}
              <div className="px-6 py-4">
                <h3 className="font-medium mb-4">Order Items</h3>
                <div className="space-y-4">
                  {trackingResult.products.map((product, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-gray-500 text-sm">Quantity: {product.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              {/* Tracking history */}
              <div className="px-6 py-6">
                <h3 className="font-medium mb-6">Tracking History</h3>
                <div className="relative pl-8 space-y-8">
                  {/* Line connecting all events */}
                  <div className="absolute top-0 left-3 h-full w-px bg-gray-200"></div>
                  
                  {trackingResult.timeline.map((event, index) => (
                    <div key={index} className="relative">
                      {/* Status indicator */}
                      <div className={`absolute -left-8 w-6 h-6 rounded-full
                        ${index === 0 ? 'bg-brand-orange' : 
                          event.date ? 'bg-brand-orange' : 'bg-gray-200'} flex items-center justify-center`}>
                        {index === 0 ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : event.time ? (
                          <CheckCircle className="h-4 w-4 text-white" />
                        ) : (
                          <Clock className="h-4 w-4 text-white" />
                        )}
                      </div>
                      
                      {/* Event details */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div>
                          <h4 className="font-medium">{event.status}</h4>
                          <p className="text-gray-600">{event.location}</p>
                        </div>
                        {event.time && (
                          <div className="flex items-center mt-2 sm:mt-0 text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {event.date} {event.time && `• ${event.time}`}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Footer with help options */}
              <div className="bg-gray-50 px-6 py-4">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <p className="text-gray-600 mb-3 sm:mb-0">Need help with your order?</p>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm">Contact Support</Button>
                    <Button className="bg-brand-orange" size="sm">Report an Issue</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Instructions section */}
        {!trackingResult && (
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center">How to Track Your Order</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-4">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="font-medium mb-2">Find Your Tracking Number</h3>
                <p className="text-gray-600">
                  Locate your tracking number in your order confirmation email or SMS.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-brand-skyBlue/10 flex items-center justify-center text-brand-skyBlue mx-auto mb-4">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="font-medium mb-2">Enter Tracking Number</h3>
                <p className="text-gray-600">
                  Enter the tracking number in the field above to check your order status.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-medium mb-2">Track in Real-time</h3>
                <p className="text-gray-600">
                  Get real-time updates as your package moves toward delivery.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Track;
