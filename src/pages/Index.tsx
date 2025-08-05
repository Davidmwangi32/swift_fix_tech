import { Star, CheckCircle, ArrowRight, Phone, Shield, Zap, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-image.jpg";
import networkingImage from "@/assets/networking-security.jpg";
import electricalImage from "@/assets/electrical.jpg";
import hvacImage from "@/assets/hvac.jpg";
import plumbingImage from "@/assets/plumbing.jpg";
import electronicsImage from "@/assets/electronics.jpg";

const Index = () => {
  const services = [
    {
      title: "Networking & Security",
      description: "Professional CCTV installation, access control systems, and network infrastructure setup.",
      image: networkingImage,
      services: ["CCTV Installation", "Access Control", "Structured Cabling", "Wi-Fi Setup", "Firewall Configuration"],
      turnaroundTime: "1-2 days",
      icon: <Shield className="h-6 w-6 text-primary" />
    },
    {
      title: "Electrical Services",
      description: "Complete electrical solutions for residential and industrial applications.",
      image: electricalImage,
      services: ["Wiring Installation", "Lighting Systems", "Solar Power", "Inverter Setup", "Fault Diagnosis"],
      turnaroundTime: "Same day",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      title: "HVAC & Refrigeration",
      description: "Expert air conditioning and refrigeration installation and maintenance services.",
      image: hvacImage,
      services: ["AC Installation", "Refrigerator Repair", "Cold Room Setup", "Maintenance", "Emergency Service"],
      turnaroundTime: "2-4 hours",
      icon: <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>
    },
    {
      title: "Plumbing Services",
      description: "Professional plumbing solutions for all your water and drainage needs.",
      image: plumbingImage,
      services: ["Pipe Installation", "Leak Repair", "Drainage Systems", "Water Heater Setup", "Sanitary Fittings"],
      turnaroundTime: "1-3 hours",
      icon: <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" /></svg>
    },
    {
      title: "Electronics Repair",
      description: "Expert repair services for all types of electronic devices and appliances.",
      image: electronicsImage,
      services: ["TV Repair", "Microwave Service", "Sound Systems", "Circuit Troubleshooting", "Component Replacement"],
      turnaroundTime: "2-5 days",
      icon: <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "Homeowner",
      content: "Excellent service! They fixed my electrical issues quickly and professionally.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content: "SmartFix installed our complete CCTV system. Very satisfied with their work.",
      rating: 5
    },
    {
      name: "Mike Davis",
      role: "Property Manager",
      content: "Reliable and efficient. They handle all our maintenance needs perfectly.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "24/7", label: "Emergency Service" },
    { number: "5★", label: "Average Rating" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="SmartFix Solutions Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Your Trusted 
              <span className="block text-accent">Repair & Installation</span>
              Experts
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90">
              Professional solutions for networking, electrical, HVAC, plumbing, and electronics. 
              Available 24/7 for all your service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/booking">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Phone className="mr-2 h-5 w-5" />
                Call +254 (769) 713 991
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative bg-white shadow-lg">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Professional Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From emergency repairs to complete installations, we provide comprehensive 
              solutions for all your technical needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose SmartFix Solutions?</h2>
            <p className="text-xl text-muted-foreground">
              Professional expertise you can trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "24/7 Availability",
                description: "Emergency services available round the clock"
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "Expert Technicians",
                description: "Certified professionals with years of experience"
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                title: "Quality Guarantee",
                description: "100% satisfaction guaranteed on all services"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Licensed & Insured",
                description: "Fully licensed and insured for your peace of mind"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">
              Don't take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/booking">Book Service Now</Link>
            </Button>
            <Button variant="ghost" size="xl" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
