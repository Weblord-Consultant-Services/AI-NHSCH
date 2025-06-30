import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Clock,
  Server,
  Database,
  Globe,
  Shield,
  Zap,
  Calendar,
  TrendingUp,
  RefreshCw,
} from "lucide-react";

interface SystemComponent {
  name: string;
  status: "operational" | "degraded" | "outage";
  description: string;
  uptime: number;
  responseTime: number;
  lastChecked: Date;
}

interface IncidentReport {
  id: string;
  title: string;
  status: "investigating" | "identified" | "monitoring" | "resolved";
  severity: "low" | "medium" | "high" | "critical";
  description: string;
  startTime: Date;
  resolvedTime?: Date;
  affectedServices: string[];
}

export default function SystemStatus() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const overallStatus = "operational"; // operational, degraded, outage

  const systemComponents: SystemComponent[] = [
    {
      name: "Web Application",
      status: "operational",
      description: "Main NHSCareHub web platform",
      uptime: 99.98,
      responseTime: 245,
      lastChecked: new Date(),
    },
    {
      name: "API Services",
      status: "operational",
      description: "REST API endpoints for third-party integrations",
      uptime: 99.95,
      responseTime: 89,
      lastChecked: new Date(),
    },
    {
      name: "Authentication System",
      status: "operational",
      description: "User login and NHS credential verification",
      uptime: 99.99,
      responseTime: 123,
      lastChecked: new Date(),
    },
    {
      name: "Job Portal",
      status: "operational",
      description: "Staff recruitment and job application system",
      uptime: 99.94,
      responseTime: 167,
      lastChecked: new Date(),
    },
    {
      name: "Document Storage",
      status: "operational",
      description: "Compliance document access and downloads",
      uptime: 99.97,
      responseTime: 203,
      lastChecked: new Date(),
    },
    {
      name: "Equipment Marketplace",
      status: "operational",
      description: "Medical equipment catalog and procurement",
      uptime: 99.96,
      responseTime: 178,
      lastChecked: new Date(),
    },
    {
      name: "Payment Processing",
      status: "operational",
      description: "Secure payment and billing services",
      uptime: 99.98,
      responseTime: 134,
      lastChecked: new Date(),
    },
    {
      name: "Notification System",
      status: "operational",
      description: "Email and SMS notifications",
      uptime: 99.93,
      responseTime: 89,
      lastChecked: new Date(),
    },
  ];

  const incidents: IncidentReport[] = [
    {
      id: "inc-2025-001",
      title: "Scheduled Maintenance - Database Optimization",
      status: "resolved",
      severity: "low",
      description:
        "Routine database maintenance completed successfully. All services restored to full capacity.",
      startTime: new Date("2025-01-15T02:00:00Z"),
      resolvedTime: new Date("2025-01-15T04:30:00Z"),
      affectedServices: ["Document Storage", "Job Portal"],
    },
    {
      id: "inc-2025-002",
      title: "API Response Time Optimization",
      status: "resolved",
      severity: "medium",
      description:
        "Implemented performance improvements to reduce API response times by 40%.",
      startTime: new Date("2025-01-12T10:15:00Z"),
      resolvedTime: new Date("2025-01-12T11:45:00Z"),
      affectedServices: ["API Services"],
    },
  ];

  const metrics = [
    {
      label: "Overall Uptime",
      value: "99.97%",
      period: "Last 30 days",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      label: "Avg Response Time",
      value: "156ms",
      period: "Last 24 hours",
      icon: Zap,
      color: "text-blue-600",
    },
    {
      label: "Active Users",
      value: "12,847",
      period: "Current",
      icon: Activity,
      color: "text-purple-600",
    },
    {
      label: "API Requests",
      value: "2.3M",
      period: "Last 24 hours",
      icon: Server,
      color: "text-orange-600",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "outage":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-green-100 text-green-800";
      case "degraded":
        return "bg-yellow-100 text-yellow-800";
      case "outage":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getIncidentStatusColor = (status: string) => {
    switch (status) {
      case "investigating":
        return "bg-red-100 text-red-800";
      case "identified":
        return "bg-yellow-100 text-yellow-800";
      case "monitoring":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500";
      case "high":
        return "bg-orange-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate refresh delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  useEffect(() => {
    // Auto-refresh every 30 seconds
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                overallStatus === "operational"
                  ? "bg-green-500"
                  : overallStatus === "degraded"
                    ? "bg-yellow-500"
                    : "bg-red-500"
              }`}
            >
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-poppins font-bold text-gray-900">
              System Status
            </h1>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Badge
              className={`text-lg px-4 py-2 ${getStatusColor(overallStatus)}`}
            >
              {getStatusIcon(overallStatus)}
              <span className="ml-2 capitalize">
                All Systems {overallStatus}
              </span>
            </Badge>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>
                Last updated: {lastUpdated.toLocaleTimeString("en-GB")}
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw
                className={`w-4 h-4 mr-2 ${isRefreshing ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <Icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-500">{metric.period}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* System Components */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            System Components
          </h2>
          <div className="space-y-4">
            {systemComponents.map((component, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(component.status)}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {component.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {component.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(component.status)}>
                        {component.status}
                      </Badge>
                      <div className="text-sm text-gray-600 mt-2">
                        {component.uptime}% uptime
                      </div>
                      <div className="text-xs text-gray-500">
                        {component.responseTime}ms avg response
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Incident History */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Recent Incidents
            </h2>
            {incidents.length > 0 ? (
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <Card key={incident.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {incident.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {incident.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full ${getSeverityColor(incident.severity)}`}
                          ></div>
                          <Badge
                            className={getIncidentStatusColor(incident.status)}
                          >
                            {incident.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between">
                          <span>Started:</span>
                          <span>
                            {incident.startTime.toLocaleString("en-GB")}
                          </span>
                        </div>
                        {incident.resolvedTime && (
                          <div className="flex justify-between">
                            <span>Resolved:</span>
                            <span>
                              {incident.resolvedTime.toLocaleString("en-GB")}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Affected Services:</span>
                          <span>{incident.affectedServices.join(", ")}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No Recent Incidents
                  </h3>
                  <p className="text-gray-600">
                    All systems have been running smoothly with no reported
                    incidents in the past 30 days.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Performance Metrics */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Performance Metrics
            </h2>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>30-Day Uptime</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemComponents.slice(0, 4).map((component, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{component.name}</span>
                        <span className="font-semibold">
                          {component.uptime}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${component.uptime}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Response Times</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemComponents.slice(0, 4).map((component, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {component.name}
                      </span>
                      <span className="font-semibold">
                        {component.responseTime}ms
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Subscribe to Updates */}
        <Card className="mt-12 bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Stay Updated on System Status
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Subscribe to receive real-time notifications about service
              disruptions and maintenance windows.
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Subscribe to Updates
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                RSS Feed
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Historical Data */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Historical Performance Data
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold text-green-600">99.97%</div>
              <div className="text-gray-600">90-day uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">99.94%</div>
              <div className="text-gray-600">1-year uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">142ms</div>
              <div className="text-gray-600">Avg response time (90 days)</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
