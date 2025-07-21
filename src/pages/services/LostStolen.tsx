
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileWarning, CheckCircle2, AlertCircle } from "lucide-react";
import AppointmentBooking from "@/components/AppointmentBooking";

const LostStolen = () => {
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
            <h1 className="text-3xl font-bold text-passport-900 mb-2">Lost or Stolen Passport Service</h1>
            <p className="text-lg text-passport-600 max-w-2xl mx-auto">
              Replace your missing passport quickly and securely
            </p>
          </div>

          {!showAppointment ? (
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-passport-100 p-3 rounded-full">
                      <FileWarning className="h-10 w-10 text-passport-600" />
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-4 text-center text-passport-800">Lost or Stolen Passport Replacement</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-6">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-red-700 font-medium">Important Security Alert</p>
                          <p className="text-red-700 text-sm">
                            If your passport was stolen, you should report it to local police and obtain a police report if possible. 
                            Lost or stolen passports should be reported immediately to prevent identity theft and fraud.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Steps to Replace Your Passport</h3>
                      <ol className="space-y-4 list-decimal pl-5">
                        <li className="pl-2">
                          <span className="font-medium">Report the loss or theft</span>
                          <p className="text-passport-600 text-sm mt-1">
                            Report your passport as lost or stolen to the U.S. Department of State by submitting Form DS-64.
                          </p>
                        </li>
                        <li className="pl-2">
                          <span className="font-medium">Gather required documentation</span>
                          <p className="text-passport-600 text-sm mt-1">
                            Collect all necessary documents for your replacement application.
                          </p>
                        </li>
                        <li className="pl-2">
                          <span className="font-medium">Schedule an appointment</span>
                          <p className="text-passport-600 text-sm mt-1">
                            You must apply in person at a passport acceptance facility or passport agency.
                          </p>
                        </li>
                        <li className="pl-2">
                          <span className="font-medium">Submit your application</span>
                          <p className="text-passport-600 text-sm mt-1">
                            Attend your appointment to submit your application and documentation.
                          </p>
                        </li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Required Documents</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Evidence of U.S. citizenship (birth certificate, naturalization certificate)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Form DS-11: Application for a U.S. Passport</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Form DS-64: Statement Regarding Lost or Stolen Passport</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Valid photo identification (driver's license, government ID)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>One passport photo (2x2 inches)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Application fee payment</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Processing Time & Fees</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white border rounded-lg">
                          <p className="font-medium mb-1">Standard Processing</p>
                          <p className="text-passport-600">4-6 weeks</p>
                          <p className="font-medium mt-2">$140</p>
                        </div>
                        <div className="p-4 bg-white border rounded-lg">
                          <p className="font-medium mb-1">Expedited Processing</p>
                          <p className="text-passport-600">2-3 weeks</p>
                          <p className="font-medium mt-2">$140 + $60 expedite fee</p>
                        </div>
                      </div>
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
                <AppointmentBooking initialAppointmentType="document-submission" />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LostStolen;
