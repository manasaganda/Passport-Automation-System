
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      setLoading(false);
    }, 1500);
  };

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8 text-passport-500" />,
      title: "Call Us",
      details: "(555) 123-4567",
      note: "Monday-Friday, 9AM-6PM ET"
    },
    {
      icon: <Mail className="h-8 w-8 text-passport-500" />,
      title: "Email Us",
      details: "support@passportpanda.com",
      note: "We usually respond within 24 hours"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-passport-500" />,
      title: "Live Chat",
      details: "Chat with an expert",
      note: "Available during business hours"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-passport-500 to-passport-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Need help with your passport application? Our expert team is ready to assist you.
            </p>
          </div>
        </div>
        
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name*</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address*</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject*</Label>
                          <Select 
                            value={formData.subject} 
                            onValueChange={(value) => handleSelectChange("subject", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="application">Application Help</SelectItem>
                              <SelectItem value="tracking">Application Tracking</SelectItem>
                              <SelectItem value="requirements">Document Requirements</SelectItem>
                              <SelectItem value="expedited">Expedited Service</SelectItem>
                              <SelectItem value="billing">Billing Question</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message*</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          rows={5}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>
                      Choose the most convenient way to contact our team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-passport-50 p-3 rounded-full mr-4">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-passport-800">{method.title}</h3>
                          <p className="text-passport-600 font-medium">{method.details}</p>
                          <p className="text-sm text-passport-500">{method.note}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Office Hours</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {officeHours.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium text-passport-800">{item.day}</span>
                          <span className="text-passport-600">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white">
                  <CardHeader>
                    <CardTitle>Visit Our Office</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex">
                      <MapPin className="h-5 w-5 text-passport-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-passport-800">1234 Passport Lane</p>
                        <p className="text-passport-800">Suite 567</p>
                        <p className="text-passport-800">San Francisco, CA 94103</p>
                      </div>
                    </div>
                    <div className="flex">
                      <Clock className="h-5 w-5 text-passport-500 mr-2 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-passport-800">By appointment only</p>
                        <p className="text-sm text-passport-600">Please schedule in advance</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>
                    Quick answers to common queries before you contact us.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-passport-800 mb-2">What are your processing times?</h3>
                    <p className="text-passport-600">
                      Standard processing takes 4-6 weeks. Expedited service reduces this to 2-3 weeks. 
                      For urgent travel within 14 days, we offer emergency services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-passport-800 mb-2">How do I track my application?</h3>
                    <p className="text-passport-600">
                      You can track your application using your application ID and email address 
                      on our tracking page. Real-time updates are provided at each stage.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-passport-800 mb-2">Do you offer refunds?</h3>
                    <p className="text-passport-600">
                      Refunds are available if requested before your application is submitted to the 
                      government. A processing fee may apply to all refunds.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-passport-800 mb-2">What if my application is rejected?</h3>
                    <p className="text-passport-600">
                      If your application is rejected, we'll notify you immediately and assist with 
                      correcting any issues for resubmission at no additional service charge.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
