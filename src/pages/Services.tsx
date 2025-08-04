import { Shield, Zap, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import networkingImage from "@/assets/networking-security.jpg";
import electricalImage from "@/assets/electrical.jpg";
import hvacImage from "@/assets/hvac.jpg";
import plumbingImage from "@/assets/plumbing.jpg";
import electronicsImage from "@/assets/electronics.jpg";

const Services = () => {
  const services = [
    {
      title: "Networking & Security",
      description: "Comprehensive networking and security solutions for homes and businesses.",
      image: networkingImage,
      icon: <Shield className="h-8 w-8 text-primary" />,
      turnaround: "1-2 days",
      pricing: "Starting from $200",
      services: [
        "CCTV Installation & Monitoring",
        "Access Control Systems",
        "Structured Cabling",
        "Wi-Fi Network Setup",
        "Firewall Configuration",
        "Network Troubleshooting",
        "Security System Maintenance",
        "Remote Monitoring Setup"
      ]
    },
    {
      title: "Electrical Services",
      description: "Professional electrical installation and repair services for all applications.",
      image: electricalImage,
      icon: <Zap className="h-8 w-8 text-primary" />,
      turnaround: "Same day",
      pricing: "Starting from $150",
      services: [
        "Residential Wiring",
        "Industrial Electrical Work",
        "Lighting System Installation",
        "Solar Power Setup",
        "Inverter & UPS Installation",
        "Electrical Fault Diagnosis",
        "Panel Upgrades",
        "Emergency Electrical Repairs"
      ]
    },
    {
      title: "HVAC & Refrigeration",
      description: "Expert heating, cooling, and refrigeration services for optimal comfort.",
      image: hvacImage,
      icon: <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>,
      turnaround: "2-4 hours",
      pricing: "Starting from $120",
      services: [
        "AC Installation & Repair",
        "Refrigerator Servicing",
        "Cold Room Setup",
        "Commercial Refrigeration",
        "Preventive Maintenance",
        "Emergency AC Repairs",
        "Duct Cleaning",
        "Energy Efficiency Upgrades"
      ]
    },
    {
      title: "Plumbing Services",
      description: "Complete plumbing solutions for all your water and drainage needs.",
      image: plumbingImage,
      icon: <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 8.172V5L8 4z" /></svg>,
      turnaround: "1-3 hours",
      pricing: "Starting from $100",
      services: [
        "Pipe Installation & Repair",
        "Leak Detection & Fixing",
        "Drainage System Setup",
        "Water Heater Installation",
        "Sanitary Fittings",
        "Bathroom Renovations",
        "Kitchen Plumbing",
        "Emergency Plumbing"
      ]
    },
    {
      title: "Electronics Repair",
      description: "Professional repair services for all types of electronic devices and appliances.",
      image: electronicsImage,
      icon: <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
      turnaround: "2-5 days",
      pricing: "Starting from $80",
      services: [
        "TV Repair & Setup",
        "Microwave Servicing",
        "Sound System Installation",
        "Circuit Board Repair",
        "Component Replacement",
        "Appliance Troubleshooting",
        "Home Theater Setup",
        "Device Diagnostics"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Professional Services</h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Comprehensive technical solutions for homes and businesses. Available 24/7 for emergency services.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-xl text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center space-x-2 bg-muted/50 rounded-lg px-3 py-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{service.turnaround}</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-accent/10 rounded-lg px-3 py-2">
                        <span className="text-sm font-medium text-accent">{service.pricing}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Services Include:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.services.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/booking">Book This Service</Link>
                    </Button>
                    <Button variant="outline" size="lg">
                      Get Free Quote
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-muted-foreground">
              Professional excellence in every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-primary" />,
                title: "Quality Guaranteed",
                description: "100% satisfaction guarantee on all work"
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Fast Response",
                description: "Same-day service for urgent repairs"
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "Licensed & Insured",
                description: "Fully certified technicians"
              },
              {
                icon: <Zap className="h-8 w-8 text-primary" />,
                title: "24/7 Emergency",
                description: "Round-the-clock emergency service"
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Professional Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/booking">Book Service Now</Link>
            </Button>
            <Button variant="ghost" size="xl" className="text-white border-white hover:bg-white/10" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;