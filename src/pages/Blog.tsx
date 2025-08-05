import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, Wrench, Lightbulb, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Essential Home Electrical Safety Tips Every Homeowner Should Know",
      category: "electrical",
      excerpt: "Learn crucial electrical safety practices to protect your home and family from potential hazards and accidents.",
      content: "Electrical safety is paramount in every home. From proper outlet usage to recognizing warning signs...",
      author: "Mike Johnson",
      date: "2024-12-01",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Safety", "Electrical", "Home Maintenance", "DIY"],
      featured: true
    },
    {
      id: 2,
      title: "When to Replace vs Repair Your HVAC System: A Complete Guide",
      category: "hvac",
      excerpt: "Understand the key factors that determine whether your HVAC system needs repair or complete replacement.",
      content: "Making the decision between HVAC repair and replacement can be challenging. Consider these factors...",
      author: "Sarah Chen",
      date: "2024-11-28",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["HVAC", "Maintenance", "Cost Savings", "Energy Efficiency"],
      featured: false
    },
    {
      id: 3,
      title: "Top 10 Network Security Threats Small Businesses Face in 2024",
      category: "networking",
      excerpt: "Discover the most common cybersecurity threats targeting small businesses and how to protect your network.",
      content: "Small businesses are increasingly targeted by cybercriminals. Here are the top threats to watch for...",
      author: "David Rodriguez",
      date: "2024-11-25",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Cybersecurity", "Business", "Networking", "Prevention"],
      featured: true
    },
    {
      id: 4,
      title: "DIY Plumbing: What You Can Fix Yourself vs When to Call a Pro",
      category: "plumbing",
      excerpt: "Learn which plumbing issues you can safely handle yourself and when it's time to call professional help.",
      content: "While some plumbing issues are perfect for DIY fixes, others require professional expertise...",
      author: "Tom Wilson",
      date: "2024-11-22",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["DIY", "Plumbing", "Home Repair", "Cost Savings"],
      featured: false
    },
    {
      id: 5,
      title: "Smart Home Technology: Latest Trends and Installation Tips",
      category: "electronics",
      excerpt: "Explore the newest smart home technologies and get expert tips for seamless installation and integration.",
      content: "Smart home technology continues to evolve rapidly. Here's what's trending in 2024...",
      author: "Lisa Park",
      date: "2024-11-20",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Smart Home", "Technology", "Automation", "IoT"],
      featured: false
    },
    {
      id: 6,
      title: "Energy Efficiency: How Regular Maintenance Saves You Money",
      category: "maintenance",
      excerpt: "Discover how proper maintenance of your home systems can significantly reduce energy costs and extend equipment life.",
      content: "Regular maintenance is one of the most cost-effective ways to improve energy efficiency...",
      author: "Mark Thompson",
      date: "2024-11-18",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Energy Efficiency", "Maintenance", "Cost Savings", "Sustainability"],
      featured: true
    },
    {
      id: 7,
      title: "Emergency Preparedness: Building a Home Repair Kit",
      category: "general",
      excerpt: "Learn what essential tools and supplies every homeowner should have ready for common household emergencies.",
      content: "Being prepared for home emergencies can save you time, money, and stress...",
      author: "Jennifer Adams",
      date: "2024-11-15",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Emergency", "Preparedness", "Tools", "Home Safety"],
      featured: false
    },
    {
      id: 8,
      title: "Understanding Your Home's Electrical Panel: A Beginner's Guide",
      category: "electrical",
      excerpt: "Get familiar with your electrical panel, learn to identify common issues, and understand when to seek professional help.",
      content: "Your home's electrical panel is the heart of your electrical system...",
      author: "Robert Kim",
      date: "2024-11-12",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Electrical", "Education", "Home Systems", "Safety"],
      featured: false
    }
  ];

  const categories = [
    { value: "all", label: "All Posts", icon: BookOpen, count: blogPosts.length },
    { value: "electrical", label: "Electrical", icon: Lightbulb, count: blogPosts.filter(p => p.category === "electrical").length },
    { value: "hvac", label: "HVAC", icon: Wrench, count: blogPosts.filter(p => p.category === "hvac").length },
    { value: "networking", label: "Networking", icon: Shield, count: blogPosts.filter(p => p.category === "networking").length },
    { value: "plumbing", label: "Plumbing", icon: Wrench, count: blogPosts.filter(p => p.category === "plumbing").length },
    { value: "electronics", label: "Electronics", icon: BookOpen, count: blogPosts.filter(p => p.category === "electronics").length },
    { value: "maintenance", label: "Maintenance", icon: Wrench, count: blogPosts.filter(p => p.category === "maintenance").length },
    { value: "general", label: "General", icon: BookOpen, count: blogPosts.filter(p => p.category === "general").length },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      electrical: "bg-yellow-100 text-yellow-800",
      hvac: "bg-green-100 text-green-800",
      networking: "bg-blue-100 text-blue-800",
      plumbing: "bg-cyan-100 text-cyan-800",
      electronics: "bg-purple-100 text-purple-800",
      maintenance: "bg-orange-100 text-orange-800",
      general: "bg-gray-100 text-gray-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Knowledge Center</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Expert tips, guides, and insights for home maintenance, repairs, and technical installations
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-background text-foreground"
            />
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPosts.slice(0, 3).map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge 
                      className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}
                    >
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-12">
            <TabsList className="grid w-full grid-cols-4 md:grid-cols-8 mb-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <TabsTrigger 
                    key={category.value} 
                    value={category.value}
                    className="text-xs flex flex-col items-center space-y-1 p-2"
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="hidden md:inline">{category.label}</span>
                    <span className="md:hidden">{category.label.slice(0, 4)}</span>
                    <span className="text-xs">({category.count})</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <TabsContent value={selectedCategory}>
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or category filter.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge 
                          className={`absolute top-4 left-4 ${getCategoryColor(post.category)}`}
                        >
                          {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                        </Badge>
                        {post.featured && (
                          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full group">
                          Read Full Article
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Get the latest tips, guides, and industry insights delivered to your inbox monthly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1"
                  />
                  <Button variant="hero">Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No spam. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;