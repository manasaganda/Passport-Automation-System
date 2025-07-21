
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight, Upload, CheckCircle } from "lucide-react";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    ssn: "",

    // Address
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",

    // Passport Details
    applicationType: "new",
    travelDate: "",
    previousPassport: false,
    previousPassportNumber: "",
    previousPassportIssueDate: "",
    previousPassportExpiryDate: "",

    // Emergency Contact
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",

    // Travel Plans
    travelPurpose: "",
    destinationCountries: "",
    departureDate: "",
    returnDate: "",

    // Document Upload
    photoUploaded: false,
    identificationUploaded: false,
    addressProofUploaded: false,
    citizenshipProofUploaded: false,

    // Terms and Review
    agreeTerms: false,
    agreeAccuracy: false,
  });

  // Steps information
  const steps = [
    { title: "Personal Information", fields: ["firstName", "lastName", "dateOfBirth", "gender", "email", "phone"] },
    { title: "Address", fields: ["streetAddress", "city", "state", "zipCode"] },
    { title: "Passport Details", fields: ["applicationType", "travelDate"] },
    { title: "Travel Information", fields: ["travelPurpose", "destinationCountries", "departureDate"] },
    { title: "Document Upload", fields: ["photoUploaded", "identificationUploaded"] },
    { title: "Review & Submit", fields: ["agreeTerms", "agreeAccuracy"] },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleFileUpload = (field: string) => {
    // Simulate file upload - in a real app this would handle actual file uploads
    setFormData({ ...formData, [field]: true });
    toast({
      title: "File Uploaded",
      description: "Your document has been uploaded successfully.",
    });
  };

  const nextStep = () => {
    // Validate current step
    const currentFields = steps[currentStep - 1].fields;
    const emptyRequiredFields = currentFields.filter(field => 
      !formData[field as keyof typeof formData] && 
      field !== "middleName" // middleName is optional
    );

    if (emptyRequiredFields.length > 0) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields before continuing.",
        variant: "destructive",
      });
      return;
    }

    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeTerms || !formData.agreeAccuracy) {
      toast({
        title: "Agreement Required",
        description: "You must agree to the terms and certify information accuracy.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Application Submitted!",
      description: "Your passport application has been successfully submitted.",
    });

    // In a real app, this would be an API call
    console.log("Application submitted", formData);
  };

  // Render form based on current step
  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-passport-800">Personal Information</h2>
            <p className="text-passport-600 mb-6">Please provide your basic personal information as it should appear on your passport.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="firstName">First Name*</Label>
                <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="middleName">Middle Name</Label>
                <Input id="middleName" name="middleName" value={formData.middleName} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name*</Label>
                <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth*</Label>
                <Input id="dateOfBirth" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleInputChange} required />
              </div>
              <div>
                <Label>Gender*</Label>
                <RadioGroup value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)} className="flex space-x-4 mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="cursor-pointer">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="cursor-pointer">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="cursor-pointer">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address*</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number*</Label>
                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} required />
              </div>
            </div>

            <div>
              <Label htmlFor="ssn">Social Security Number*</Label>
              <Input id="ssn" name="ssn" value={formData.ssn} onChange={handleInputChange} required />
              <p className="text-xs text-passport-500 mt-1">For identity verification purposes only</p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-passport-800">Address Information</h2>
            <p className="text-passport-600 mb-6">Please provide your current residential address.</p>
            
            <div>
              <Label htmlFor="streetAddress">Street Address*</Label>
              <Input id="streetAddress" name="streetAddress" value={formData.streetAddress} onChange={handleInputChange} required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City*</Label>
                <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="state">State/Province*</Label>
                <Select value={formData.state} onValueChange={(value) => handleSelectChange("state", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AL">Alabama</SelectItem>
                    <SelectItem value="AK">Alaska</SelectItem>
                    <SelectItem value="AZ">Arizona</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="CO">Colorado</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    {/* Add other states as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="zipCode">ZIP/Postal Code*</Label>
                <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="country">Country*</Label>
                <Input id="country" name="country" value={formData.country} onChange={handleInputChange} disabled />
                <p className="text-xs text-passport-500 mt-1">For international addresses, please contact support</p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-passport-800">Passport Details</h2>
            <p className="text-passport-600 mb-6">Please provide details about your passport application.</p>
            
            <div>
              <Label>Application Type*</Label>
              <RadioGroup value={formData.applicationType} onValueChange={(value) => handleSelectChange("applicationType", value)} className="space-y-3 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="new" id="new" />
                  <Label htmlFor="new" className="cursor-pointer">New Passport</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="renewal" id="renewal" />
                  <Label htmlFor="renewal" className="cursor-pointer">Passport Renewal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="replacement" id="replacement" />
                  <Label htmlFor="replacement" className="cursor-pointer">Lost/Stolen Replacement</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="child" id="child" />
                  <Label htmlFor="child" className="cursor-pointer">Child Passport (Under 16)</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="travelDate">When do you plan to travel?*</Label>
              <Input id="travelDate" name="travelDate" type="date" value={formData.travelDate} onChange={handleInputChange} required />
              <p className="text-xs text-passport-500 mt-1">This helps us prioritize your application if needed</p>
            </div>

            <div className="mt-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="previousPassport" 
                  checked={formData.previousPassport}
                  onCheckedChange={(checked) => handleCheckboxChange("previousPassport", checked === true)}
                />
                <Label htmlFor="previousPassport" className="cursor-pointer">I have had a passport before</Label>
              </div>
            </div>

            {formData.previousPassport && (
              <div className="space-y-4 mt-2 pl-6 border-l-2 border-passport-100">
                <div>
                  <Label htmlFor="previousPassportNumber">Previous Passport Number</Label>
                  <Input 
                    id="previousPassportNumber" 
                    name="previousPassportNumber" 
                    value={formData.previousPassportNumber} 
                    onChange={handleInputChange} 
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="previousPassportIssueDate">Issue Date</Label>
                    <Input 
                      id="previousPassportIssueDate" 
                      name="previousPassportIssueDate" 
                      type="date"
                      value={formData.previousPassportIssueDate} 
                      onChange={handleInputChange} 
                    />
                  </div>
                  <div>
                    <Label htmlFor="previousPassportExpiryDate">Expiry Date</Label>
                    <Input 
                      id="previousPassportExpiryDate" 
                      name="previousPassportExpiryDate" 
                      type="date"
                      value={formData.previousPassportExpiryDate} 
                      onChange={handleInputChange} 
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-passport-800">Travel Information</h2>
            <p className="text-passport-600 mb-6">Please provide details about your travel plans.</p>
            
            <div>
              <Label htmlFor="travelPurpose">Purpose of Travel*</Label>
              <Select value={formData.travelPurpose} onValueChange={(value) => handleSelectChange("travelPurpose", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tourism">Tourism</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="visiting_family">Visiting Family</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="destinationCountries">Countries You Plan to Visit*</Label>
              <Textarea 
                id="destinationCountries" 
                name="destinationCountries" 
                placeholder="List the countries you plan to visit"
                value={formData.destinationCountries} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departureDate">Estimated Departure Date*</Label>
                <Input id="departureDate" name="departureDate" type="date" value={formData.departureDate} onChange={handleInputChange} required />
              </div>
              <div>
                <Label htmlFor="returnDate">Estimated Return Date</Label>
                <Input id="returnDate" name="returnDate" type="date" value={formData.returnDate} onChange={handleInputChange} />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-passport-800 mb-2">Emergency Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="emergencyName">Full Name*</Label>
                  <Input id="emergencyName" name="emergencyName" value={formData.emergencyName} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="emergencyRelation">Relationship*</Label>
                  <Input id="emergencyRelation" name="emergencyRelation" value={formData.emergencyRelation} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="mt-4">
                <Label htmlFor="emergencyPhone">Phone Number*</Label>
                <Input id="emergencyPhone" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleInputChange} required />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-passport-800">Document Upload</h2>
            <p className="text-passport-600 mb-6">Please upload clear copies of all required documents.</p>
            
            <Card className={`border ${formData.photoUploaded ? 'border-green-500' : 'border-passport-200'}`}>
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-passport-800">Passport Photo</h3>
                  <p className="text-sm text-passport-600">2x2 inch (51x51 mm) color photo with white background</p>
                </div>
                {formData.photoUploaded ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-1" />
                    <span>Uploaded</span>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleFileUpload("photoUploaded")}>
                    <Upload className="h-4 w-4 mr-1" /> Upload
                  </Button>
                )}
              </CardContent>
            </Card>
            
            <Card className={`border ${formData.identificationUploaded ? 'border-green-500' : 'border-passport-200'}`}>
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-passport-800">Proof of Identity</h3>
                  <p className="text-sm text-passport-600">Driver's license, state ID, or other government-issued ID</p>
                </div>
                {formData.identificationUploaded ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-1" />
                    <span>Uploaded</span>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleFileUpload("identificationUploaded")}>
                    <Upload className="h-4 w-4 mr-1" /> Upload
                  </Button>
                )}
              </CardContent>
            </Card>
            
            <Card className={`border ${formData.addressProofUploaded ? 'border-green-500' : 'border-passport-200'}`}>
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-passport-800">Proof of Address</h3>
                  <p className="text-sm text-passport-600">Utility bill, bank statement, or official mail</p>
                </div>
                {formData.addressProofUploaded ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-1" />
                    <span>Uploaded</span>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleFileUpload("addressProofUploaded")}>
                    <Upload className="h-4 w-4 mr-1" /> Upload
                  </Button>
                )}
              </CardContent>
            </Card>
            
            <Card className={`border ${formData.citizenshipProofUploaded ? 'border-green-500' : 'border-passport-200'}`}>
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium text-passport-800">Proof of Citizenship</h3>
                  <p className="text-sm text-passport-600">Birth certificate, naturalization certificate, or certificate of citizenship</p>
                </div>
                {formData.citizenshipProofUploaded ? (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-5 w-5 mr-1" />
                    <span>Uploaded</span>
                  </div>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => handleFileUpload("citizenshipProofUploaded")}>
                    <Upload className="h-4 w-4 mr-1" /> Upload
                  </Button>
                )}
              </CardContent>
            </Card>
            
            <div className="text-sm text-passport-600">
              <p>All documents must be:</p>
              <ul className="list-disc pl-5 mt-1">
                <li>Clear and legible</li>
                <li>Complete (not cropped or partial)</li>
                <li>In JPEG, PNG, or PDF format</li>
                <li>Less than 10MB in size</li>
              </ul>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-passport-800">Review & Submit</h2>
            <p className="text-passport-600 mb-6">Please review your application details before submitting.</p>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium text-passport-800 mb-2">Personal Information</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-passport-500">Full Name:</div>
                    <div className="font-medium">{`${formData.firstName} ${formData.middleName} ${formData.lastName}`}</div>
                    
                    <div className="text-passport-500">Date of Birth:</div>
                    <div className="font-medium">{formData.dateOfBirth}</div>
                    
                    <div className="text-passport-500">Gender:</div>
                    <div className="font-medium">{formData.gender}</div>
                    
                    <div className="text-passport-500">Email:</div>
                    <div className="font-medium">{formData.email}</div>
                    
                    <div className="text-passport-500">Phone:</div>
                    <div className="font-medium">{formData.phone}</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium text-passport-800 mb-2">Address</h3>
                  <div className="grid grid-cols-1 gap-1 text-sm">
                    <div className="font-medium">{formData.streetAddress}</div>
                    <div className="font-medium">{`${formData.city}, ${formData.state} ${formData.zipCode}`}</div>
                    <div className="font-medium">{formData.country}</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium text-passport-800 mb-2">Passport Details</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-passport-500">Application Type:</div>
                    <div className="font-medium">{
                      formData.applicationType === "new" ? "New Passport" : 
                      formData.applicationType === "renewal" ? "Passport Renewal" :
                      formData.applicationType === "replacement" ? "Lost/Stolen Replacement" :
                      "Child Passport"
                    }</div>
                    
                    <div className="text-passport-500">Travel Date:</div>
                    <div className="font-medium">{formData.travelDate}</div>
                    
                    {formData.previousPassport && (
                      <>
                        <div className="text-passport-500">Previous Passport:</div>
                        <div className="font-medium">{formData.previousPassportNumber}</div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium text-passport-800 mb-2">Travel Information</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-passport-500">Purpose:</div>
                    <div className="font-medium">{formData.travelPurpose}</div>
                    
                    <div className="text-passport-500">Destinations:</div>
                    <div className="font-medium">{formData.destinationCountries}</div>
                    
                    <div className="text-passport-500">Departure Date:</div>
                    <div className="font-medium">{formData.departureDate}</div>
                    
                    <div className="text-passport-500">Return Date:</div>
                    <div className="font-medium">{formData.returnDate || "N/A"}</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium text-passport-800 mb-2">Document Upload Status</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-passport-500">Passport Photo:</div>
                    <div className={`font-medium ${formData.photoUploaded ? 'text-green-600' : 'text-yellow-600'}`}>
                      {formData.photoUploaded ? 'Uploaded' : 'Not Uploaded'}
                    </div>
                    
                    <div className="text-passport-500">Proof of Identity:</div>
                    <div className={`font-medium ${formData.identificationUploaded ? 'text-green-600' : 'text-yellow-600'}`}>
                      {formData.identificationUploaded ? 'Uploaded' : 'Not Uploaded'}
                    </div>
                    
                    <div className="text-passport-500">Proof of Address:</div>
                    <div className={`font-medium ${formData.addressProofUploaded ? 'text-green-600' : 'text-yellow-600'}`}>
                      {formData.addressProofUploaded ? 'Uploaded' : 'Not Uploaded'}
                    </div>
                    
                    <div className="text-passport-500">Proof of Citizenship:</div>
                    <div className={`font-medium ${formData.citizenshipProofUploaded ? 'text-green-600' : 'text-yellow-600'}`}>
                      {formData.citizenshipProofUploaded ? 'Uploaded' : 'Not Uploaded'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="agreeTerms" 
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked === true)}
                />
                <Label htmlFor="agreeTerms" className="text-sm cursor-pointer">
                  I agree to the <a href="#" className="text-passport-600 underline">Terms of Service</a> and <a href="#" className="text-passport-600 underline">Privacy Policy</a> of the passport application service.
                </Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="agreeAccuracy" 
                  checked={formData.agreeAccuracy}
                  onCheckedChange={(checked) => handleCheckboxChange("agreeAccuracy", checked === true)}
                />
                <Label htmlFor="agreeAccuracy" className="text-sm cursor-pointer">
                  I certify that all information provided is true and accurate to the best of my knowledge. I understand that providing false information may result in penalties and rejection of my application.
                </Label>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="multi-step-form-container py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex-1 h-2 rounded ${
                index + 1 < currentStep 
                  ? 'bg-passport-500' 
                  : index + 1 === currentStep 
                    ? 'bg-passport-400' 
                    : 'bg-passport-100'
              }`}
            >
              {index < steps.length - 1 && <div className="w-full"></div>}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm text-passport-600">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`${
                index + 1 === currentStep ? 'font-semibold text-passport-800' : ''
              } ${index === 0 ? 'text-left' : index === steps.length - 1 ? 'text-right' : 'text-center'}`}
              style={{ width: `${100 / steps.length}%` }}
            >
              {step.title}
            </div>
          ))}
        </div>
      </div>

      <Card className="border border-gray-200">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit}>
            {renderForm()}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </Button>
              ) : (
                <div></div>
              )}
              
              {currentStep < steps.length ? (
                <Button type="button" onClick={nextStep}>
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button type="submit">Submit Application</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationForm;
