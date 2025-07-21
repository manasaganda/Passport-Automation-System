
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Shield } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-passport-600 to-passport-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Passport Experience?</h2>
          <p className="text-xl text-passport-100 mb-8">
            Join thousands of satisfied travelers who have used PassportPanda to streamline their passport application process.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button asChild size="lg" className="bg-white text-passport-700 hover:bg-passport-50">
              <Link to="/register">Get Started Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/services" className="flex items-center">
                Explore Services <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="flex">
              <div className="mr-4">
                <Clock className="h-10 w-10 text-passport-200" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                <p className="text-passport-100">
                  Our streamlined process eliminates confusing paperwork and long wait times. Most applications are completed in under 15 minutes.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <Shield className="h-10 w-10 text-passport-200" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Guaranteed Security</h3>
                <p className="text-passport-100">
                  Your personal information is protected with bank-level encryption and security measures. We take privacy seriously.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
