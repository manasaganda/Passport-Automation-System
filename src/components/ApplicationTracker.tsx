
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, AlertCircle, Clock, FileSearch, FileCheck, Send } from "lucide-react";

const ApplicationTracker = () => {
  const [applicationId, setApplicationId] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [applicationData, setApplicationData] = useState<null | {
    id: string;
    status: "submitted" | "review" | "processing" | "approved" | "ready" | "rejected";
    applicant: string;
    type: string;
    submittedDate: string;
    estimatedCompletion: string;
    progress: number;
    currentStep: string;
    nextStep?: string;
  }>(null);

  const { toast } = useToast();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!applicationId || !email) {
      toast({
        title: "Missing information",
        description: "Please enter both application ID and email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      // Mock data - in a real app this would come from an API
      if (applicationId === "PA12345" && email === "demo@example.com") {
        setApplicationData({
          id: "PA12345",
          status: "processing",
          applicant: "John Smith",
          type: "New Passport",
          submittedDate: "2023-05-15",
          estimatedCompletion: "2023-05-30",
          progress: 60,
          currentStep: "Background verification",
          nextStep: "Quality control review"
        });
      } else {
        toast({
          title: "Application not found",
          description: "We couldn't find an application with the provided ID and email.",
          variant: "destructive",
        });
      }
      
      setLoading(false);
    }, 1500);
  };

  // Helper function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <Send className="h-5 w-5 text-passport-500" />;
      case "review":
        return <FileSearch className="h-5 w-5 text-passport-500" />;
      case "processing":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "ready":
        return <FileCheck className="h-5 w-5 text-green-600" />;
      case "rejected":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  // Helper function to get status text
  const getStatusText = (status: string) => {
    switch (status) {
      case "submitted":
        return "Application Submitted";
      case "review":
        return "Under Review";
      case "processing":
        return "Processing";
      case "approved":
        return "Approved";
      case "ready":
        return "Ready for Pickup";
      case "rejected":
        return "Rejected";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-passport-900 mb-6">Track Your Passport Application</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Application Tracker</CardTitle>
              <CardDescription>
                Enter your application ID and email to check the current status of your passport application.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrack} className="space-y-4">
                <div>
                  <label htmlFor="applicationId" className="block text-sm font-medium text-passport-700 mb-1">
                    Application ID
                  </label>
                  <Input
                    id="applicationId"
                    placeholder="e.g., PA12345"
                    value={applicationId}
                    onChange={(e) => setApplicationId(e.target.value)}
                    required
                  />
                  <p className="text-xs text-passport-500 mt-1">
                    Your application ID was provided in your confirmation email
                  </p>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-passport-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter the email used for application"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Searching..." : "Track Application"}
                </Button>

                <div className="text-center text-xs text-passport-500">
                  For demo purposes, use Application ID: PA12345 and Email: demo@example.com
                </div>
              </form>
            </CardContent>
          </Card>

          {applicationData && (
            <Card className="mt-8 border-t-4 border-t-passport-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    {getStatusIcon(applicationData.status)}
                    <span className="ml-2">Application Status</span>
                  </CardTitle>
                  <span className="bg-passport-100 text-passport-800 text-sm py-1 px-3 rounded-full">
                    {getStatusText(applicationData.status)}
                  </span>
                </div>
                <CardDescription>
                  Application ID: <span className="font-medium">{applicationData.id}</span> | 
                  Submitted on: <span className="font-medium">{applicationData.submittedDate}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{applicationData.progress}%</span>
                  </div>
                  <Progress value={applicationData.progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-passport-500 mb-1">Applicant</p>
                    <p className="font-medium">{applicationData.applicant}</p>
                  </div>
                  <div>
                    <p className="text-passport-500 mb-1">Application Type</p>
                    <p className="font-medium">{applicationData.type}</p>
                  </div>
                  <div>
                    <p className="text-passport-500 mb-1">Current Step</p>
                    <p className="font-medium">{applicationData.currentStep}</p>
                  </div>
                  <div>
                    <p className="text-passport-500 mb-1">Estimated Completion</p>
                    <p className="font-medium">{applicationData.estimatedCompletion}</p>
                  </div>
                </div>
                
                {applicationData.nextStep && (
                  <div className="bg-passport-50 p-4 rounded-md">
                    <p className="text-passport-700 font-medium">Next Step:</p>
                    <p className="text-passport-600">{applicationData.nextStep}</p>
                  </div>
                )}
                
                <div className="text-center pt-2">
                  <Button variant="outline" className="text-passport-600">
                    View Detailed Timeline
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracker;
