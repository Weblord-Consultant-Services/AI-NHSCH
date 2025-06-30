import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  FileText,
  Download,
  ExternalLink,
  Calendar,
  Clock,
  Users,
  Shield,
  Stethoscope,
  Code,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Documentation() {
  const documentationSections = [
    {
      icon: Users,
      title: "Staff Recruitment Guide",
      description: "Complete guide to using our recruitment platform",
      documents: [
        {
          title: "Getting Started with NHS Recruitment",
          type: "PDF Guide",
          size: "2.4 MB",
          updated: "2025-01-15",
          downloads: 3247,
        },
        {
          title: "Creating Your Professional Profile",
          type: "Interactive Guide",
          size: "1.8 MB",
          updated: "2025-01-12",
          downloads: 2856,
        },
        {
          title: "Job Application Best Practices",
          type: "PDF Guide",
          size: "1.2 MB",
          updated: "2025-01-10",
          downloads: 4123,
        },
      ],
      color: "bg-blue-500",
    },
    {
      icon: Shield,
      title: "Compliance Documentation",
      description: "NHS compliance standards and regulatory requirements",
      documents: [
        {
          title: "NHS Compliance Framework 2025",
          type: "PDF Document",
          size: "5.6 MB",
          updated: "2025-01-14",
          downloads: 8945,
        },
        {
          title: "Data Protection Guidelines",
          type: "PDF Guide",
          size: "3.1 MB",
          updated: "2025-01-11",
          downloads: 5234,
        },
        {
          title: "Quality Assurance Standards",
          type: "PDF Document",
          size: "2.8 MB",
          updated: "2025-01-09",
          downloads: 3567,
        },
      ],
      color: "bg-green-500",
    },
    {
      icon: Stethoscope,
      title: "Equipment Procurement",
      description: "Medical equipment sourcing and procurement guidelines",
      documents: [
        {
          title: "Equipment Procurement Manual",
          type: "PDF Manual",
          size: "4.2 MB",
          updated: "2025-01-13",
          downloads: 2134,
        },
        {
          title: "Supplier Verification Process",
          type: "PDF Guide",
          size: "1.9 MB",
          updated: "2025-01-08",
          downloads: 1789,
        },
        {
          title: "Equipment Quality Standards",
          type: "PDF Document",
          size: "2.3 MB",
          updated: "2025-01-07",
          downloads: 2456,
        },
      ],
      color: "bg-purple-500",
    },
    {
      icon: Code,
      title: "Technical Integration",
      description: "API documentation and technical implementation guides",
      documents: [
        {
          title: "API Reference Documentation",
          type: "Online Docs",
          size: "Web Based",
          updated: "2025-01-16",
          downloads: 1567,
        },
        {
          title: "SDK Integration Guide",
          type: "PDF Guide",
          size: "3.4 MB",
          updated: "2025-01-12",
          downloads: 892,
        },
        {
          title: "Authentication & Security",
          type: "PDF Manual",
          size: "2.1 MB",
          updated: "2025-01-10",
          downloads: 1234,
        },
      ],
      color: "bg-indigo-500",
    },
  ];

  const quickStartGuides = [
    {
      title: "Platform Quick Start",
      description: "Get up and running with NHSCareHub in 5 minutes",
      duration: "5 min read",
      difficulty: "Beginner",
      icon: Zap,
    },
    {
      title: "Account Setup & Verification",
      description: "Complete guide to setting up your NHS professional account",
      duration: "10 min read",
      difficulty: "Beginner",
      icon: CheckCircle,
    },
    {
      title: "Advanced Features Guide",
      description: "Unlock the full potential of the platform",
      duration: "15 min read",
      difficulty: "Advanced",
      icon: BookOpen,
    },
  ];

  const handleDownload = (documentTitle: string) => {
    // Generate a mock document
    const documentData = {
      title: documentTitle,
      downloadDate: new Date().toISOString(),
      version: "v2.1.0",
      generatedBy: "NHSCareHub Documentation System",
      content: `${documentTitle} - Comprehensive guide for NHS healthcare professionals`,
      lastUpdated: "2025",
    };

    const blob = new Blob([JSON.stringify(documentData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${documentTitle.toLowerCase().replace(/\s+/g, "-")}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-poppins font-bold text-gray-900">
              Documentation
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides, manuals, and documentation to help you make
            the most of the NHSCareHub platform and services.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>
                Last updated: {new Date().toLocaleDateString("en-GB")}
              </span>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="w-3 h-3 mr-1" />
              All Documents Current
            </Badge>
          </div>
        </div>

        {/* Quick Start Guides */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Quick Start Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickStartGuides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <Badge
                        variant={
                          guide.difficulty === "Beginner"
                            ? "secondary"
                            : "outline"
                        }
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {guide.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{guide.duration}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="space-y-12">
          {documentationSections.map((section, sectionIndex) => {
            const SectionIcon = section.icon;
            return (
              <div key={sectionIndex}>
                <div className="flex items-center space-x-3 mb-6">
                  <div
                    className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center`}
                  >
                    <SectionIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {section.title}
                    </h2>
                    <p className="text-gray-600">{section.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.documents.map((doc, docIndex) => (
                    <Card
                      key={docIndex}
                      className="hover:shadow-md transition-shadow"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">
                              {doc.title}
                            </CardTitle>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline">{doc.type}</Badge>
                              <span className="text-sm text-gray-500">
                                {doc.size}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-sm text-gray-600 space-y-1">
                          <div className="flex justify-between">
                            <span>Last updated:</span>
                            <span>
                              {new Date(doc.updated).toLocaleDateString(
                                "en-GB",
                              )}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Downloads:</span>
                            <span>{doc.downloads.toLocaleString()}</span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            onClick={() => handleDownload(doc.title)}
                            className="flex-1"
                            size="sm"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">
                Need Additional Documentation?
              </h2>
              <p className="text-lg opacity-90 mb-6">
                Can't find what you're looking for? Our support team can provide
                custom documentation and implementation guides.
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="secondary"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Request Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Version Information */}
        <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Documentation Version
              </h3>
              <p className="text-gray-600">
                Current platform version: v2.1.0 (Released January 2025)
              </p>
            </div>
            <div className="text-right">
              <Badge className="bg-green-100 text-green-800 mb-2">
                <CheckCircle className="w-3 h-3 mr-1" />
                Up to Date
              </Badge>
              <p className="text-sm text-gray-600">
                All documentation reflects the latest platform features and NHS
                guidelines
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
