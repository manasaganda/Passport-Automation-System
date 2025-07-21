
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCcw, Clock, FileWarning, UserPlus, FileSearch } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "New Passport",
      description: "Apply for your first passport quickly and easily with our streamlined application process.",
      icon: <UserPlus className="h-8 w-8 text-passport-500" />,
      link: "/services/new-passport"
    },
    {
      title: "Passport Renewal",
      description: "Renew your current or expired passport with minimal paperwork and fast processing.",
      icon: <RefreshCcw className="h-8 w-8 text-passport-500" />,
      link: "/services/renewal"
    },
    {
      title: "Expedited Service",
      description: "Need your passport urgently? Get expedited processing in as little as 24-48 hours.",
      icon: <Clock className="h-8 w-8 text-passport-500" />,
      link: "/services/expedited"
    },
    {
      title: "Lost or Stolen",
      description: "Quick replacement for lost, stolen, or damaged passports to get you back on track.",
      icon: <FileWarning className="h-8 w-8 text-passport-500" />,
      link: "/services/lost"
    },
    {
      title: "Child Passport",
      description: "Special handling for minors under 16, ensuring proper documentation and parental consent.",
      icon: <UserPlus className="h-8 w-8 text-passport-500" />,
      link: "/services/child"
    },
    {
      title: "Application Status",
      description: "Track your application in real-time with our advanced tracking system.",
      icon: <FileSearch className="h-8 w-8 text-passport-500" />,
      link: "/track"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-passport-900 mb-4">Our Passport Services</h2>
          <p className="text-lg text-passport-700 max-w-2xl mx-auto">
            Choose the service that best fits your needs and let us handle the paperwork and processing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:border-passport-400 hover:shadow-md transition-all">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="text-passport-600 hover:text-passport-800 hover:bg-passport-50 p-0">
                  <Link to={service.link} className="flex items-center">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
