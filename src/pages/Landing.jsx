import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Shield, 
  Users, 
  Globe, 
  ChevronRight,
  Stethoscope,
  Building2,
  FileText,
  BarChart3,
  Languages
} from "lucide-react";

const Landing = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const navigate = useNavigate();

  const languages = ["English", "Malayalam", "Hindi", "Bengali", "Tamil"];
  
  const userTypes = [
    {
      type: "worker",
      title: "Migrant Worker",
      description: "Register and manage your health records safely",
      icon: Users,
      route: "/dashboard/worker"
    },
    {
      type: "lab",
      title: "Lab Partner", 
      description: "Upload verified test reports for workers",
      icon: Stethoscope,
      route: "/dashboard/lab"
    }
  ];

  const handleLogin = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CuraVitals</h1>
                <p className="text-xs text-muted-foreground">Digital Health Records for All</p>
              </div>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <Languages className="w-4 h-4 text-muted-foreground" />
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="text-sm bg-transparent border-none focus:outline-none cursor-pointer"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge variant="secondary" className="mb-4">
            Supporting UN SDG 3: Good Health and Well-being
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Empowering Kerala's
            <span className="text-primary"> Migrant Workers</span> with 
            <span className="text-secondary"> Digital Health</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            A unified platform connecting workers, healthcare providers, employers, and government 
            officials for comprehensive health record management and community wellness.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-secondary">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2 text-secondary">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">Multilingual Support</span>
            </div>
            <div className="flex items-center space-x-2 text-secondary">
              <BarChart3 className="w-5 h-5" />
              <span className="text-sm font-medium">Real-time Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Login Cards Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Access Point</h2>
            <p className="text-muted-foreground">Select your role to access the appropriate dashboard</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {userTypes.map(({ type, title, description, icon: Icon, route }) => (
              <Card key={type} className="group hover:shadow-lg smooth-transition cursor-pointer border-2 hover:border-primary/20 flex flex-col">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <CardDescription className="text-sm">{description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  <Button 
                    onClick={() => handleLogin(route)}
                    variant="default" 
                    className="w-full group"
                  >
                    Access Dashboard
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 smooth-transition" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Platform Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">For Workers</h3>
              <p className="text-sm text-muted-foreground">Secure health record storage, easy lab report access, and AI-powered health guidance</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">For Employers</h3>
              <p className="text-sm text-muted-foreground">Streamlined health verification, compliance monitoring, and workforce wellness insights</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">For Government</h3>
              <p className="text-sm text-muted-foreground">Real-time health surveillance, outbreak detection, and data-driven policy making</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-foreground" />
            </div>
            <span className="font-semibold">CuraVitals</span>
          </div>
          <p className="text-sm text-gray-300">
            Empowering communities through accessible digital healthcare • Built for Kerala's migrant workers
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;