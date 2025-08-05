import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Corporate Office Network Infrastructure",
      category: "networking",
      location: "Downtown Business District",
      duration: "2 weeks",
      teamSize: 4,
      completedDate: "2024-11-15",
      description: "Complete network overhaul for 200-employee office including fiber optic cabling, enterprise Wi-Fi, and security systems.",
      services: ["Structured Cabling", "Wi-Fi Setup", "CCTV Installation", "Access Control"],
      image: "/placeholder.svg?height=300&width=400",
      results: [
        "99.9% network uptime achieved",
        "50% improvement in internet speed",
        "Enhanced security with 24/7 monitoring",
        "Scalable infrastructure for future growth"
      ]
    },
    {
      id: 2,
      title: "Industrial Facility Electrical Upgrade",
      category: "electrical",
      location: "Manufacturing Zone",
      duration: "3 weeks",
      teamSize: 6,
      completedDate: "2024-10-28",
      description: "Major electrical system upgrade for manufacturing facility including power distribution, lighting, and backup systems.",
      services: ["Industrial Wiring", "Power Distribution", "LED Lighting", "Backup Systems"],
      image: "/placeholder.svg?height=300&width=400",
      results: [
        "40% reduction in energy costs",
        "Zero electrical downtime",
        "Improved worker safety compliance",
        "Automated lighting controls installed"
      ]
    },
    {
      id: 3,
      title: "Restaurant HVAC & Refrigeration System",
      category: "hvac",
      location: "City Center",
      duration: "1 week",
      teamSize: 3,
      completedDate: "2024-11-20",
      description: "Complete HVAC installation and commercial refrigeration setup for new restaurant location.",
      services: ["AC Installation", "Ventilation", "Walk-in Cooler", "Kitchen Exhaust"],
      image: "/placeholder.svg?height=300&width=400",
      results: [
        "Optimal temperature control achieved",
        "Energy-efficient refrigeration",
        "Health department compliance",
        "Reduced operational costs"
      ]
    },
    {
      id: 4,
      title: "Residential Smart Home Integration",
      category: "electronics",
      location: "Suburban Community",
      duration: "3 days",
      teamSize: 2,
      completedDate: "2024-11-10",
      description: "Smart home automation system with integrated security, lighting, and entertainment controls.",
      services: ["Home Automation", "Smart Security", "Audio/Video", "IoT Integration"],
      image: "/placeholder.svg?height=300&width=400",
      results: [
        "Seamless device integration",
        "30% energy savings",
        "Enhanced home security",
        "Voice control throughout home"
      ]
    },
    {
      id: 5,
      title: "Hospital Plumbing Emergency Repair",
      category: "plumbing",
      location: "Medical District",
      duration: "24 hours",
      teamSize: 5,
      completedDate: "2024-11-25",
      description: "Emergency plumbing repair and upgrade for critical hospital systems including sterilization and patient areas.",
      services: ["Emergency Repair", "Pipe Replacement", "Medical Gas Lines", "Drainage Systems"],
      image: "/placeholder.svg?height=300&width=400",
      results: [
        "Zero service interruption",
        "Medical compliance maintained",
        "Preventive measures implemented",
        "24/7 monitoring system installed"
      ]
    },
    {
      id: 6,
      title: "Retail Chain Security System Rollout",
      category: "networking",
      location: "Multiple Locations",
      duration: "6 weeks",
      teamSize: 8,
      completedDate: "2024-09-15",
      description: "Multi-location security system deployment across 15 retail stores with centralized monitoring.",
      services: ["CCTV Networks", "Access Control", "Alarm Systems", "Remote Monitoring"],
      image: "/placeholder.svg?height=300&width=400",
      results: [
        "Centralized security management",
        "Real-time threat detection",
        "Reduced security incidents by 60%",
        "Streamlined operations across locations"
      ]
    }
  ];

  const categories = [
    { value: "all", label: "All Projects", count: projects.length },
    { value: "networking", label: "Networking & Security", count: projects.filter(p => p.category === "networking").length },
    { value: "electrical", label: "Electrical", count: projects.filter(p => p.category === "electrical").length },
    { value: "hvac", label: "HVAC & Refrigeration", count: projects.filter(p => p.category === "hvac").length },
    { value: "plumbing", label: "Plumbing", count: projects.filter(p => p.category === "plumbing").length },
    { value: "electronics", label: "Electronics", count: projects.filter(p => p.category === "electronics").length },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      networking: "bg-blue-100 text-blue-800",
      electrical: "bg-yellow-100 text-yellow-800",
      hvac: "bg-green-100 text-green-800",
      plumbing: "bg-cyan-100 text-cyan-800",
      electronics: "bg-purple-100 text-purple-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover our successful installations, repairs, and maintenance projects across various industries
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24hr</div>
              <div className="text-sm text-muted-foreground">Avg Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse through our recent work and see how we've helped businesses and homeowners with their technical needs
            </p>
          </div>

          {/* Category Filter */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="text-xs md:text-sm"
                >
                  {category.label} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge 
                        className={`absolute top-4 left-4 ${getCategoryColor(project.category)}`}
                      >
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{project.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{project.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{project.teamSize} technicians</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{project.completedDate}</span>
                        </div>
                      </div>

                      {/* Services */}
                      <div>
                        <h4 className="text-sm font-medium mb-2">Services Provided:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="text-sm font-medium mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {project.results.slice(0, 2).map((result, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="outline" className="w-full group">
                        View Full Case Study
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-bold">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground">
                  Let us help you with your next installation, repair, or maintenance project. 
                  Our expert team is ready to deliver quality results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href="/booking">Request Quote</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="/contact">Contact Us</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;