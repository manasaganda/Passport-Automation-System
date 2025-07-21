
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Clock,
  FileText,
  AlertCircle,
  Plus,
  ChevronRight,
  Download,
  Calendar,
  MessageSquare,
  User
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";

const UserDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("applications");
  
  // Mock data for the dashboard
  const applications = [
    {
      id: "PA12345",
      type: "New Passport",
      status: "processing",
      progress: 60,
      submittedDate: "2023-05-15",
      estimatedCompletion: "2023-05-30",
      lastUpdate: "2023-05-18",
    },
    {
      id: "PA67890",
      type: "Passport Renewal",
      status: "review",
      progress: 30,
      submittedDate: "2023-05-10",
      estimatedCompletion: "2023-05-25",
      lastUpdate: "2023-05-12",
    },
    {
      id: "PA24680",
      type: "Child Passport",
      status: "approved",
      progress: 100,
      submittedDate: "2023-04-20",
      estimatedCompletion: "2023-05-05",
      lastUpdate: "2023-05-03",
    }
  ];

  const appointments = [
    {
      id: "APT12345",
      type: "Document Verification",
      date: "2023-05-22",
      time: "10:30 AM",
      location: "San Francisco Passport Office",
      status: "upcoming"
    },
    {
      id: "APT67890",
      type: "Photo Submission",
      date: "2023-05-18",
      time: "2:15 PM",
      location: "Online Submission",
      status: "completed"
    }
  ];

  const messages = [
    {
      id: "MSG12345",
      title: "Application Update",
      date: "2023-05-18",
      read: true,
      content: "Your application PA12345 has moved to processing. We'll notify you when it's ready."
    },
    {
      id: "MSG67890",
      title: "Additional Documents Required",
      date: "2023-05-17",
      read: false,
      content: "Please submit a clearer copy of your identification document for application PA67890."
    },
    {
      id: "MSG24680",
      title: "Application Approved",
      date: "2023-05-03",
      read: true,
      content: "Your application PA24680 has been approved. Your passport will be delivered within 5-7 business days."
    }
  ];

  // Helper function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <FileText className="h-5 w-5 text-passport-500" />;
      case "review":
        return <FileText className="h-5 w-5 text-yellow-500" />;
      case "processing":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "approved":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "ready":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "rejected":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "upcoming":
        return <Calendar className="h-5 w-5 text-passport-500" />;
      default:
        return <FileText className="h-5 w-5 text-passport-500" />;
    }
  };

  const handleDownload = (id: string) => {
    toast({
      title: "Document Downloaded",
      description: `Receipt for application ${id} has been downloaded.`,
    });
  };

  const handleMessageRead = (id: string) => {
    toast({
      title: "Message Marked as Read",
      description: `Message ${id} has been marked as read.`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-passport-900 mb-1">Welcome, John Smith</h1>
        <p className="text-passport-600">Manage your passport applications and appointments from your personal dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-passport-50 border-passport-200">
          <CardContent className="p-4 flex items-center">
            <div className="bg-passport-100 rounded-full p-3 mr-4">
              <FileText className="h-6 w-6 text-passport-600" />
            </div>
            <div>
              <div className="text-sm text-passport-600">Applications</div>
              <div className="font-semibold text-2xl text-passport-900">3</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-passport-50 border-passport-200">
          <CardContent className="p-4 flex items-center">
            <div className="bg-passport-100 rounded-full p-3 mr-4">
              <Calendar className="h-6 w-6 text-passport-600" />
            </div>
            <div>
              <div className="text-sm text-passport-600">Appointments</div>
              <div className="font-semibold text-2xl text-passport-900">1</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-passport-50 border-passport-200">
          <CardContent className="p-4 flex items-center">
            <div className="bg-passport-100 rounded-full p-3 mr-4">
              <MessageSquare className="h-6 w-6 text-passport-600" />
            </div>
            <div>
              <div className="text-sm text-passport-600">Messages</div>
              <div className="font-semibold text-2xl text-passport-900">3</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-passport-50 border-passport-200">
          <CardContent className="p-4 flex items-center">
            <div className="bg-passport-100 rounded-full p-3 mr-4">
              <User className="h-6 w-6 text-passport-600" />
            </div>
            <div>
              <div className="text-sm text-passport-600">Profile</div>
              <div className="font-semibold text-sm text-passport-500">View Details</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="applications" className="space-y-4" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="applications" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-passport-800">My Applications</h2>
            <Button asChild size="sm">
              <Link to="/apply">
                <Plus className="h-4 w-4 mr-1" /> New Application
              </Link>
            </Button>
          </div>

          {applications.map((app) => (
            <Card key={app.id} className="application-card hover:bg-gray-50">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-3 md:mb-0">
                    {getStatusIcon(app.status)}
                    <div className="ml-3">
                      <h3 className="font-semibold text-passport-800">{app.type}</h3>
                      <div className="text-sm text-passport-600">Application ID: {app.id}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right mr-4">
                      <div className="text-sm font-medium">
                        {app.status === 'approved' ? 'Approved' : 
                         app.status === 'processing' ? 'Processing' : 
                         app.status === 'review' ? 'Under Review' : 'Submitted'}
                      </div>
                      <div className="text-xs text-passport-500">Updated: {app.lastUpdate}</div>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/applications/${app.id}`}>
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Progress</span>
                    <span>{app.progress}%</span>
                  </div>
                  <Progress value={app.progress} className="h-1" />
                </div>
                <div className="mt-3 flex justify-between text-xs text-passport-500">
                  <span>Submitted: {app.submittedDate}</span>
                  <span>Est. Completion: {app.estimatedCompletion}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="appointments" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-passport-800">My Appointments</h2>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-1" /> Schedule Appointment
            </Button>
          </div>

          {appointments.map((apt) => (
            <Card key={apt.id} className="hover:bg-gray-50">
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-3 md:mb-0">
                    {getStatusIcon(apt.status)}
                    <div className="ml-3">
                      <h3 className="font-semibold text-passport-800">{apt.type}</h3>
                      <div className="text-sm text-passport-600">Appointment ID: {apt.id}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-right mr-4">
                      <div className="text-sm font-medium">
                        {apt.date} at {apt.time}
                      </div>
                      <div className="text-xs text-passport-500">{apt.location}</div>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/appointments/${apt.id}`}>
                        <ChevronRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="mt-3">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${
                    apt.status === 'upcoming' ? 'bg-passport-100 text-passport-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {apt.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <h2 className="text-xl font-semibold text-passport-800 mb-4">My Messages</h2>
          
          {messages.map((msg) => (
            <Card key={msg.id} className={`hover:bg-gray-50 ${!msg.read && 'border-l-4 border-l-passport-500'}`}>
              <CardContent className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-3 md:mb-0">
                    <MessageSquare className={`h-5 w-5 ${msg.read ? 'text-passport-400' : 'text-passport-600'}`} />
                    <div className="ml-3">
                      <h3 className={`font-semibold ${msg.read ? 'text-passport-700' : 'text-passport-900'}`}>{msg.title}</h3>
                      <div className="text-sm text-passport-500">{msg.date}</div>
                    </div>
                  </div>
                  <div>
                    {!msg.read && (
                      <Button variant="outline" size="sm" onClick={() => handleMessageRead(msg.id)}>
                        Mark as Read
                      </Button>
                    )}
                  </div>
                </div>
                <div className="mt-3 text-passport-600">
                  {msg.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <h2 className="text-xl font-semibold text-passport-800 mb-4">My Documents</h2>
          
          <Card className="hover:bg-gray-50">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-3 md:mb-0">
                  <FileText className="h-5 w-5 text-passport-500" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-passport-800">Application Receipt - PA12345</h3>
                    <div className="text-sm text-passport-600">Uploaded on: 2023-05-15</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleDownload("PA12345")}>
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:bg-gray-50">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-3 md:mb-0">
                  <FileText className="h-5 w-5 text-passport-500" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-passport-800">Application Receipt - PA67890</h3>
                    <div className="text-sm text-passport-600">Uploaded on: 2023-05-10</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleDownload("PA67890")}>
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:bg-gray-50">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-3 md:mb-0">
                  <FileText className="h-5 w-5 text-passport-500" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-passport-800">Passport Photo</h3>
                    <div className="text-sm text-passport-600">Uploaded on: 2023-05-12</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleDownload("photo")}>
                  <Download className="h-4 w-4 mr-1" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDashboard;
