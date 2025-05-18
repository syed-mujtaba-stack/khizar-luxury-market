
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';

const Login = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to Khizar Luxury Market!",
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful",
      description: "Your account has been created successfully!",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-serif font-bold">My Account</h1>
            <p className="text-gray-600">Sign in or create an account to continue</p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="w-full rounded-none bg-gray-50">
                <TabsTrigger value="login" className="flex-1 rounded-none">Login</TabsTrigger>
                <TabsTrigger value="register" className="flex-1 rounded-none">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="p-6">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="login-email">Email</Label>
                      <Input id="login-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <Label htmlFor="login-password">Password</Label>
                        <Link to="/forgot-password" className="text-sm text-brand-skyBlue">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="login-password" type="password" placeholder="Enter your password" />
                    </div>
                    <Button type="submit" className="w-full btn-luxury">
                      Sign In
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="register" className="p-6">
                <form onSubmit={handleRegister}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="register-name">Full Name</Label>
                      <Input id="register-name" type="text" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="register-email">Email</Label>
                      <Input id="register-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="register-password">Password</Label>
                      <Input id="register-password" type="password" placeholder="Create a password" />
                    </div>
                    <div>
                      <Label htmlFor="register-confirm-password">Confirm Password</Label>
                      <Input id="register-confirm-password" type="password" placeholder="Confirm your password" />
                    </div>
                    <Button type="submit" className="w-full btn-luxury">
                      Create Account
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
