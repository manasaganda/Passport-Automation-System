
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import AppointmentBooking from "@/components/AppointmentBooking";

const ExpeditedService = () => {
  const [showAppointment, setShowAppointment] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleContinue = () => {
    setShowAppointment(true);
    toast({
      title: "Let's schedule an appointment",
      description: "Fill out the appointment details to continue.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-passport-900 mb-2">Expedited Passport Service</h1>
            <p className="text-lg text-passport-600 max-w-2xl mx-auto">
              Get your passport faster with our premium expedited service
            </p>
          </div>

          {!showAppointment ? (
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-passport-100 p-3 rounded-full">
                      <Clock className="h-10 w-10 text-passport-600" />
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-4 text-center text-passport-800">Expedited Service Options</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Why Choose Expedited Service</h3>
                      <p className="text-passport-600 mb-4">
                        Our expedited service is ideal for travelers who:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Need to travel internationally within 2-3 weeks</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Have confirmed international travel plans</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Want peace of mind with faster processing</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-passport-50 border border-passport-100 rounded-lg p-5">
                      <h3 className="font-medium text-lg text-passport-700 mb-3">Available Expedited Options</h3>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 border border-passport-200 relative overflow-hidden">
                          <div className="absolute top-0 right-0 bg-passport-500 text-white text-xs font-medium py-1 px-3 rounded-bl-lg">
                            MOST POPULAR
                          </div>
                          <h4 className="font-medium text-passport-900 mb-1">Standard Expedited Service</h4>
                          <p className="text-passport-600 text-sm mb-3">For travelers with plans in the next few weeks</p>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-passport-700 font-medium">Processing Time:</span>
                            <span>2-3 weeks</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-passport-700 font-medium">Additional Fee:</span>
                            <span>$60</span>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-passport-200">
                          <h4 className="font-medium text-passport-900 mb-1">Urgent Travel Service</h4>
                          <p className="text-passport-600 text-sm mb-3">For emergency travel within 14 days</p>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-passport-700 font-medium">Processing Time:</span>
                            <span>5-7 business days</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-passport-700 font-medium">Additional Fee:</span>
                            <span>$120</span>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-passport-200">
                          <h4 className="font-medium text-passport-900 mb-1">Same-Day Service</h4>
                          <p className="text-passport-600 text-sm mb-3">For life-or-death emergencies</p>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-passport-700 font-medium">Processing Time:</span>
                            <span>24-48 hours</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-passport-700 font-medium">Additional Fee:</span>
                            <span>$170</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-yellow-700 font-medium">Important Notice</p>
                          <p className="text-yellow-700 text-sm">
                            Expedited processing times are estimates and cannot be guaranteed. Processing times may vary based on application volume.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">What You'll Need</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Proof of international travel (e.g., flight itinerary)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Standard passport application documents</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Expedite fee payment</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <Button onClick={handleContinue} size="lg" className="px-8">
                      Schedule an Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-passport-900">Schedule an Appointment</h2>
                <Button
                  variant="outline"
                  onClick={() => setShowAppointment(false)}
                  className="text-passport-600"
                >
                  Back to Overview
                </Button>
              </div>
              
              <div className="mb-8">
                <AppointmentBooking initialAppointmentType="interview" />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExpeditedService;
