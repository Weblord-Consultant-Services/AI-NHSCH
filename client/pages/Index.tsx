import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import CoreServicesShowreel from "@/components/CoreServicesShowreel";
import ConnectModal from "@/components/ConnectModal";
import LiveChatbot from "@/components/LiveChatbot";
import ScrollToTop from "@/components/ScrollToTop";
import {
  Users,
  Shield,
  Clock,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Heart,
  Stethoscope,
  Download,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";

export default function Index() {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const stats = [
    { icon: Users, value: "47,392", label: "Registered Healthcare Staff" },
    { icon: Shield, value: "1,247", label: "Compliance Documents" },
    { icon: Stethoscope, value: "15,683", label: "Equipment Listed" },
    { icon: TrendingUp, value: "98.7%", label: "Success Rate" },
  ];

  const coreServices = [
    {
      title: "Staff Recruitment Portal",
      description:
        "Connect with qualified healthcare professionals across the UK",
      icon: Users,
      href: "/staff-portal",
      color: "from-blue-500 to-blue-600",
      stats: [
        "2,847 Active Jobs",
        "47,392 Registered Staff",
        "89% Success Rate",
      ],
    },
    {
      title: "Compliance Documentation",
      description: "Access latest NHS guidelines and regulatory documents",
      icon: Shield,
      href: "/compliance",
      color: "from-green-500 to-green-600",
      stats: ["1,247 Documents", "98.7% Compliance", "Real-time Updates"],
    },
    {
      title: "Equipment Marketplace",
      description: "Buy and sell medical equipment from trusted suppliers",
      icon: Stethoscope,
      href: "/equipment",
      color: "from-purple-500 to-purple-600",
      stats: ["15,683 Items", "892 Suppliers", "NHS Approved"],
    },
  ];

  const healthcareCentres = [
    {
      name: "Royal London Hospital",
      type: "Major Trauma Centre",
      location: "Whitechapel, London",
      rating: 4.8,
      services: ["Emergency Care", "Trauma Surgery", "Cardiology"],
      phone: "+44 20 7377 7000",
      specialties: "Trauma, Emergency Medicine, Cardiology",
    },
    {
      name: "Addenbrooke's Hospital",
      type: "Teaching Hospital",
      location: "Cambridge",
      rating: 4.9,
      services: ["Cancer Care", "Neurosurgery", "Transplants"],
      phone: "+44 1223 245151",
      specialties: "Oncology, Neurosurgery, Organ Transplants",
    },
    {
      name: "Birmingham Children's Hospital",
      type: "Specialist Children's Hospital",
      location: "Birmingham",
      rating: 4.7,
      services: ["Paediatrics", "Child Surgery", "NICU"],
      phone: "+44 121 333 9999",
      specialties: "Paediatric Care, Child Development, Emergency",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Clinical Director",
      hospital: "Manchester Royal Infirmary",
      content:
        "NHSCareHub has transformed how we manage staffing and compliance. The platform saves us hours every week.",
      rating: 5,
    },
    {
      name: "James Thompson",
      role: "Equipment Manager",
      hospital: "Edinburgh Royal Hospital",
      content:
        "The equipment marketplace is incredible - we've saved thousands on medical supplies while maintaining quality.",
      rating: 5,
    },
    {
      name: "Dr. Emily Chen",
      role: "Compliance Officer",
      hospital: "Cardiff University Hospital",
      content:
        "Real-time compliance tracking and instant access to documentation has made our audits seamless.",
      rating: 5,
    },
  ];

  const handleDownloadPDF = (type: string) => {
    const pdfData = {
      type,
      generatedDate: new Date().toISOString(),
      content: `NHS Care Hub ${type} - Comprehensive Healthcare Management Guide`,
      lastUpdated: "2025",
      version: "v2.1.0",
    };

    const blob = new Blob([JSON.stringify(pdfData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nhs-${type.toLowerCase().replace(/\s+/g, "-")}-guide-2025.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Navigation />

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
                  All-in-One Healthcare Platform
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Streamline healthcare operations with staff recruitment,
                  compliance management, and equipment sourcing - all in one
                  comprehensive platform.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">
                    Real-time staff recruitment and matching
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">
                    Comprehensive compliance documentation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary" />
                  <span className="text-gray-700">
                    NHS-approved equipment marketplace
                  </span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link to="/staff-portal">
                  <Button size="lg" className="text-lg px-8 py-4">
                    Explore Services
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={() => setIsConnectModalOpen(true)}
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Guide
                </Button>
              </div>
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

      {/* Core Services Showreel */}
      <CoreServicesShowreel />

      {/* Core Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Our Core Healthcare Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three essential services powering healthcare excellence across the
              UK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link key={index} to={service.href}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        <div className="text-center">
                          <h4 className="text-2xl font-poppins font-bold text-gray-900 mb-3">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 mb-6">
                            {service.description}
                          </p>
                        </div>

                        <div className="space-y-2">
                          {service.stats.map((stat, statIndex) => (
                            <div
                              key={statIndex}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-gray-600">
                                {stat}
                              </span>
                            </div>
                          ))}
                        </div>

                        <Button className="w-full">
                          Access {service.title.split(" ")[0]}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Healthcare Centres Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Trusted Healthcare Centres
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with leading healthcare facilities across the UK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {healthcareCentres.map((centre, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-1">
                        {centre.name}
                      </h4>
                      <Badge variant="secondary" className="mb-2">
                        {centre.type}
                      </Badge>
                    </div>

                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{centre.location}</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{centre.rating}</span>
                      <span className="text-gray-600">rating</span>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">
                        Specialties:
                      </h5>
                      <p className="text-sm text-gray-600">
                        {centre.specialties}
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          window.open(`tel:${centre.phone}`, "_self")
                        }
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          window.open(
                            "https://www.nhs.uk/service-search/",
                            "_blank",
                          )
                        }
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() =>
                window.open("https://www.nhs.uk/service-search/", "_blank")
              }
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Search All Healthcare Centres
            </Button>
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
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 space-y-4">
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
                    <div className="text-sm text-gray-500">
                      {testimonial.hospital}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Connect Modal */}
      <ConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        initialMode="signup"
      />

      {/* Live Chatbot */}
      <LiveChatbot />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
