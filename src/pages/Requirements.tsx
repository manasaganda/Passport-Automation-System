
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Download, AlertTriangle, Info, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Requirements = () => {
  const newPassportReqs = [
    {
      title: "Form DS-11",
      description: "Application for a U.S. Passport",
      note: "Must be completed online or filled out in black ink."
    },
    {
      title: "Proof of U.S. Citizenship",
      description: "Original or certified copy of birth certificate, Consular Report of Birth Abroad, or Certificate of Citizenship/Naturalization.",
      note: "Photocopies and notarized copies are not acceptable."
    },
    {
      title: "Government-issued Photo ID",
      description: "Valid driver's license, current government ID, or military ID.",
      note: "Both front and back must be copied on 8.5 x 11\" paper."
    },
    {
      title: "Color Photograph",
      description: "2x2 inches (51x51 mm) in size, taken within the last 6 months.",
      note: "Must meet all passport photo requirements regarding background, attire, and pose."
    },
    {
      title: "Fees Payment",
      description: "Application fee plus execution fee, paid separately.",
      note: "Check current fee structure as they are subject to change."
    }
  ];

  const renewalReqs = [
    {
      title: "Form DS-82",
      description: "Application for a U.S. Passport by Mail",
      note: "You must be eligible to use Form DS-82. Not all renewals qualify."
    },
    {
      title: "Most Recent U.S. Passport",
      description: "Must be undamaged and submitted with your application.",
      note: "Must have been issued within the last 15 years when you were 16 or older."
    },
    {
      title: "Name Change Documents (if applicable)",
      description: "Marriage certificate, divorce decree, or court order.",
      note: "Required if your current name differs from the name on your most recent passport."
    },
    {
      title: "Color Photograph",
      description: "2x2 inches (51x51 mm) in size, taken within the last 6 months.",
      note: "Must meet all passport photo requirements."
    },
    {
      title: "Fees Payment",
      description: "Application fee (execution fee not required for renewals).",
      note: "Check current fee structure as they are subject to change."
    }
  ];

  const childReqs = [
    {
      title: "Form DS-11",
      description: "Application for a U.S. Passport",
      note: "Must be completed online or filled out in black ink."
    },
    {
      title: "Child's Proof of U.S. Citizenship",
      description: "Original birth certificate with both parents' names, Consular Report of Birth Abroad, or Certificate of Citizenship.",
      note: "Hospital-issued birth certificates are not acceptable."
    },
    {
      title: "Parents' Government-issued Photo ID",
      description: "Both parents must present valid ID.",
      note: "Copies of front and back required on separate 8.5 x 11\" paper."
    },
    {
      title: "Parental Consent",
      description: "Both parents/guardians must appear and sign in person.",
      note: "If one parent cannot appear, Form DS-3053 must be submitted with a notarized statement."
    },
    {
      title: "Child's Color Photograph",
      description: "2x2 inches (51x51 mm) in size, taken within the last 6 months.",
      note: "Special considerations for infant photos are available."
    },
    {
      title: "Fees Payment",
      description: "Application fee plus execution fee, paid separately.",
      note: "Check current fee structure as fees are different for children under 16."
    }
  ];

  const photoReqs = [
    {
      title: "Size and Format",
      description: "2x2 inches (51x51 mm) color photograph with a white or off-white background.",
      note: "Head must be between 1-1 3/8 inches from the bottom of the chin to the top of the head."
    },
    {
      title: "Recent Image",
      description: "Taken within the last 6 months to reflect your current appearance.",
      note: "Must be clear, sharp, not blurry, grainy, or pixelated."
    },
    {
      title: "Attire and Appearance",
      description: "Everyday clothing, no uniforms or camouflage attire.",
      note: "No hats or head coverings unless worn for religious purposes with a signed statement."
    },
    {
      title: "Facial Expression",
      description: "Natural expression or neutral smile with both eyes open.",
      note: "Face must be fully visible, looking straight at the camera."
    },
    {
      title: "Glasses",
      description: "No glasses in passport photos.",
      note: "Exception only with a signed doctor's statement that glasses cannot be removed."
    },
    {
      title: "Digital Alterations",
      description: "No digital modifications or enhancements.",
      note: "Photos must represent your natural appearance."
    }
  ];

  const commonQuestions = [
    {
      question: "How long does it take to get a passport?",
      answer: "Standard processing time is approximately 6-8 weeks from the date of application. Expedited service (for an additional fee) can reduce this to 2-3 weeks. For urgent travel within 14 days, you may qualify for an appointment at a Passport Agency."
    },
    {
      question: "What's the difference between a passport book and passport card?",
      answer: "A passport book is valid for all international travel by air, sea, or land. A passport card is only valid for land and sea travel to Canada, Mexico, Bermuda, and the Caribbean. It cannot be used for international air travel. The passport card is less expensive than a passport book."
    },
    {
      question: "How long is a passport valid?",
      answer: "For adults (16 and older), passports are valid for 10 years from the date of issue. For children under 16, passports are valid for 5 years from the date of issue."
    },
    {
      question: "Do I need to renew my passport before it expires?",
      answer: "It's recommended to renew your passport approximately 9 months before it expires. Many countries require that your passport be valid for at least 6 months beyond your dates of travel, so an expiring passport could prevent you from traveling even before it actually expires."
    },
    {
      question: "Can I expedite my passport application?",
      answer: "Yes, for an additional fee, you can request expedited processing. This typically reduces the processing time to 2-3 weeks. For even faster service in emergency situations, you may qualify for an appointment at a Passport Agency if you're traveling within 14 days."
    },
    {
      question: "Do both parents need to be present when a child applies for a passport?",
      answer: "Yes, for applicants under 16, both parents/guardians must appear and sign in person. If one parent cannot appear, Form DS-3053 must be submitted with a notarized statement from the absent parent. In cases where one parent has sole custody, proper documentation must be provided."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-passport-500 to-passport-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Passport Requirements</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Everything you need to know about passport application requirements and documentation.
            </p>
          </div>
        </div>
        
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex items-start mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-passport-800 mb-1">Important Notice</h3>
                  <p className="text-passport-600">
                    Requirements and processing times may vary based on current government policies. We strongly 
                    recommend checking the official U.S. State Department website for the most up-to-date information.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Info className="h-6 w-6 text-passport-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-passport-800 mb-1">PassportPanda Advantage</h3>
                  <p className="text-passport-600">
                    Our service guides you through the application process, ensuring you have all the necessary 
                    documents and meet all requirements for a smooth processing experience.
                  </p>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="new" className="space-y-6">
              <TabsList className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                <TabsTrigger value="new">New Passport</TabsTrigger>
                <TabsTrigger value="renewal">Renewal</TabsTrigger>
                <TabsTrigger value="child">Child Passport</TabsTrigger>
                <TabsTrigger value="photo">Photo Requirements</TabsTrigger>
              </TabsList>
              
              <TabsContent value="new">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-passport-900">New Passport Requirements</h2>
                    <Button variant="outline" className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Download Checklist
                    </Button>
                  </div>
                  
                  <p className="text-passport-700">
                    First-time applicants must apply in person at a passport acceptance facility or passport agency. 
                    The following documents and information are required:
                  </p>
                  
                  <div className="space-y-4">
                    {newPassportReqs.map((req, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <CardTitle className="text-lg font-medium">{req.title}</CardTitle>
                          </div>
                          <CardDescription>{req.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                            <p className="text-sm text-yellow-800">{req.note}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-passport-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-passport-800 mb-4">Ready to apply for a new passport?</h3>
                    <p className="text-passport-700 mb-4">
                      Our service makes the process simple by guiding you through each step and ensuring your 
                      application meets all requirements.
                    </p>
                    <Button asChild>
                      <Link to="/apply">Start Your Application</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="renewal">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-passport-900">Passport Renewal Requirements</h2>
                    <Button variant="outline" className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Download Checklist
                    </Button>
                  </div>
                  
                  <p className="text-passport-700">
                    You can renew by mail using Form DS-82 if your most recent passport meets all the following conditions:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-passport-700">
                    <li>Is submitted with your application</li>
                    <li>Is undamaged (other than normal wear and tear)</li>
                    <li>Was issued when you were 16 years of age or older</li>
                    <li>Was issued within the last 15 years</li>
                    <li>Was issued in your current name or you can document your name change</li>
                  </ul>
                  
                  <p className="text-passport-700">
                    If you don't meet these criteria, you must apply in person using Form DS-11.
                  </p>
                  
                  <div className="space-y-4">
                    {renewalReqs.map((req, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <CardTitle className="text-lg font-medium">{req.title}</CardTitle>
                          </div>
                          <CardDescription>{req.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                            <p className="text-sm text-yellow-800">{req.note}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-passport-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-passport-800 mb-4">Ready to renew your passport?</h3>
                    <p className="text-passport-700 mb-4">
                      Our renewal service streamlines the process, helping you avoid common mistakes that could 
                      delay your application.
                    </p>
                    <Button asChild>
                      <Link to="/services/renewal">Start Your Renewal</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="child">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-passport-900">Child Passport Requirements</h2>
                    <Button variant="outline" className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Download Checklist
                    </Button>
                  </div>
                  
                  <p className="text-passport-700">
                    For minors under 16 years of age, both parents/guardians must appear in person with the child 
                    when applying for a passport. Special documentation requirements apply:
                  </p>
                  
                  <div className="space-y-4">
                    {childReqs.map((req, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <CardTitle className="text-lg font-medium">{req.title}</CardTitle>
                          </div>
                          <CardDescription>{req.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                            <p className="text-sm text-yellow-800">{req.note}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                    <h3 className="font-medium text-yellow-800 mb-1">Special Circumstances</h3>
                    <p className="text-yellow-800">
                      If one parent/guardian cannot appear in person, additional documentation is required. 
                      For sole custody situations, legal documentation demonstrating custody must be provided.
                    </p>
                  </div>
                  
                  <div className="bg-passport-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-passport-800 mb-4">Ready to apply for your child's passport?</h3>
                    <p className="text-passport-700 mb-4">
                      Our child passport service helps navigate the special requirements for minors, ensuring a 
                      smooth application process for both parents and children.
                    </p>
                    <Button asChild>
                      <Link to="/services/child">Start Child Application</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="photo">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-passport-900">Passport Photo Requirements</h2>
                    <Button variant="outline" className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" /> Download Guide
                    </Button>
                  </div>
                  
                  <p className="text-passport-700 mb-6">
                    Passport photos must meet strict requirements to be accepted. Below are the key specifications:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-passport-50 p-4">
                        <h3 className="font-medium text-passport-800">Acceptable Photo</h3>
                      </div>
                      <div className="p-4 flex justify-center">
                        <div className="border-2 border-green-500 p-1">
                          <div className="bg-white w-32 h-40 flex items-center justify-center text-center text-passport-500">
                            [Acceptable Photo Example]
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-50 p-3 flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-green-800 text-sm">Meets all requirements</span>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-passport-50 p-4">
                        <h3 className="font-medium text-passport-800">Common Errors</h3>
                      </div>
                      <div className="p-4 flex justify-center">
                        <div className="border-2 border-red-500 p-1">
                          <div className="bg-white w-32 h-40 flex items-center justify-center text-center text-passport-500">
                            [Problematic Photo Example]
                          </div>
                        </div>
                      </div>
                      <div className="bg-red-50 p-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                        <span className="text-red-800 text-sm">Does not meet requirements</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {photoReqs.map((req, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardHeader className="pb-2">
                          <div className="flex items-center">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <CardTitle className="text-lg font-medium">{req.title}</CardTitle>
                          </div>
                          <CardDescription>{req.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                            <p className="text-sm text-yellow-800">{req.note}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="bg-passport-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-passport-800 mb-4">Need help with your passport photo?</h3>
                    <p className="text-passport-700 mb-4">
                      We offer professional passport photo services that guarantee acceptance. Save time and worry by 
                      ensuring your photo meets all requirements.
                    </p>
                    <Button asChild>
                      <Link to="/services">Explore Our Services</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-16">
              <h2 className="text-2xl font-semibold text-passport-900 mb-6">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {commonQuestions.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-left font-medium text-passport-800">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1 text-passport-700">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-8 text-center">
                <p className="text-passport-700 mb-4">
                  Can't find the answer you're looking for? Contact our passport experts for assistance.
                </p>
                <Button asChild variant="outline">
                  <Link to="/contact">Contact Support</Link>
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

export default Requirements;
