import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { bookingService, type BookingData } from "@/Services/bookingService";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formData = new FormData(e.target as HTMLFormElement);
      const bookingData: BookingData = {
        fullName: formData.get('fullName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        location: formData.get('address') as string,
        serviceCategory: formData.get('serviceCategory') as string,
        problemDescription: formData.get('description') as string,
        preferredDate: formData.get('preferredDate') as string,
        preferredTime: formData.get('preferredTime') as string,
      };

      const response = await bookingService.createBooking(bookingData);
      setTicketNumber(response.ticketNumber);
      setIsSubmitted(true);
      
      toast({
        title: "Booking Submitted Successfully!",
        description: `Your ticket number is ${response.ticketNumber}. We'll contact you within 2 hours.`,
      });
    } catch (error) {
      console.error('Booking submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-8 flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thank you for choosing SmartFix Solutions. We've received your service request.
            </p>
            <Card className="p-8 mb-8">
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Your Ticket Number</Label>
                    <div className="text-2xl font-bold text-primary">{ticketNumber}</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Please save this ticket number for your records. Our team will contact you within 2 hours to confirm your appointment.
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <Button variant="hero" size="lg" onClick={() => setIsSubmitted(false)}>
                Book Another Service
              </Button>
              <p className="text-sm text-muted-foreground">
                Need immediate assistance? Call us at <strong>(555) 123-4567</strong>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Book Your Service</h1>
          <p className="text-xl opacity-90">
            Get professional technical service - fast, reliable, and guaranteed
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Service Request Form</CardTitle>
                    <CardDescription>
                      Please fill out the details below and we'll get back to you within 2 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input id="fullName" name="fullName" required placeholder="John Smith" />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input id="phone" name="phone" type="tel" required placeholder="+1 (555) 123-4567" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" name="email" type="email" required placeholder="john@example.com" />
                        </div>
                        <div>
                          <Label htmlFor="address">Service Address *</Label>
                           <Textarea 
                            id="address" 
                            name="address"
                            required 
                            placeholder="123 Main Street, City, State, ZIP Code"
                            rows={2}
                          />
                        </div>
                      </div>

                      {/* Service Details */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Service Details</h3>
                        <div>
                          <Label htmlFor="serviceCategory">Service Category *</Label>
                           <Select name="serviceCategory" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="networking">Networking & Security</SelectItem>
                              <SelectItem value="electrical">Electrical Services</SelectItem>
                              <SelectItem value="hvac">HVAC & Refrigeration</SelectItem>
                              <SelectItem value="plumbing">Plumbing Services</SelectItem>
                              <SelectItem value="electronics">Electronics Repair</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="urgency">Priority Level *</Label>
                          <Select required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select priority level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="emergency">Emergency (24hrs)</SelectItem>
                              <SelectItem value="urgent">Urgent (1-2 days)</SelectItem>
                              <SelectItem value="normal">Normal (3-5 days)</SelectItem>
                              <SelectItem value="scheduled">Scheduled (Flexible)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="description">Problem Description *</Label>
                           <Textarea 
                            id="description" 
                            name="description"
                            required 
                            placeholder="Please describe the issue or service needed in detail..."
                            rows={4}
                          />
                        </div>
                      </div>

                      {/* Preferred Schedule */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Preferred Schedule</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="preferredDate">Preferred Date</Label>
                            <Input id="preferredDate" name="preferredDate" type="date" />
                          </div>
                          <div>
                            <Label htmlFor="preferredTime">Preferred Time</Label>
                             <Select name="preferredTime">
                              <SelectTrigger>
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                                <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                                <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* File Upload */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Additional Information</h3>
                        <div>
                          <Label htmlFor="fileUpload">Upload Photos (Optional)</Label>
                          <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              Click to upload or drag and drop images of the issue
                            </p>
                            <Input id="fileUpload" type="file" multiple accept="image/*" className="hidden" />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="notes">Additional Notes</Label>
                          <Textarea 
                            id="notes" 
                            placeholder="Any additional information or special requirements..."
                            rows={3}
                          />
                        </div>
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        Submit Service Request
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>Response Time</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Emergency:</span>
                        <span className="text-sm font-medium">Within 1 hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Urgent:</span>
                        <span className="text-sm font-medium">Within 2 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Normal:</span>
                        <span className="text-sm font-medium">Within 24 hours</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="bg-destructive/5 border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-destructive">Emergency Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      For immediate emergency assistance, call us directly:
                    </p>
                    <Button variant="destructive" size="lg" className="w-full">
                      Call +254 (769) 713 991
                    </Button>
                  </CardContent>
                </Card>

                {/* Service Areas */}
                <Card>
                  <CardHeader>
                    <CardTitle>Service Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>✓ Downtown Metro Area</div>
                      <div>✓ Residential Districts</div>
                      <div>✓ Industrial Zone</div>
                      <div>✓ Suburban Communities</div>
                      <div className="text-muted-foreground">
                        Not sure if we serve your area? <span className="text-primary cursor-pointer">Contact us</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;