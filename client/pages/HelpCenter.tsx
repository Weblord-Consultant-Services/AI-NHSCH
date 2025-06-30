import { useState } from "react";
import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  HelpCircle,
  Search,
  Users,
  Shield,
  Stethoscope,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  FileText,
  ExternalLink,
  ChevronRight,
  Star,
  CheckCircle,
} from "lucide-react";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  const helpCategories = [
    {
      icon: Users,
      title: "Staff Recruitment",
      description: "Job applications, profile setup, and recruitment process",
      articles: 24,
      color: "bg-blue-500",
    },
    {
      icon: Shield,
      title: "Compliance & Documentation",
      description: "NHS guidelines, document downloads, and regulatory support",
      articles: 18,
      color: "bg-green-500",
    },
    {
      icon: Stethoscope,
      title: "Equipment & Procurement",
      description: "Medical equipment sourcing, suppliers, and purchasing",
      articles: 15,
      color: "bg-purple-500",
    },
    {
      icon: FileText,
      title: "Account Management",
      description: "Profile settings, verification, and account security",
      articles: 12,
      color: "bg-orange-500",
    },
  ];

  const popularArticles = [
    {
      title: "How to create your NHS professional profile",
      category: "Account Management",
      views: 2847,
      helpful: 95,
    },
    {
      title: "Downloading compliance documents and guidelines",
      category: "Compliance",
      views: 2234,
      helpful: 92,
    },
    {
      title: "Finding and applying for NHS job positions",
      category: "Recruitment",
      views: 3156,
      helpful: 89,
    },
    {
      title: "Verifying your professional credentials",
      category: "Account Management",
      views: 1923,
      helpful: 94,
    },
    {
      title: "Sourcing medical equipment through approved suppliers",
      category: "Equipment",
      views: 1567,
      helpful: 87,
    },
  ];

  const contactOptions = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "24/7 support for urgent NHS operational issues",
      contact: "+44 203 488 8343",
      availability: "Available now",
      response: "Immediate",
      action: "tel:+442034888343",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed questions and non-urgent support requests",
      contact: "support@nhscarehub.uk",
      availability: "24/7",
      response: "Within 4 hours",
      action: "mailto:support@nhscarehub.uk",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Real-time assistance with platform navigation",
      contact: "Chat with our team",
      availability: "Mon-Fri 8AM-8PM",
      response: "< 1 minute",
      action: "#",
    },
  ];

  const quickLinks = [
    { title: "System Status", url: "/system-status" },
    { title: "API Documentation", url: "/api-reference" },
    { title: "Training Resources", url: "/training" },
    { title: "Privacy Policy", url: "/privacy-policy" },
    { title: "Terms of Service", url: "/terms-of-service" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-poppins font-bold text-gray-900">
              NHS CareHub Help Center
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to your questions about our healthcare management
            platform, get support, and learn how to make the most of our
            services.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search for help articles, guides, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-primary"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            Try searching for "job application", "compliance documents", or
            "equipment sourcing"
          </p>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                    <Badge variant="secondary">
                      {category.articles} articles
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Popular Help Articles
          </h2>
          <div className="grid gap-4">
            {popularArticles.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <Badge variant="outline">{article.category}</Badge>
                        <span className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{article.helpful}% helpful</span>
                        </span>
                        <span>{article.views.toLocaleString()} views</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Support */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Support
            </h2>
            <div className="grid gap-6">
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {option.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">
                              {option.description}
                            </p>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-primary font-medium">
                                {option.contact}
                              </span>
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-800"
                              >
                                {option.availability}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600 mb-2">
                            Response time
                          </p>
                          <p className="font-semibold text-primary">
                            {option.response}
                          </p>
                          <Button
                            size="sm"
                            className="mt-2"
                            onClick={() => {
                              if (
                                option.action.startsWith("tel:") ||
                                option.action.startsWith("mailto:")
                              ) {
                                window.open(option.action, "_self");
                              }
                            }}
                          >
                            Contact Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Quick Links
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700">{link.title}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Operating Hours */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Support Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Phone Support</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Live Chat</span>
                    <span className="font-medium">8AM - 8PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Email Support</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      Emergency support available 24/7 for critical NHS
                      operational issues
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Satisfaction */}
            <Card className="mt-6">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-gray-900">4.8/5</p>
                  <p className="text-sm text-gray-600">
                    Average support satisfaction
                  </p>
                </div>
                <p className="text-xs text-gray-500">
                  Based on 2,847 support interactions this month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
