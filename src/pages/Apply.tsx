
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ChevronRight, FileText, Clock, Globe } from "lucide-react";
import AppointmentBooking from "@/components/AppointmentBooking";
import { AppointmentType } from "@/components/appointment/types";

const Apply = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [appointmentType, setAppointmentType] = useState<AppointmentType | "">("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleServiceSelection = (service: string) => {
    setSelectedService(service);
    
    // Map service type to appointment type
    let appointmentTypeValue: AppointmentType | "" = "";
    switch (service) {
      case "New Passport":
        appointmentTypeValue = "document-submission";
        break;
      case "Passport Renewal":
        appointmentTypeValue = "document-submission";
        break;
      case "Lost Passport":
        appointmentTypeValue = "document-submission";
        break;
      case "Name Change":
        appointmentTypeValue = "document-submission";
        break;
      case "Emergency":
        appointmentTypeValue = "interview";
        break;
      default:
        appointmentTypeValue = "";
    }
    
    setAppointmentType(appointmentTypeValue);
    
    toast({
      title: "Service Selected",
      description: `You've selected the ${service} service. Please proceed with booking an appointment.`,
    });
  };

  const handleBackToServices = () => {
    setSelectedService(null);
    setAppointmentType("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-passport-900 mb-2">Passport Application</h1>
            <p className="text-lg text-passport-600 max-w-2xl mx-auto">
              {!selectedService 
                ? "Select a service type below to begin your passport application process."
                : `Complete your ${selectedService} application by scheduling an appointment.`
              }
            </p>
          </div>

          {!selectedService ? (
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4 text-passport-800">Select a Service Type</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div
                      onClick={() => handleServiceSelection("New Passport")}
                      className="border rounded-lg p-4 cursor-pointer hover:border-passport-500 hover:bg-passport-50 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-passport-100 p-2 rounded-full">
                          <FileText className="h-6 w-6 text-passport-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-passport-900">New Passport</h3>
                          <p className="text-sm text-passport-600 mt-1">
                            Apply for a new passport if you've never had one before or if your previous passport has expired.
                          </p>
                          <div className="mt-2 flex items-center text-passport-500 text-sm">
                            <Clock className="h-4 w-4 mr-1" /> Processing time: 4-6 weeks
                          </div>
                          <Button className="mt-3 w-full" variant="outline" size="sm">
                            Select <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div
                      onClick={() => handleServiceSelection("Passport Renewal")}
                      className="border rounded-lg p-4 cursor-pointer hover:border-passport-500 hover:bg-passport-50 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="bg-passport-100 p-2 rounded-full">
                          <Globe className="h-6 w-6 text-passport-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-passport-900">Passport Renewal</h3>
                          <p className="text-sm text-passport-600 mt-1">
                            Renew your existing passport that's expired or about to expire within the next 9 months.
                          </p>
                          <div className="mt-2 flex items-center text-passport-500 text-sm">
                            <Clock className="h-4 w-4 mr-1" /> Processing time: 2-4 weeks
                          </div>
                          <Button className="mt-3 w-full" variant="outline" size="sm">
                            Select <ChevronRight className="ml-1 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-3 text-passport-800">Other Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <Button
                        onClick={() => handleServiceSelection("Lost Passport")}
                        variant="outline"
                        className="justify-start h-auto py-3"
                      >
                        Replace Lost/Stolen Passport
                      </Button>
                      <Button
                        onClick={() => handleServiceSelection("Name Change")}
                        variant="outline"
                        className="justify-start h-auto py-3"
                      >
                        Passport Name Change
                      </Button>
                      <Button
                        onClick={() => handleServiceSelection("Emergency")}
                        variant="outline"
                        className="justify-start h-auto py-3"
                      >
                        Emergency/Expedited Service
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-passport-900">{selectedService} Application</h2>
                <Button
                  variant="outline"
                  onClick={handleBackToServices}
                  className="text-passport-600"
                >
                  Change Service Type
                </Button>
              </div>
              
              <div className="mb-8">
                <div className="p-4 bg-passport-50 rounded-md border border-passport-100 mb-6">
                  <h3 className="font-medium text-passport-800 mb-2">Next Steps</h3>
                  <p className="text-passport-600">
                    Please schedule an appointment for your {selectedService.toLowerCase()} service. 
                    You'll need to bring all required documents to your appointment.
                  </p>
                </div>
                
                <AppointmentBooking initialAppointmentType={appointmentType} />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
