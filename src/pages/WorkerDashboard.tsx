import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  FileText, 
  User, 
  HelpCircle,
  CheckCircle,
  FileSearch,
  MessageSquare,
  Sun,
  Lightbulb,
  Zap,
  Send
} from "lucide-react";

const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [chatMessage, setChatMessage] = useState("");

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "profile", label: "Profile", icon: User },
    { id: "help", label: "Help", icon: HelpCircle }
  ];

  const tabs = [
    { id: "personal", label: "Personal Information" },
    { id: "medical", label: "Medical Records" }
  ];

  const recentActivities = [
    { action: "Blood Test Results", date: "2 days ago" },
    { action: "Appointment with Dr. Lee", date: "5 days ago" },
    { action: "Workout Log Update", date: "1 week ago" }
  ];

  const healthTips = [
    {
      title: "Health Tip of the Day",
      content: "Drink at least 8 glasses of water daily to stay hydrated and prevent fatigue.",
      icon: Lightbulb
    },
    {
      title: "Mindfulness Minute", 
      content: "Take a few deep breaths to reduce stress and improve focus throughout your day.",
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">CuraVitals</div>
          <nav className="flex space-x-4 text-sm font-medium">
            {navigationItems.map(({ id, label, icon: Icon }) => (
              <a 
                key={id}
                href="#" 
                className="hover:underline flex items-center space-x-1 smooth-transition hover:opacity-80"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* User Greeting */}
          <div className="text-3xl font-semibold text-foreground flex items-center">
            Hello, Arjun!
            <CheckCircle className="h-8 w-8 ml-3 text-secondary" />
          </div>

          {/* Health Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthTips.map(({ title, content, icon: Icon }, index) => (
              <Card key={index} className="bg-health-tip-bg border-health-tip/30">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="text-health-tip">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-health-tip text-base">{title}</h3>
                    <p className="text-sm text-health-tip/80 mt-2">{content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-3">
            {tabs.map(({ id, label }) => (
              <Button
                key={id}
                variant={activeTab === id ? "tab-active" : "tab-inactive"}
                onClick={() => setActiveTab(id)}
                className="font-medium px-8 rounded-full smooth-transition"
              >
                {label}
              </Button>
            ))}
            <Button variant="ghost" size="icon" className="ml-auto rounded-full">
              <Sun className="h-6 w-6 text-muted-foreground" />
            </Button>
          </div>

          {/* Health Assistant */}
          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-xl flex items-center space-x-3">
                <MessageSquare className="w-6 h-6" />
                <span>Health Assistant</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="bg-white text-foreground">
                <CardContent className="p-4">
                  <p className="text-base">Hello! How can I help you today?</p>
                  <Button 
                    variant="link" 
                    className="mt-3 p-0 h-auto text-primary hover:underline"
                  >
                    I want to check my last health record.
                  </Button>
                </CardContent>
              </Card>
              
              <div className="flex items-center space-x-3">
                <Input
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-white text-foreground"
                />
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="rounded-full"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center space-x-3">
                <FileSearch className="w-6 h-6" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recentActivities.map(({ action, date }, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{action}</span>
                    <Badge variant="secondary" className="text-xs">
                      {date}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default WorkerDashboard;