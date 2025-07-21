
import { CheckCircle2 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      title: "Create an Account",
      description: "Sign up for a free account to begin the passport application process."
    },
    {
      number: 2,
      title: "Fill Application Form",
      description: "Complete our user-friendly online application with step-by-step guidance."
    },
    {
      number: 3,
      title: "Upload Documents",
      description: "Submit required documents and photos through our secure upload system."
    },
    {
      number: 4,
      title: "Pay Fees",
      description: "Make a secure payment for government and service fees using various payment methods."
    },
    {
      number: 5,
      title: "Track Progress",
      description: "Monitor your application status in real-time through your personal dashboard."
    },
    {
      number: 6,
      title: "Receive Passport",
      description: "Get your passport delivered to your door or pick up at your chosen location."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-passport-900 mb-4">How It Works</h2>
          <p className="text-lg text-passport-700 max-w-2xl mx-auto">
            Our simple six-step process makes getting your passport faster and easier than ever before.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 relative">
                <div className="absolute -top-3 -left-3 bg-passport-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-passport-800 mb-3 mt-2">{step.title}</h3>
                <p className="text-passport-600">{step.description}</p>
                <CheckCircle2 className="h-6 w-6 text-green-500 absolute bottom-4 right-4" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-passport-700 mb-2">All applications are processed securely and in compliance with federal regulations.</p>
          <p className="text-sm text-passport-500">* Processing times vary by service type and current government workload.</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
