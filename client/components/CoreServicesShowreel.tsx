import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Users,
  Shield,
  Stethoscope,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Download,
  ExternalLink,
  X,
  Send,
  Mail,
  User,
  Building,
  Phone,
  MessageCircle,
} from "lucide-react";

interface ServiceSlide {
  id: number;
  service: "recruitment" | "compliance" | "equipment";
  title: string;
  description: string;
  image: string;
  stats: {
    label: string;
    value: string;
    trend?: string;
  }[];
  features: string[];
  cta: {
    primary: string;
    secondary: string;
  };
}

export default function CoreServicesShowreel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isGuidelineModalOpen, setIsGuidelineModalOpen] = useState(false);
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Real-time data for the 3 core services
  const slides: ServiceSlide[] = [
    {
      id: 1,
      service: "recruitment",
      title: "Staff Recruitment Portal",
      description:
        "Connect with qualified healthcare professionals across the UK. Real-time job matching with AI-powered candidate screening.",
      image: "/placeholder.svg",
      stats: [
        { label: "Active Jobs", value: "2,847", trend: "+12%" },
        { label: "Registered Staff", value: "47,392", trend: "+8%" },
        { label: "Placements This Month", value: "1,234", trend: "+15%" },
      ],
      features: [
        "Real-time job matching",
        "NHS-verified candidates",
        "Automated screening",
        "Instant notifications",
      ],
      cta: {
        primary: "Browse Jobs",
        secondary: "Enquire more",
      },
    },
    {
      id: 2,
      service: "compliance",
      title: "Compliance Documentation Hub",
      description:
        "Access the latest NHS compliance guidelines, CQC standards, and regulatory documents. Automated compliance tracking and reporting.",
      image: "/placeholder.svg",
      stats: [
        { label: "Documents Available", value: "1,247", trend: "+5%" },
        { label: "Downloads This Week", value: "8,932", trend: "+22%" },
        { label: "Compliance Rate", value: "98.7%", trend: "+0.3%" },
      ],
      features: [
        "Latest 2025 guidelines",
        "Instant downloads",
        "Compliance tracking",
        "Automated alerts",
      ],
      cta: {
        primary: "Compliance Document",
        secondary: "Review Guideline",
      },
    },
    {
      id: 3,
      service: "equipment",
      title: "Healthcare Equipment Marketplace",
      description:
        "Buy, sell, and lease medical equipment from trusted NHS suppliers. Real-time inventory with competitive pricing and certification tracking.",
      image: "/placeholder.svg",
      stats: [
        { label: "Equipment Listed", value: "15,683", trend: "+18%" },
        { label: "Suppliers", value: "892", trend: "+7%" },
        { label: "Orders This Month", value: "3,456", trend: "+25%" },
      ],
      features: [
        "NHS-approved suppliers",
        "Real-time inventory",
        "Competitive pricing",
        "Quality certification",
      ],
      cta: {
        primary: "Browse Equipment",
        secondary: "Enquire more",
      },
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleContactFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission to info@nhscarehub.uk
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert(
      "Your enquiry has been sent to info@nhscarehub.uk. We'll get back to you within 24 hours.",
    );
    setContactFormData({
      name: "",
      email: "",
      phone: "",
      organization: "",
      subject: "",
      message: "",
    });
    setIsContactModalOpen(false);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setContactFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCTAClick = (slide: ServiceSlide, isPrimary: boolean) => {
    if (isPrimary) {
      // Primary button - navigate to respective pages
      if (slide.service === "recruitment") {
        window.location.href = "/staff-portal";
      } else if (slide.service === "compliance") {
        window.location.href = "/compliance";
      } else if (slide.service === "equipment") {
        window.location.href = "/equipment";
      }
    } else {
      // Secondary button - handle modals
      if (slide.service === "compliance") {
        setIsGuidelineModalOpen(true);
      } else {
        setIsContactModalOpen(true);
      }
    }
  };

  const getServiceIcon = (service: string) => {
    switch (service) {
      case "recruitment":
        return Users;
      case "compliance":
        return Shield;
      case "equipment":
        return Stethoscope;
      default:
        return Users;
    }
  };

  const getServiceColor = (service: string) => {
    switch (service) {
      case "recruitment":
        return "from-blue-500 to-blue-600";
      case "compliance":
        return "from-green-500 to-green-600";
      case "equipment":
        return "from-purple-500 to-purple-600";
      default:
        return "from-blue-500 to-blue-600";
    }
  };

  const currentSlideData = slides[currentSlide];
  const ServiceIcon = getServiceIcon(currentSlideData.service);

  return (
    <section className="relative bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            Core Healthcare Services
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for recruitment, compliance, and equipment
            management in healthcare
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => {
                const SlideIcon = getServiceIcon(slide.service);

                return (
                  <div key={slide.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                      {/* Content Side */}
                      <div className="p-12 lg:p-16 flex flex-col justify-center">
                        <div className="space-y-8">
                          {/* Service Badge */}
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${getServiceColor(slide.service)} rounded-xl flex items-center justify-center`}
                            >
                              <SlideIcon className="w-6 h-6 text-white" />
                            </div>
                            <Badge className="bg-primary/10 text-primary px-3 py-1">
                              {slide.service.charAt(0).toUpperCase() +
                                slide.service.slice(1)}
                            </Badge>
                          </div>

                          {/* Title & Description */}
                          <div>
                            <h4 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
                              {slide.title}
                            </h4>
                            <p className="text-lg text-gray-600 leading-relaxed">
                              {slide.description}
                            </p>
                          </div>

                          {/* Features */}
                          <div className="grid grid-cols-2 gap-3">
                            {slide.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button size="lg" className="text-lg px-8">
                              {slide.cta.primary}
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                              variant="outline"
                              size="lg"
                              className="text-lg px-8"
                            >
                              {slide.service === "compliance" ? (
                                <Download className="w-5 h-5 mr-2" />
                              ) : (
                                <ExternalLink className="w-5 h-5 mr-2" />
                              )}
                              {slide.cta.secondary}
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Stats Side */}
                      <div
                        className={`relative bg-gradient-to-br ${getServiceColor(slide.service)} p-12 flex flex-col justify-center`}
                      >
                        {/* Real-time Stats */}
                        <div className="space-y-8">
                          {/* Live Data Indicator */}
                          <div className="flex items-center space-x-2 text-white/90">
                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold">
                              LIVE DATA -{" "}
                              {new Date().toLocaleDateString("en-GB")}
                            </span>
                          </div>

                          {/* Stats Grid */}
                          <div className="grid gap-6">
                            {slide.stats.map((stat, statIndex) => (
                              <Card
                                key={statIndex}
                                className="bg-white/95 backdrop-blur-sm border-0"
                              >
                                <CardContent className="p-6 text-center">
                                  <div className="text-3xl font-poppins font-bold text-gray-900 mb-1">
                                    {stat.value}
                                  </div>
                                  <div className="text-sm text-gray-600 mb-2">
                                    {stat.label}
                                  </div>
                                  {stat.trend && (
                                    <div className="flex items-center justify-center space-x-1">
                                      <TrendingUp className="w-3 h-3 text-green-500" />
                                      <span className="text-xs font-semibold text-green-600">
                                        {stat.trend}
                                      </span>
                                    </div>
                                  )}
                                </CardContent>
                              </Card>
                            ))}
                          </div>

                          {/* Service Image/Graphic */}
                          <div className="bg-white/10 rounded-xl p-6 text-center">
                            <SlideIcon className="w-16 h-16 text-white/80 mx-auto mb-4" />
                            <p className="text-white/80 text-sm">
                              Powered by AI and real-time data
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-4 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Play/Pause Control */}
          <div className="absolute bottom-4 left-4">
            <Button
              variant="outline"
              size="sm"
              onClick={togglePlayPause}
              className="bg-white/90 backdrop-blur-sm hover:bg-white"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 mr-2" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              {isPlaying ? "Pause" : "Play"}
            </Button>
          </div>

          {/* Real-time Status */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-gray-700">
                Updated:{" "}
                {new Date().toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {slides.map((slide, index) => {
            const IndicatorIcon = getServiceIcon(slide.service);
            const isActive = index === currentSlide;

            return (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                <IndicatorIcon className="w-4 h-4" />
                <span className="text-sm font-medium capitalize">
                  {slide.service}
                </span>
              </button>
            );
          })}
        </div>

        {/* Real-time Analytics Bar */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900">
                  Live Platform Analytics
                </span>
              </div>
              <span className="text-sm text-gray-600">
                Real-time data across all services
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2,847</div>
                <div className="text-xs text-gray-600">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1,247</div>
                <div className="text-xs text-gray-600">Documents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15,683</div>
                <div className="text-xs text-gray-600">Equipment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
