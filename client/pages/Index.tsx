import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Shield,
  Clock,
  TrendingUp,
  Star,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Activity,
  FileText,
  BookOpen,
  Settings,
  UserCheck,
} from "lucide-react";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { icon: Users, value: "2,500+", label: "Healthcare Professionals" },
    { icon: Shield, value: "98.5%", label: "Compliance Rate" },
    { icon: Clock, value: "< 2hrs", label: "Average Response Time" },
    { icon: TrendingUp, value: "500+", label: "Organizations Served" },
  ];

  const features = [
    {
      title: "Healthcare Staff Portal",
      description: "Comprehensive staff management and scheduling system",
      icon: UserCheck,
      featured: true,
    },
    {
      title: "Compliance Hub",
      description: "Regulatory compliance tracking and reporting",
      icon: Shield,
      verified: true,
    },
    {
      title: "Equipment & PPE Store",
      description: "Medical equipment and PPE inventory management",
      icon: Settings,
      featured: false,
    },
    {
      title: "Ofsted Inspections",
      description: "Inspection management and documentation",
      icon: FileText,
      featured: false,
    },
    {
      title: "Treatment Resources",
      description: "Clinical guidelines and treatment protocols",
      icon: BookOpen,
      featured: false,
    },
    {
      title: "Document Management",
      description: "Secure document storage and sharing platform",
      icon: FileText,
      featured: false,
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Clinical Director",
      content:
        "NHSCareHub has transformed how we manage patient care and compliance. The platform is intuitive and saves us hours every week.",
      rating: 5,
    },
    {
      name: "James Thompson",
      role: "Hospital Administrator",
      content:
        "The comprehensive reporting features have made our Ofsted preparations seamless. Highly recommended for healthcare organizations.",
      rating: 5,
    },
    {
      name: "Dr. Emily Chen",
      role: "General Practitioner",
      content:
        "Access to treatment resources and equipment management in one platform has streamlined our entire workflow.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-poppins font-bold text-gray-900">
                  NHSCareHub
                </span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-primary font-medium">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Dashboard
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Staff Portal
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Compliance
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Equipment
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Inspections
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Resources
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Contact</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl font-poppins font-bold text-gray-900 leading-tight">
                  NHSCareHub
                </h1>
                <h2 className="text-3xl font-poppins font-semibold text-gray-700">
                  Digital Healthcare Management Platform
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Streamline healthcare operations with our comprehensive
                  digital platform. Manage staff, ensure compliance, track
                  equipment, and deliver exceptional patient care.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">
                    NHS-approved and certified platform
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">
                    Real-time compliance monitoring
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">
                    Integrated staff management system
                  </span>
                </div>
              </div>

              <Button size="lg" className="text-lg px-8 py-4">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center border-0 shadow-lg"
                >
                  <CardContent className="p-0 space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-poppins font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              Trusted by Healthcare Professionals Nationwide
            </h3>
            <p className="text-lg text-gray-600">
              Our platform serves thousands of healthcare providers across the
              UK
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-poppins font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage modern healthcare operations in one
              integrated platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 border-0 shadow-lg hover:shadow-xl transition-shadow ${
                  feature.featured ? "ring-2 ring-primary" : ""
                }`}
              >
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    {feature.featured && (
                      <Badge className="bg-primary">Featured</Badge>
                    )}
                    {feature.verified && (
                      <Badge className="bg-secondary">Verified</Badge>
                    )}
                  </div>
                  <div>
                    <h4 className="text-xl font-poppins font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="p-8 bg-gradient-to-r from-primary to-secondary text-white text-center">
            <CardContent className="p-0 space-y-4">
              <h4 className="text-2xl font-poppins font-bold">
                Ready to Transform Your Healthcare Operations?
              </h4>
              <p className="text-lg opacity-90">
                Join thousands of healthcare professionals already using
                NHSCareHub
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Your Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                  Why Choose NHSCareHub?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        NHS Compliance Ready
                      </h4>
                      <p className="text-gray-600">
                        Built specifically for NHS standards and regulatory
                        requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Real-time Analytics
                      </h4>
                      <p className="text-gray-600">
                        Monitor performance and compliance metrics in real-time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        Secure & Reliable
                      </h4>
                      <p className="text-gray-600">
                        Enterprise-grade security with 99.9% uptime guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="text-lg px-8">
                Discover All Features
              </Button>
            </div>

            <Card className="p-8 border-0 shadow-xl">
              <CardContent className="p-0 space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-poppins font-bold text-primary mb-2">
                    98.5%
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    Compliance Rate
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Staff Management</span>
                    <span className="font-semibold">99.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "99.2%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Equipment Tracking</span>
                    <span className="font-semibold">97.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-secondary h-2 rounded-full"
                      style={{ width: "97.8%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Documentation</span>
                    <span className="font-semibold">98.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: "98.5%" }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              What Healthcare Professionals Say
            </h3>
            <p className="text-xl text-gray-600">
              Trusted by healthcare professionals across the UK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg">
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-poppins font-bold">
                  NHSCareHub
                </span>
              </div>
              <p className="text-gray-300 max-w-md">
                The comprehensive digital healthcare management platform trusted
                by thousands of healthcare professionals across the UK.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">0800 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">support@nhscarehub.uk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">London, United Kingdom</span>
                </div>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-4">
                Platform
              </h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Staff Portal
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Compliance Hub
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Equipment Store
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Inspections
                </a>
              </div>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-4">
                Support
              </h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Training
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  API Reference
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Status
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-poppins font-semibold mb-4">
                Company
              </h4>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Press
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Partners
                </a>
                <a
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 NHSCareHub. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
