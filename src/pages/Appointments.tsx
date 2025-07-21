
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AppointmentBooking from "@/components/AppointmentBooking";

const Appointments = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-passport-900 mb-2">Schedule an Appointment</h1>
            <p className="text-lg text-passport-600 max-w-2xl mx-auto">
              Book an in-person appointment for document submission, biometric capture, or passport pickup.
            </p>
          </div>
          
          <AppointmentBooking />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointments;
