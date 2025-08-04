import { Users, Award, Shield, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Reliability",
      description: "We deliver consistent, dependable service you can count on every time."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Focus",
      description: "Your satisfaction is our top priority in every project."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We stay ahead with the latest technology and best practices."
    }
  ];

  const team = [
    {
      name: "Michael Chen",
      role: "Lead Technician",
      specialty: "Electrical & Networking",
      experience: "12+ years"
    },
    {
      name: "Sarah Rodriguez",
      role: "HVAC Specialist",
      specialty: "Air Conditioning & Refrigeration",
      experience: "8+ years"
    },
    {
      name: "David Johnson",
      role: "Plumbing Expert",
      specialty: "Residential & Commercial Plumbing",
      experience: "15+ years"
    },
    {
      name: "Lisa Wang",
      role: "Electronics Repair",
      specialty: "Consumer Electronics",
      experience: "10+ years"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About SmartFix Solutions</h1>
            <p className="text-xl lg:text-2xl opacity-90">
              Your trusted partner for professional installation, maintenance, and repair services since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, SmartFix Solutions began as a small family business with a simple mission: 
                  to provide reliable, professional technical services to our community. What started as a 
                  two-person operation has grown into a trusted team of certified technicians serving 
                  hundreds of satisfied customers.
                </p>
                <p>
                  Over the years, we've expanded our services to cover networking and security systems, 
                  electrical work, HVAC and refrigeration, plumbing, and electronics repair. Our commitment 
                  to quality workmanship and customer satisfaction has remained unchanged.
                </p>
                <p>
                  Today, we're proud to be the go-to service provider for both residential and commercial 
                  clients, offering 24/7 emergency services and maintaining a 99% customer satisfaction rate.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Card className="p-6 text-center">
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">14+</div>
                    <div className="text-sm text-muted-foreground">Years in Business</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4 mt-8">
                <Card className="p-6 text-center">
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">99%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center mb-4">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To provide exceptional technical services that exceed customer expectations while building 
                  long-term relationships based on trust, reliability, and professional excellence.
                </p>
              </CardContent>
            </Card>
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center mb-4">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  To be the leading technical service provider in our region, known for innovation, 
                  quality, and unwavering commitment to customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground">
              Certified professionals dedicated to quality service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.specialty}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications & Accreditations</h2>
            <p className="text-xl text-muted-foreground">
              Licensed, insured, and certified for your peace of mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Licensed Contractors",
                description: "Fully licensed for electrical, plumbing, and HVAC work"
              },
              {
                title: "Insured & Bonded",
                description: "Complete liability and workers' compensation coverage"
              },
              {
                title: "Industry Certifications",
                description: "Certified technicians with ongoing training and education"
              }
            ].map((cert, index) => (
              <Card key={index} className="text-center p-8">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;