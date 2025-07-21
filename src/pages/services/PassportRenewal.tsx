
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { RefreshCcw, CheckCircle2, AlertCircle } from "lucide-react";
import AppointmentBooking from "@/components/AppointmentBooking";

const PassportRenewal = () => {
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
            <h1 className="text-3xl font-bold text-passport-900 mb-2">Passport Renewal Service</h1>
            <p className="text-lg text-passport-600 max-w-2xl mx-auto">
              Renew your existing passport quickly and efficiently
            </p>
          </div>

          {!showAppointment ? (
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-passport-100 p-3 rounded-full">
                      <RefreshCcw className="h-10 w-10 text-passport-600" />
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-4 text-center text-passport-800">Passport Renewal Overview</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Eligibility Requirements</h3>
                      <p className="text-passport-600 mb-4">
                        You can renew your passport if the following conditions are met:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Your passport is in your possession (not lost or stolen)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Your passport is not damaged beyond normal wear and tear</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Your passport was issued when you were 16 years of age or older</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Your passport was issued within the last 15 years</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Required Documents</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Your most recent passport</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>A recent passport photo (2x2 inches)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Completed DS-82 application form</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Payment for application fees</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Processing Time & Fees</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white border rounded-lg">
                          <p className="font-medium mb-1">Standard Processing</p>
                          <p className="text-passport-600">4-6 weeks</p>
                          <p className="font-medium mt-2">$110</p>
                        </div>
                        <div className="p-4 bg-white border rounded-lg">
                          <p className="font-medium mb-1">Expedited Processing</p>
                          <p className="text-passport-600">2-3 weeks</p>
                          <p className="font-medium mt-2">$110 + $60 expedite fee</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-yellow-700">
                          If you have changed your name since your last passport was issued, additional documentation will be required.
                        </p>
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

export default PassportRenewal;
