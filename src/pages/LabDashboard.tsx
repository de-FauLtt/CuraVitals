import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Home, 
  FileText, 
  User, 
  HelpCircle,
  Upload,
  Search,
  CheckCircle,
  Clock,
  XCircle,
  FileCheck,
  Plus
} from "lucide-react";

const LabDashboard = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [workerId, setWorkerId] = useState("");
  const [testType, setTestType] = useState("");
  const [testResults, setTestResults] = useState("");

  const navigationItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "profile", label: "Profile", icon: User },
    { id: "help", label: "Help", icon: HelpCircle }
  ];

  const tabs = [
    { id: "upload", label: "Upload Reports" },
    { id: "verify", label: "Verify Reports" }
  ];

  const pendingReports = [
    { 
      id: "RPT001", 
      workerId: "WRK12345", 
      workerName: "Rajesh Kumar",
      testType: "Blood Test", 
      uploadedBy: "Worker",
      date: "2024-01-15",
      status: "pending" 
    },
    { 
      id: "RPT002", 
      workerId: "WRK12346", 
      workerName: "Amit Singh",
      testType: "X-Ray", 
      uploadedBy: "Worker",
      date: "2024-01-14",
      status: "pending" 
    },
    { 
      id: "RPT003", 
      workerId: "WRK12347", 
      workerName: "Suresh Nair",
      testType: "ECG", 
      uploadedBy: "Worker",
      date: "2024-01-13",
      status: "pending" 
    }
  ];

  const recentActivities = [
    { action: "Verified Blood Test for Rajesh Kumar", date: "2 hours ago", status: "verified" },
    { action: "Uploaded X-Ray Report for Amit Singh", date: "5 hours ago", status: "uploaded" },
    { action: "Rejected incomplete report", date: "1 day ago", status: "rejected" }
  ];

  const handleUpload = () => {
    // Handle report upload logic
    console.log("Uploading report for worker:", workerId);
  };

  const handleVerification = (reportId: string, action: "approve" | "reject") => {
    // Handle verification logic
    console.log(`${action} report:`, reportId);
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "verified": return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "uploaded": return <Upload className="w-4 h-4 text-blue-500" />;
      case "rejected": return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <Clock className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">CuraVitals - Lab Portal</div>
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
      <main className="container mx-auto p-6 grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Left Column - Main Content */}
        <div className="xl:col-span-3 space-y-6">
          {/* Lab Greeting */}
          <div className="text-3xl font-semibold text-foreground flex items-center">
            Welcome, City Medical Lab
            <FileCheck className="h-8 w-8 ml-3 text-secondary" />
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
          </div>

          {/* Upload Reports Section */}
          {activeTab === "upload" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-3">
                  <Plus className="w-6 h-6" />
                  <span>Upload New Lab Report</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="workerId">Worker ID</Label>
                    <Input
                      id="workerId"
                      value={workerId}
                      onChange={(e) => setWorkerId(e.target.value)}
                      placeholder="Enter worker ID (e.g., WRK12345)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="testType">Test Type</Label>
                    <Input
                      id="testType"
                      value={testType}
                      onChange={(e) => setTestType(e.target.value)}
                      placeholder="e.g., Blood Test, X-Ray, ECG"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="testResults">Test Results</Label>
                  <Textarea
                    id="testResults"
                    value={testResults}
                    onChange={(e) => setTestResults(e.target.value)}
                    placeholder="Enter detailed test results..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reportFile">Upload Report File</Label>
                  <Input
                    id="reportFile"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="cursor-pointer"
                  />
                </div>

                <Button 
                  onClick={handleUpload}
                  className="w-full md:w-auto"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Report
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Verify Reports Section */}
          {activeTab === "verify" && (
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-3">
                  <FileCheck className="w-6 h-6" />
                  <span>Pending Verifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingReports.map((report) => (
                    <Card key={report.id} className="border-l-4 border-l-yellow-400">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold">{report.workerName}</span>
                              <Badge variant="outline">{report.workerId}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {report.testType} • Uploaded by {report.uploadedBy} • {report.date}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="default"
                              onClick={() => handleVerification(report.id, "approve")}
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleVerification(report.id, "reject")}
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column - Recent Activity */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center space-x-2">
                <Search className="w-5 h-5" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recentActivities.map(({ action, date, status }, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    {getStatusIcon(status)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{action}</p>
                      <p className="text-xs text-muted-foreground">{date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pending Verifications</span>
                  <Badge variant="secondary">3</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Reports This Week</span>
                  <Badge variant="secondary">12</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Verified Today</span>
                  <Badge variant="secondary">5</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LabDashboard;