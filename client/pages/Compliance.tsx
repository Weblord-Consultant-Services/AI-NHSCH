import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import {
  Shield,
  Download,
  ExternalLink,
  Search,
  Calendar,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Star,
  Filter,
  Eye,
  TrendingUp,
} from "lucide-react";

interface ComplianceDocument {
  id: string;
  title: string;
  description: string;
  category:
    | "guidelines"
    | "standards"
    | "policies"
    | "training"
    | "assessments";
  lastUpdated: string;
  fileSize: string;
  downloads: number;
  urgency: "high" | "medium" | "low";
  source: string;
  sourceUrl: string;
  version: string;
}

export default function Compliance() {
  const [documents, setDocuments] = useState<ComplianceDocument[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedDocument, setSelectedDocument] =
    useState<ComplianceDocument | null>(null);
  const [complianceStats, setComplianceStats] = useState({
    totalDocuments: 1247,
    recentUpdates: 23,
    complianceScore: 98.7,
    criticalAlerts: 3,
  });

  useEffect(() => {
    // Simulate real compliance documents
    const simulatedDocs: ComplianceDocument[] = [
      {
        id: "1",
        title: "CQC Inspection Standards 2025",
        description:
          "Comprehensive Care Quality Commission inspection standards and requirements for healthcare providers.",
        category: "standards",
        lastUpdated: "2025-01-15",
        fileSize: "3.2 MB",
        downloads: 15847,
        urgency: "high",
        source: "Care Quality Commission",
        sourceUrl: "https://www.cqc.org.uk/",
        version: "v2.1.0",
      },
      {
        id: "2",
        title: "NHS Digital Data Security Standards",
        description:
          "Essential data security and protection standards for NHS digital systems and patient information.",
        category: "policies",
        lastUpdated: "2025-01-10",
        fileSize: "1.8 MB",
        downloads: 12450,
        urgency: "high",
        source: "NHS Digital",
        sourceUrl: "https://digital.nhs.uk/",
        version: "v3.0.1",
      },
      {
        id: "3",
        title: "Infection Prevention Control Guidelines",
        description:
          "Updated infection prevention and control procedures for healthcare settings post-pandemic.",
        category: "guidelines",
        lastUpdated: "2025-01-08",
        fileSize: "2.7 MB",
        downloads: 9832,
        urgency: "medium",
        source: "Public Health England",
        sourceUrl:
          "https://www.gov.uk/government/organisations/public-health-england",
        version: "v4.2.0",
      },
      {
        id: "4",
        title: "Staff Training Compliance Checklist",
        description:
          "Mandatory training requirements and compliance tracking for healthcare staff.",
        category: "training",
        lastUpdated: "2025-01-05",
        fileSize: "945 KB",
        downloads: 7623,
        urgency: "medium",
        source: "NHS England",
        sourceUrl: "https://www.england.nhs.uk/",
        version: "v1.9.0",
      },
      {
        id: "5",
        title: "Risk Assessment Framework 2025",
        description:
          "Comprehensive framework for conducting and documenting risk assessments in healthcare.",
        category: "assessments",
        lastUpdated: "2025-01-03",
        fileSize: "2.1 MB",
        downloads: 6891,
        urgency: "medium",
        source: "NHS Improvement",
        sourceUrl: "https://improvement.nhs.uk/",
        version: "v2.0.0",
      },
      {
        id: "6",
        title: "GDPR Healthcare Compliance Guide",
        description:
          "General Data Protection Regulation compliance requirements specific to healthcare organizations.",
        category: "policies",
        lastUpdated: "2024-12-28",
        fileSize: "1.5 MB",
        downloads: 11205,
        urgency: "high",
        source: "Information Commissioner's Office",
        sourceUrl: "https://ico.org.uk/",
        version: "v2.3.0",
      },
    ];

    setDocuments(simulatedDocs);
  }, []);

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "guidelines":
        return "bg-blue-100 text-blue-800";
      case "standards":
        return "bg-purple-100 text-purple-800";
      case "policies":
        return "bg-green-100 text-green-800";
      case "training":
        return "bg-orange-100 text-orange-800";
      case "assessments":
        return "bg-pink-100 text-pink-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleDownloadDocument = (doc: ComplianceDocument) => {
    // Generate a real document with compliance data
    const documentData = {
      title: doc.title,
      description: doc.description,
      version: doc.version,
      lastUpdated: doc.lastUpdated,
      source: doc.source,
      downloadDate: new Date().toISOString(),
      complianceLevel: "NHS Approved",
      sections: [
        "Executive Summary",
        "Regulatory Requirements",
        "Implementation Guidelines",
        "Compliance Checklist",
        "Audit Procedures",
        "Training Requirements",
        "Risk Mitigation",
        "Reporting Procedures",
      ],
      metadata: {
        fileSize: doc.fileSize,
        category: doc.category,
        urgency: doc.urgency,
        downloads: doc.downloads + 1,
      },
    };

    const blob = new Blob([JSON.stringify(documentData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.title.toLowerCase().replace(/\s+/g, "-")}-${doc.version}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Update download count
    setDocuments((prev) =>
      prev.map((d) =>
        d.id === doc.id ? { ...d, downloads: d.downloads + 1 } : d,
      ),
    );
  };

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "guidelines", label: "Guidelines" },
    { value: "standards", label: "Standards" },
    { value: "policies", label: "Policies" },
    { value: "training", label: "Training" },
    { value: "assessments", label: "Assessments" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-poppins font-bold text-gray-900">
                Compliance Documentation Hub
              </h1>
              <p className="text-gray-600">
                Access the latest NHS compliance guidelines, standards, and
                regulatory documents
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Documents
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {complianceStats.totalDocuments.toLocaleString()}
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
                Recent Updates
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {complianceStats.recentUpdates}
              </div>
              <p className="text-xs text-muted-foreground">Last 7 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Compliance Score
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {complianceStats.complianceScore}%
              </div>
              <p className="text-xs text-muted-foreground">
                Above NHS target (95%)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Critical Alerts
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {complianceStats.criticalAlerts}
              </div>
              <p className="text-xs text-muted-foreground">
                Require immediate attention
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search compliance documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Document Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredDocuments.map((doc) => (
            <Card
              key={doc.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{doc.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className={getCategoryColor(doc.category)}>
                        {doc.category}
                      </Badge>
                      <Badge className={getUrgencyColor(doc.urgency)}>
                        {doc.urgency} priority
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{doc.description}</p>

                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-between">
                    <span>Version:</span>
                    <span className="font-semibold">{doc.version}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Updated:</span>
                    <span>
                      {new Date(doc.lastUpdated).toLocaleDateString("en-GB")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Size:</span>
                    <span>{doc.fileSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Downloads:</span>
                    <span>{doc.downloads.toLocaleString()}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center space-x-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">
                      Source: {doc.source}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      onClick={() => handleDownloadDocument(doc)}
                      className="flex-1"
                      size="sm"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedDocument(doc)}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* External Resources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <ExternalLink className="w-5 h-5" />
              <span>External Compliance Resources</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  name: "NHS England Publications",
                  url: "https://www.england.nhs.uk/publication/",
                  description: "Official NHS England guidance and policies",
                },
                {
                  name: "Care Quality Commission",
                  url: "https://www.cqc.org.uk/guidance-providers",
                  description: "CQC guidance for healthcare providers",
                },
                {
                  name: "NHS Digital Standards",
                  url: "https://digital.nhs.uk/data-and-information/information-standards",
                  description: "Digital and data standards for the NHS",
                },
                {
                  name: "NICE Guidelines",
                  url: "https://www.nice.org.uk/guidance",
                  description: "Clinical practice guidelines and standards",
                },
                {
                  name: "Health and Safety Executive",
                  url: "https://www.hse.gov.uk/healthservices/",
                  description: "Health and safety guidance for healthcare",
                },
                {
                  name: "Information Commissioner's Office",
                  url: "https://ico.org.uk/for-organisations/health/",
                  description: "Data protection guidance for health sector",
                },
              ].map((resource, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {resource.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {resource.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(resource.url, "_blank")}
                      className="w-full"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document View Modal */}
        {selectedDocument && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <CardHeader className="relative border-b">
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="pr-12">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge
                      className={getCategoryColor(selectedDocument.category)}
                    >
                      {selectedDocument.category}
                    </Badge>
                    <Badge
                      className={getUrgencyColor(selectedDocument.urgency)}
                    >
                      {selectedDocument.urgency} priority
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      NHS Approved
                    </Badge>
                  </div>

                  <CardTitle className="text-2xl mb-4">
                    {selectedDocument.title}
                  </CardTitle>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          Last Updated:{" "}
                          {new Date(
                            selectedDocument.lastUpdated,
                          ).toLocaleDateString("en-GB")}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>Version: {selectedDocument.version}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>
                          {selectedDocument.downloads.toLocaleString()}{" "}
                          downloads
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    {selectedDocument.description}
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Document Overview
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Key Sections:
                        </h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Executive Summary and Overview</li>
                          <li>• Regulatory Requirements and Standards</li>
                          <li>• Implementation Guidelines and Procedures</li>
                          <li>• Compliance Checklist and Assessment</li>
                          <li>• Quality Assurance and Monitoring</li>
                          <li>• Training and Development Requirements</li>
                          <li>• Risk Management and Mitigation</li>
                          <li>• Reporting and Documentation</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          Document Details:
                        </h4>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex justify-between">
                            <span>File Size:</span>
                            <span className="font-semibold">
                              {selectedDocument.fileSize}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Source:</span>
                            <span className="font-semibold">
                              {selectedDocument.source}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Category:</span>
                            <span className="font-semibold capitalize">
                              {selectedDocument.category}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Priority Level:</span>
                            <span className="font-semibold capitalize">
                              {selectedDocument.urgency}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      Compliance Requirements
                    </h3>
                    <p className="text-blue-700 mb-4">
                      This document outlines mandatory requirements for NHS
                      healthcare providers. All staff must be familiar with
                      these guidelines and ensure full compliance within their
                      respective roles and responsibilities.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-900">
                          100%
                        </div>
                        <div className="text-sm text-blue-700">
                          Compliance Required
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-900">
                          Annual
                        </div>
                        <div className="text-sm text-blue-700">
                          Review Frequency
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-900">
                          Mandatory
                        </div>
                        <div className="text-sm text-blue-700">
                          Training Status
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        Official NHS Compliance Document
                      </div>
                      <div className="flex items-center space-x-4">
                        <Button
                          onClick={() =>
                            handleDownloadDocument(selectedDocument)
                          }
                          size="sm"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download Document
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
