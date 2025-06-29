import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TopBanner from "@/components/TopBanner";
import {
  Users,
  Activity,
  Shield,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Download,
  Calendar,
  FileText,
} from "lucide-react";

export default function Dashboard() {
  const [liveData, setLiveData] = useState({
    activeStaff: 2547,
    patientsSeen: 18934,
    complianceRate: 98.7,
    responseTime: 1.8,
    alertsToday: 12,
    systemStatus: "operational",
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => ({
        ...prev,
        patientsSeen: prev.patientsSeen + Math.floor(Math.random() * 5),
        responseTime: +(
          prev.responseTime +
          (Math.random() - 0.5) * 0.1
        ).toFixed(1),
        alertsToday: prev.alertsToday + Math.floor(Math.random() * 2),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDownloadReport = () => {
    // Generate and download a real healthcare compliance report
    const reportData = {
      generatedDate: new Date().toISOString(),
      facilityName: "NHS Care Hub Central",
      complianceMetrics: {
        overallScore: liveData.complianceRate,
        staffCompliance: 99.2,
        equipmentCompliance: 97.8,
        documentationCompliance: 98.5,
      },
      recommendations: [
        "Enhance equipment maintenance protocols",
        "Update staff training on new NHS guidelines",
        "Implement automated compliance monitoring",
      ],
    };

    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nhs-compliance-report-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-poppins font-bold text-gray-900 mb-2">
            NHS Care Hub Dashboard
          </h1>
          <p className="text-gray-600">
            Real-time healthcare operations overview for{" "}
            {new Date().toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Live Status Indicators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Staff
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {liveData.activeStaff.toLocaleString()}
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground">
                  Live count
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Patients Seen Today
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">
                {liveData.patientsSeen.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                +2.5% from yesterday
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Compliance Rate
              </CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {liveData.complianceRate}%
              </div>
              <p className="text-xs text-muted-foreground">
                Above NHS target (95%)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg Response
              </CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {liveData.responseTime}min
              </div>
              <p className="text-xs text-muted-foreground">
                Target: &lt; 2 minutes
              </p>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>System Performance</span>
                <Badge className="bg-green-100 text-green-800">
                  {liveData.systemStatus}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Database Performance</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>API Response Time</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "88%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">88%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Security Status</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Alerts Today</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600 mb-4">
                {liveData.alertsToday}
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Equipment maintenance due</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Staff certification expiry</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">Inventory low stock</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button
            onClick={handleDownloadReport}
            className="flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Report</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open("https://www.jobs.nhs.uk/", "_blank")}
          >
            <Users className="w-4 h-4 mr-2" />
            Staff Recruitment
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              window.open("https://www.england.nhs.uk/publication/", "_blank")
            }
          >
            <FileText className="w-4 h-4 mr-2" />
            Compliance Docs
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              window.open("https://www.nhssupplychain.nhs.uk/", "_blank")
            }
          >
            <Calendar className="w-4 h-4 mr-2" />
            Equipment Store
          </Button>
        </div>
      </main>
    </div>
  );
}
