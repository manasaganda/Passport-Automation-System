
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import UserDashboard from "@/components/UserDashboard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, Clock, FileText, AlertCircle } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("applications");

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-passport-900 mb-6">My Dashboard</h1>
          
          <Tabs defaultValue="applications" onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full mb-6 grid grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="applications" className="flex items-center gap-2">
                <FileText className="h-4 w-4" /> My Applications
              </TabsTrigger>
              <TabsTrigger value="appointments" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" /> Appointments
              </TabsTrigger>
              <TabsTrigger value="status" className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Status Updates
              </TabsTrigger>
              <TabsTrigger value="alerts" className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" /> Alerts
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="applications">
              <UserDashboard />
            </TabsContent>
            
            <TabsContent value="appointments">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>
                      Manage your scheduled appointments for passport services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div>
                            <h3 className="font-medium text-passport-800">Passport Document Submission</h3>
                            <div className="text-sm text-passport-600">
                              <span className="flex items-center gap-1 mt-2">
                                <CalendarIcon className="h-4 w-4" /> May 24, 2023 - 10:30 AM
                              </span>
                              <span className="flex items-center gap-1 mt-1">
                                <Clock className="h-4 w-4" /> Estimated Duration: 30 minutes
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 flex gap-2">
                            <Button size="sm" variant="outline">Reschedule</Button>
                            <Button size="sm" variant="destructive">Cancel</Button>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full">Book New Appointment</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="status">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Application Status Updates</CardTitle>
                    <CardDescription>
                      Track the progress of your passport applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-passport-500 pl-4 py-2">
                        <p className="text-sm text-gray-500">May 20, 2023 - 09:15 AM</p>
                        <p className="font-medium">Application PA12345 - Document verification completed</p>
                        <p className="text-sm text-passport-600">Your documents have been verified successfully. Moving to background check phase.</p>
                      </div>
                      <div className="border-l-4 border-passport-500 pl-4 py-2">
                        <p className="text-sm text-gray-500">May 18, 2023 - 11:30 AM</p>
                        <p className="font-medium">Application PA12345 - Documents received</p>
                        <p className="text-sm text-passport-600">We have received your application documents. They are now in queue for verification.</p>
                      </div>
                      <div className="border-l-4 border-passport-500 pl-4 py-2">
                        <p className="text-sm text-gray-500">May 15, 2023 - 02:45 PM</p>
                        <p className="font-medium">Application PA12345 - Submitted</p>
                        <p className="text-sm text-passport-600">Your application has been successfully submitted.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="alerts">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Important Alerts</CardTitle>
                    <CardDescription>
                      Stay updated with important notifications about your applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
                        <div className="flex">
                          <AlertCircle className="h-6 w-6 text-amber-500 mr-2" />
                          <div>
                            <p className="font-medium">Document Required: Proof of Address</p>
                            <p className="text-sm">Please upload a current proof of address for your application PA12345.</p>
                            <div className="mt-2">
                              <Button size="sm">Upload Document</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-md">
                        <div className="flex">
                          <AlertCircle className="h-6 w-6 text-green-500 mr-2" />
                          <div>
                            <p className="font-medium">Passport Ready for Pickup</p>
                            <p className="text-sm">Your passport (PA12345) is ready for pickup at the main office. Please bring your ID.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
