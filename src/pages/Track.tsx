
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ApplicationTracker from "@/components/ApplicationTracker";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileSearch, Bell, HelpCircle } from "lucide-react";

const Track = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center py-8">
            <h1 className="text-3xl font-bold text-passport-900 mb-2">Track Your Application</h1>
            <p className="text-lg text-passport-600 max-w-2xl mx-auto">
              Stay updated on the status of your passport application with our real-time tracking system.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="track" className="space-y-6">
              <TabsList className="w-full grid grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="track" className="flex gap-2 items-center">
                  <FileSearch className="h-4 w-4" /> Track Application
                </TabsTrigger>
                <TabsTrigger value="notifications" className="flex gap-2 items-center">
                  <Bell className="h-4 w-4" /> Notification Preferences
                </TabsTrigger>
                <TabsTrigger value="help" className="flex gap-2 items-center">
                  <HelpCircle className="h-4 w-4" /> Help & Support
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="track">
                <ApplicationTracker />
              </TabsContent>
              
              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-passport-600">
                          Receive updates about your application status via email
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-5 bg-passport-500 rounded-full relative cursor-pointer">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <h3 className="font-medium">SMS Notifications</h3>
                        <p className="text-sm text-passport-600">
                          Get text messages for critical updates
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-5 bg-passport-500 rounded-full relative cursor-pointer">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b">
                      <div>
                        <h3 className="font-medium">Application Milestone Updates</h3>
                        <p className="text-sm text-passport-600">
                          Receive notifications when your application reaches important milestones
                        </p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-5 bg-passport-500 rounded-full relative cursor-pointer">
                          <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <Button>Save Preferences</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="help">
                <Card>
                  <CardHeader>
                    <CardTitle>Help & Support</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-passport-50 p-4 rounded-lg">
                      <h3 className="font-medium text-passport-800 mb-2">Tracking Number Format</h3>
                      <p className="text-sm">
                        Your tracking number should be in the format PA12345 as provided in your confirmation email.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium">Common Questions</h3>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="border-b p-3 bg-gray-50 font-medium">
                          What if I don't have my tracking number?
                        </div>
                        <div className="p-3">
                          <p className="text-sm text-passport-700">
                            If you don't have your tracking number, you can retrieve it by logging into your account or contacting our customer support with your full name, date of birth, and application date.
                          </p>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="border-b p-3 bg-gray-50 font-medium">
                          How often is my application status updated?
                        </div>
                        <div className="p-3">
                          <p className="text-sm text-passport-700">
                            Application statuses are updated in real-time as they progress through our system, typically within 24-48 hours of each processing step.
                          </p>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg overflow-hidden">
                        <div className="border-b p-3 bg-gray-50 font-medium">
                          My application seems delayed. What should I do?
                        </div>
                        <div className="p-3">
                          <p className="text-sm text-passport-700">
                            If your application has been in the same status for more than 2 weeks, please contact our support team for assistance.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-passport-100 p-4 rounded-lg text-center">
                      <p className="mb-3 font-medium">Need more help with tracking your application?</p>
                      <Button>Contact Support</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Track;
