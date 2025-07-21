
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { AppointmentType } from "./appointment/types";
import StepIndicator from "./appointment/StepIndicator";
import ServiceAndLocationStep from "./appointment/ServiceAndLocationStep";
import DateAndTimeStep from "./appointment/DateAndTimeStep";
import ConfirmationStep from "./appointment/ConfirmationStep";

const steps = [
  { id: 1, label: "Service & Location" },
  { id: 2, label: "Date & Time" },
  { id: 3, label: "Confirmation" },
];

interface AppointmentBookingProps {
  initialAppointmentType?: AppointmentType | "";
}

const AppointmentBooking = ({ initialAppointmentType = "" }: AppointmentBookingProps) => {
  const [appointmentType, setAppointmentType] = useState<AppointmentType | "">(initialAppointmentType);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [timeSlot, setTimeSlot] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  // Update appointmentType when the initialAppointmentType prop changes
  useEffect(() => {
    if (initialAppointmentType && initialAppointmentType !== appointmentType) {
      setAppointmentType(initialAppointmentType);
    }
  }, [initialAppointmentType]);

  const handleContinue = () => {
    if (step === 1) {
      if (!appointmentType || !location) {
        toast({
          title: "Missing information",
          description: "Please select both appointment type and location.",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!date || !timeSlot) {
        toast({
          title: "Missing information",
          description: "Please select both date and time slot.",
          variant: "destructive",
        });
        return;
      }
      setStep(3);
    }
  };

  const handleBooking = () => {
    if (!appointmentType || !location || !date || !timeSlot) {
      toast({
        title: "Missing information",
        description: "Please fill in all required information.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Appointment Booked!",
        description: `Your appointment has been scheduled for ${date.toLocaleDateString()} at ${timeSlot}.`,
      });
      setIsLoading(false);
      
      // Reset form
      setAppointmentType("");
      setLocation("");
      setDate(undefined);
      setTimeSlot("");
      setStep(1);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Book Your Appointment</CardTitle>
          <CardDescription>
            Schedule an appointment for your passport application process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <StepIndicator currentStep={step} steps={steps} />

          {step === 1 && (
            <ServiceAndLocationStep 
              appointmentType={appointmentType}
              setAppointmentType={setAppointmentType as (value: AppointmentType) => void}
              location={location}
              setLocation={setLocation}
            />
          )}

          {step === 2 && (
            <DateAndTimeStep 
              date={date}
              setDate={setDate}
              timeSlot={timeSlot}
              setTimeSlot={setTimeSlot}
            />
          )}

          {step === 3 && (
            <ConfirmationStep 
              appointmentType={appointmentType}
              location={location}
              date={date}
              timeSlot={timeSlot}
            />
          )}
        </CardContent>

        <CardFooter className="flex justify-between border-t pt-6">
          {step > 1 ? (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          
          {step < 3 ? (
            <Button onClick={handleContinue}>
              Continue
            </Button>
          ) : (
            <Button onClick={handleBooking} disabled={isLoading}>
              {isLoading ? "Booking..." : "Confirm Appointment"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default AppointmentBooking;
