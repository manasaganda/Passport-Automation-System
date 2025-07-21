
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Clock, FileWarning, UserPlus, FileSearch, CheckCircle2, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      title: "New Passport",
      description: "For first-time applicants who have never had a U.S. passport.",
      icon: <UserPlus className="h-12 w-12 text-passport-500" />,
      features: [
        "Complete application processing",
        "Expert document review",
        "Identity verification",
        "Photo requirements check"
      ],
      price: "$140",
      processingTime: "4-6 weeks",
      expeditedTime: "2-3 weeks",
      link: "/services/new-passport"
    },
    {
      title: "Passport Renewal",
      description: "For those who already have or recently had a U.S. passport.",
      icon: <RefreshCcw className="h-12 w-12 text-passport-500" />,
      features: [
        "Simplified renewal process",
        "Previous passport verification",
        "No need for new citizenship proof",
        "Optional data transfer"
      ],
      price: "$110",
      processingTime: "4-6 weeks",
      expeditedTime: "2-3 weeks",
      link: "/services/renewal"
    },
    {
      title: "Expedited Service",
      description: "For travelers who need their passport in a hurry.",
      icon: <Clock className="h-12 w-12 text-passport-500" />,
      features: [
        "Priority processing",
        "Expedited government review",
        "Rush delivery options",
        "Application tracking"
      ],
      price: "+$60",
      processingTime: "2-3 weeks",
      expeditedTime: "5-7 business days",
      link: "/services/expedited",
      highlighted: true
    },
    {
      title: "Lost or Stolen",
      description: "For replacing a passport that was lost, stolen, or damaged.",
      icon: <FileWarning className="h-12 w-12 text-passport-500" />,
      features: [
        "Identity verification",
        "Police report assistance",
        "Previous passport invalidation",
        "Expedited options available"
      ],
      price: "$140",
      processingTime: "4-6 weeks",
      expeditedTime: "2-3 weeks",
      link: "/services/lost"
    },
    {
      title: "Child Passport",
      description: "For applicants under 16 years of age.",
      icon: <UserPlus className="h-12 w-12 text-passport-500" />,
      features: [
        "Parental consent verification",
        "Birth certificate processing",
        "Photo assistance for minors",
        "Special handling"
      ],
      price: "$115",
      processingTime: "4-6 weeks",
      expeditedTime: "2-3 weeks",
      link: "/services/child"
    },
    {
      title: "Application Status",
      description: "Check the current status of your submitted passport application.",
      icon: <FileSearch className="h-12 w-12 text-passport-500" />,
      features: [
        "Real-time status updates",
        "Timeline visualization",
        "Email notifications",
        "Delivery tracking"
      ],
      price: "Free",
      link: "/track"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-passport-500 to-passport-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Passport Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive passport solutions tailored to your needs with expert guidance every step of the way.
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className={`border ${service.highlighted ? 'border-passport-500 shadow-lg' : 'border-gray-200'}`}>
                  {service.highlighted && (
                    <div className="bg-passport-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-center mb-4">{service.icon}</div>
                    <CardTitle className="text-center text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-center">{service.description}</CardDescription>
                    {service.price && (
                      <div className="text-center mt-4">
                        <span className="text-2xl font-bold text-passport-800">{service.price}</span>
                        {service.price !== "Free" && <span className="text-passport-600 ml-1">+ govt. fees</span>}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent>
                    {service.features && (
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="h-5 w-5 text-passport-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {(service.processingTime || service.expeditedTime) && (
                      <div className="border-t border-gray-100 mt-4 pt-4">
                        {service.processingTime && (
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-passport-600">Standard Processing:</span>
                            <span className="font-medium">{service.processingTime}</span>
                          </div>
                        )}
                        {service.expeditedTime && (
                          <div className="flex justify-between text-sm">
                            <span className="text-passport-600">Expedited Processing:</span>
                            <span className="font-medium">{service.expeditedTime}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link to={service.link} className="flex items-center justify-center">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-passport-900 mb-4">Not Sure Which Service You Need?</h2>
              <p className="text-lg text-passport-700 mb-6">
                Our passport experts are ready to help you determine the best option for your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline" size="lg">
                  Contact Support
                </Button>
                <Button size="lg">
                  Take Our Quick Quiz
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
