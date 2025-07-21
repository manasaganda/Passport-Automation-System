
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-passport-500 to-passport-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Streamlined Passport Services Made Simple
            </h1>
            <p className="text-lg text-passport-50">
              Fast, reliable passport application processing with real-time tracking and expert support.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-passport-200" />
                <span>100% online application process</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-passport-200" />
                <span>Real-time application status tracking</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-passport-200" />
                <span>Expert guidance throughout the process</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button asChild size="lg" className="bg-white text-passport-600 hover:bg-passport-50">
                <Link to="/register">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services" className="flex items-center">
                  View Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:block">
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-passport-500 text-white p-2 rounded">
                    <span className="font-bold">PP</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">United States of America</div>
                    <div className="font-semibold text-passport-800">Passport</div>
                  </div>
                </div>
                
                <div className="border-t border-b border-gray-200 py-4 my-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500">Status</div>
                      <div className="font-medium text-green-600">Approved</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Processing Time</div>
                      <div className="font-medium">5-7 days</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Application ID</div>
                      <div className="font-medium">PA-583921</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Expires</div>
                      <div className="font-medium">Jun 15, 2033</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <div className="bg-gray-100 text-passport-800 text-center py-2 px-4 rounded w-full">
                    Ready for pickup at your selected location
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-passport-100 p-4 rounded-lg shadow-md transform rotate-6 hidden md:block">
                <div className="font-medium text-passport-800">Application Tracking</div>
                <div className="text-sm text-passport-600">Status: Processing</div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-passport-500 h-2 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
