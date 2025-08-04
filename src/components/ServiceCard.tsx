import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  services: string[];
  turnaroundTime: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ 
  title, 
  description, 
  image, 
  services, 
  turnaroundTime, 
  icon 
}: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-1" />
            {turnaroundTime}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-sm mb-2">Services Include:</h4>
          <ul className="space-y-1">
            {services.slice(0, 3).map((service, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-center">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                {service}
              </li>
            ))}
            {services.length > 3 && (
              <li className="text-sm text-muted-foreground">
                + {services.length - 3} more services
              </li>
            )}
          </ul>
        </div>
        
        <div className="flex gap-2">
          <Button variant="service" className="flex-1" asChild>
            <Link to="/booking">
              Book Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/services">Learn More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;