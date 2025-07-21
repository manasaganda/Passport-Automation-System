
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, CheckCircle2, AlertCircle } from "lucide-react";
import AppointmentBooking from "@/components/AppointmentBooking";

const ChildPassport = () => {
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
            <h1 className="text-3xl font-bold text-passport-900 mb-2">Child Passport Service</h1>
            <p className="text-lg text-passport-600 max-w-2xl mx-auto">
              Special handling for passport applications for minors under 16
            </p>
          </div>

          {!showAppointment ? (
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-passport-100 p-3 rounded-full">
                      <UserPlus className="h-10 w-10 text-passport-600" />
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold mb-4 text-center text-passport-800">Child Passport Application</h2>
                  
                  <div className="space-y-6">
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-blue-700 font-medium">Important Information for Parents/Guardians</p>
                          <p className="text-blue-700 text-sm">
                            Children under 16 must apply in person with both parents/guardians present. 
                            If one parent cannot appear, additional documentation is required.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Child Passport Requirements</h3>
                      <p className="text-passport-600 mb-4">
                        The application process for children has special requirements to protect minors:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Both parents/legal guardians must be present with the child</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Parents/guardians must provide evidence of relationship to the child</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Parental consent from both parents is required</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Special Circumstances</h3>
                      <div className="space-y-3">
                        <div className="bg-white p-3 border rounded-lg">
                          <p className="font-medium">One Parent Cannot Appear</p>
                          <p className="text-passport-600 text-sm">
                            The absent parent must complete Form DS-3053 "Statement of Consent" with notarization.
                          </p>
                        </div>
                        <div className="bg-white p-3 border rounded-lg">
                          <p className="font-medium">Sole Legal Custody</p>
                          <p className="text-passport-600 text-sm">
                            Evidence of sole legal custody must be provided (court order, death certificate, etc.).
                          </p>
                        </div>
                        <div className="bg-white p-3 border rounded-lg">
                          <p className="font-medium">Unable to Locate Other Parent</p>
                          <p className="text-passport-600 text-sm">
                            Form DS-5525 "Statement of Exigent/Special Family Circumstances" must be completed.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-lg text-passport-700 mb-2">Required Documents</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Child's evidence of U.S. citizenship (original birth certificate)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Form DS-11: Application for a U.S. Passport</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Parents' identification (driver's license, passport)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Evidence of parental relationship (birth certificate naming parents)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>One passport photo of the child (2x2 inches)</span>
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
                          <p className="font-medium mt-2">$115</p>
                        </div>
                        <div className="p-4 bg-white border rounded-lg">
                          <p className="font-medium mb-1">Expedited Processing</p>
                          <p className="text-passport-600">2-3 weeks</p>
                          <p className="font-medium mt-2">$115 + $60 expedite fee</p>
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

export default ChildPassport;
