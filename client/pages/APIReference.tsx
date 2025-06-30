import { useState } from "react";
import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Code,
  Search,
  Copy,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Book,
  Globe,
  Key,
  Zap,
  Shield,
  Calendar,
  Download,
} from "lucide-react";

export default function APIReference() {
  const [selectedEndpoint, setSelectedEndpoint] = useState("authentication");
  const [searchQuery, setSearchQuery] = useState("");

  const apiCategories = [
    {
      id: "authentication",
      title: "Authentication",
      description: "API authentication and authorization",
      endpoints: 4,
      icon: Key,
      color: "bg-blue-500",
    },
    {
      id: "recruitment",
      title: "Staff Recruitment",
      description: "Job listings, applications, and candidate management",
      endpoints: 12,
      icon: Globe,
      color: "bg-green-500",
    },
    {
      id: "compliance",
      title: "Compliance",
      description: "Document access, regulatory data, and audit trails",
      endpoints: 8,
      icon: Shield,
      color: "bg-purple-500",
    },
    {
      id: "equipment",
      title: "Equipment",
      description: "Medical equipment catalog and procurement",
      endpoints: 10,
      icon: Zap,
      color: "bg-orange-500",
    },
  ];

  const endpoints = {
    authentication: [
      {
        method: "POST",
        endpoint: "/api/auth/login",
        description: "Authenticate user with NHS credentials",
        parameters: ["email", "password", "nhs_id"],
        response: "JWT token and user profile",
      },
      {
        method: "POST",
        endpoint: "/api/auth/refresh",
        description: "Refresh expired JWT token",
        parameters: ["refresh_token"],
        response: "New JWT token",
      },
      {
        method: "POST",
        endpoint: "/api/auth/logout",
        description: "Invalidate user session",
        parameters: ["token"],
        response: "Success confirmation",
      },
      {
        method: "GET",
        endpoint: "/api/auth/profile",
        description: "Get current user profile",
        parameters: [],
        response: "User profile data",
      },
    ],
    recruitment: [
      {
        method: "GET",
        endpoint: "/api/jobs",
        description: "Retrieve NHS job listings",
        parameters: ["location", "specialty", "trust", "limit"],
        response: "Array of job objects",
      },
      {
        method: "GET",
        endpoint: "/api/jobs/{id}",
        description: "Get specific job details",
        parameters: ["id"],
        response: "Job object with full details",
      },
      {
        method: "POST",
        endpoint: "/api/jobs/{id}/apply",
        description: "Submit job application",
        parameters: ["id", "cover_letter", "documents"],
        response: "Application confirmation",
      },
      {
        method: "GET",
        endpoint: "/api/applications",
        description: "Get user's job applications",
        parameters: ["status", "date_from", "date_to"],
        response: "Array of application objects",
      },
    ],
    compliance: [
      {
        method: "GET",
        endpoint: "/api/documents",
        description: "Access compliance documents",
        parameters: ["category", "date_from", "search"],
        response: "Array of document objects",
      },
      {
        method: "GET",
        endpoint: "/api/documents/{id}",
        description: "Download specific document",
        parameters: ["id"],
        response: "Document file stream",
      },
      {
        method: "GET",
        endpoint: "/api/compliance/status",
        description: "Check compliance status",
        parameters: ["trust_id", "area"],
        response: "Compliance status report",
      },
    ],
    equipment: [
      {
        method: "GET",
        endpoint: "/api/equipment",
        description: "Browse medical equipment catalog",
        parameters: ["category", "price_range", "supplier"],
        response: "Array of equipment objects",
      },
      {
        method: "GET",
        endpoint: "/api/equipment/{id}",
        description: "Get equipment details",
        parameters: ["id"],
        response: "Equipment object with specifications",
      },
      {
        method: "POST",
        endpoint: "/api/procurement/request",
        description: "Submit procurement request",
        parameters: ["equipment_id", "quantity", "urgency"],
        response: "Request confirmation",
      },
    ],
  };

  const codeExample = `
// Example: Authentication with NHS credentials
const response = await fetch('https://api.nhscarehub.uk/api/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Version': '2.1'
  },
  body: JSON.stringify({
    email: 'user@nhs.uk',
    password: 'secure_password',
    nhs_id: 'NHS123456'
  })
});

const data = await response.json();
console.log('Access Token:', data.access_token);

// Example: Fetching job listings
const jobsResponse = await fetch('https://api.nhscarehub.uk/api/jobs?specialty=nursing&location=london', {
  headers: {
    'Authorization': \`Bearer \${data.access_token}\`,
    'X-API-Version': '2.1'
  }
});

const jobs = await jobsResponse.json();
console.log('Available Jobs:', jobs);
  `;

  const selectedCategoryEndpoints = endpoints[selectedEndpoint] || [];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-poppins font-bold text-gray-900">
              API Reference
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete API documentation for integrating with the NHSCareHub
            platform. Build powerful healthcare applications with our RESTful
            API.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>API Version 2.1</span>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="w-3 h-3 mr-1" />
              Production Ready
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">REST API</Badge>
          </div>
        </div>

        {/* API Overview */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">34</div>
              <div className="text-sm text-gray-600">API Endpoints</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                99.9%
              </div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                &lt;100ms
              </div>
              <div className="text-sm text-gray-600">Avg Response Time</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                10K/hr
              </div>
              <div className="text-sm text-gray-600">Rate Limit</div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search endpoints, methods, or parameters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* API Categories Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              API Categories
            </h2>
            <div className="space-y-2">
              {apiCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedEndpoint(category.id)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedEndpoint === category.id
                        ? "bg-primary text-white border-primary"
                        : "bg-white border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          selectedEndpoint === category.id
                            ? "bg-white/20"
                            : category.color
                        }`}
                      >
                        <Icon
                          className={`w-4 h-4 ${
                            selectedEndpoint === category.id
                              ? "text-white"
                              : "text-white"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{category.title}</div>
                        <div
                          className={`text-sm ${
                            selectedEndpoint === category.id
                              ? "text-white/80"
                              : "text-gray-600"
                          }`}
                        >
                          {category.endpoints} endpoints
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Start */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">Quick Start</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" size="sm">
                  <Book className="w-4 h-4 mr-2" />
                  Getting Started Guide
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download SDK
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  size="sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  API Playground
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* API Documentation Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Base URL and Headers */}
              <Card>
                <CardHeader>
                  <CardTitle>Base URL & Headers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Production URL:
                      </label>
                      <div className="flex items-center space-x-2 mt-1">
                        <code className="flex-1 bg-gray-100 p-2 rounded text-sm">
                          https://api.nhscarehub.uk
                        </code>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyToClipboard("https://api.nhscarehub.uk")
                          }
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">
                        Required Headers:
                      </label>
                      <div className="bg-gray-100 p-3 rounded mt-1">
                        <pre className="text-sm">
                          {`Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
X-API-Version: 2.1`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Endpoints */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    {
                      apiCategories.find((cat) => cat.id === selectedEndpoint)
                        ?.title
                    }{" "}
                    Endpoints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {selectedCategoryEndpoints.map((endpoint, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge
                            className={
                              endpoint.method === "GET"
                                ? "bg-green-100 text-green-800"
                                : endpoint.method === "POST"
                                  ? "bg-blue-100 text-blue-800"
                                  : endpoint.method === "PUT"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                            }
                          >
                            {endpoint.method}
                          </Badge>
                          <code className="text-lg font-mono">
                            {endpoint.endpoint}
                          </code>
                          <Button size="sm" variant="outline">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-gray-600 mb-3">
                          {endpoint.description}
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Parameters:
                            </h4>
                            {endpoint.parameters.length > 0 ? (
                              <ul className="space-y-1">
                                {endpoint.parameters.map(
                                  (param, paramIndex) => (
                                    <li
                                      key={paramIndex}
                                      className="text-sm text-gray-600"
                                    >
                                      <code className="bg-gray-100 px-2 py-1 rounded">
                                        {param}
                                      </code>
                                    </li>
                                  ),
                                )}
                              </ul>
                            ) : (
                              <p className="text-sm text-gray-500">
                                No parameters required
                              </p>
                            )}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">
                              Response:
                            </h4>
                            <p className="text-sm text-gray-600">
                              {endpoint.response}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Code Example */}
              <Card>
                <CardHeader>
                  <CardTitle>Code Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      <code>{codeExample}</code>
                    </pre>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(codeExample)}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </Button>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Try in Playground
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Rate Limiting */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <span>Rate Limiting</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-orange-800 mb-3">
                      API requests are limited to ensure fair usage and platform
                      stability:
                    </p>
                    <ul className="space-y-1 text-orange-700 text-sm">
                      <li>• 10,000 requests per hour per API key</li>
                      <li>• 1,000 requests per minute per API key</li>
                      <li>• Rate limit headers included in all responses</li>
                      <li>• 429 status code returned when limit exceeded</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Error Codes */}
              <Card>
                <CardHeader>
                  <CardTitle>HTTP Status Codes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">
                        Success Codes:
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <code>200</code>
                          <span>OK - Request successful</span>
                        </div>
                        <div className="flex justify-between">
                          <code>201</code>
                          <span>Created - Resource created</span>
                        </div>
                        <div className="flex justify-between">
                          <code>204</code>
                          <span>No Content - Successful deletion</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">
                        Error Codes:
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <code>400</code>
                          <span>Bad Request - Invalid parameters</span>
                        </div>
                        <div className="flex justify-between">
                          <code>401</code>
                          <span>Unauthorized - Invalid credentials</span>
                        </div>
                        <div className="flex justify-between">
                          <code>403</code>
                          <span>Forbidden - Insufficient permissions</span>
                        </div>
                        <div className="flex justify-between">
                          <code>404</code>
                          <span>Not Found - Resource not found</span>
                        </div>
                        <div className="flex justify-between">
                          <code>429</code>
                          <span>Too Many Requests - Rate limited</span>
                        </div>
                        <div className="flex justify-between">
                          <code>500</code>
                          <span>Server Error - Internal server error</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
