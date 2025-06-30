import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import {
  Heart,
  Users,
  Shield,
  Stethoscope,
  Target,
  Award,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Building,
  Calendar,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Download,
  User,
} from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, value: "47,392", label: "Healthcare Professionals" },
    { icon: Building, value: "1,247", label: "NHS Trusts Connected" },
    { icon: Shield, value: "98.7%", label: "Compliance Rate" },
    { icon: Globe, value: "500+", label: "Healthcare Facilities" },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Concept Development",
      description:
        "Initial research and development phase focusing on NHS healthcare challenges",
    },
    {
      year: "2024",
      title: "Platform Launch",
      description:
        "Beta launch with select NHS trusts for staff recruitment and compliance management",
    },
    {
      year: "2025",
      title: "Full Deployment",
      description:
        "Complete platform rollout with equipment marketplace and AI-powered features",
    },
    {
      year: "2026",
      title: "National Expansion",
      description:
        "Planned integration with all major NHS trusts across England, Wales, and Scotland",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description:
        "Every solution we build is designed to ultimately improve patient outcomes and healthcare delivery.",
    },
    {
      icon: Shield,
      title: "Regulatory Excellence",
      description:
        "Maintaining the highest standards of NHS compliance and data security across all our services.",
    },
    {
      icon: Users,
      title: "Healthcare Community",
      description:
        "Connecting and empowering healthcare professionals to deliver exceptional care together.",
    },
    {
      icon: TrendingUp,
      title: "Innovation & Efficiency",
      description:
        "Leveraging cutting-edge technology to streamline healthcare operations and reduce administrative burden.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Executive Officer",
      background: "Former NHS Director with 15+ years healthcare leadership",
      image: "/placeholder.svg",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      background: "Healthcare tech veteran, former NHS Digital lead developer",
      image: "/placeholder.svg",
    },
    {
      name: "Dr. Priya Patel",
      role: "Head of Clinical Affairs",
      background: "Practicing GP and NHS compliance specialist",
      image: "/placeholder.svg",
    },
    {
      name: "James Wilson",
      role: "Head of Operations",
      background: "Healthcare recruitment expert with 20+ years experience",
      image: "/placeholder.svg",
    },
  ];

  const certifications = [
    "ISO 27001 - Information Security Management",
    "GDPR Compliant - Data Protection Certification",
    "NHS Digital Standards - Approved Healthcare Platform",
    "Cyber Essentials Plus - Government Security Certification",
    "Care Quality Commission - Healthcare Service Provider",
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-poppins font-bold text-gray-900">
                About NHSCareHub
              </h1>
            </div>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transforming healthcare delivery through innovative digital
              solutions that connect professionals, ensure compliance, and
              streamline operations across the NHS ecosystem.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center border-0 shadow-lg bg-white"
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
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Target className="w-8 h-8 text-primary" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To revolutionize healthcare delivery by providing NHS
                  organizations with a comprehensive digital platform that
                  seamlessly integrates staff recruitment, compliance
                  management, and equipment procurement.
                </p>
                <p className="text-gray-600">
                  We believe that by reducing administrative burden and
                  improving operational efficiency, healthcare professionals can
                  focus on what matters most - delivering exceptional patient
                  care.
                </p>
                <div className="pt-4">
                  <Badge className="bg-blue-100 text-blue-800 mr-2">
                    NHS Focused
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 mr-2">
                    Patient Centered
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800">
                    Innovation Driven
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Award className="w-8 h-8 text-primary" />
                  <span>Our Vision</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the leading digital healthcare platform that
                  empowers every NHS organization across the UK with the tools
                  and resources needed to deliver world-class healthcare
                  services.
                </p>
                <p className="text-gray-600">
                  By 2030, we envision a fully connected NHS ecosystem where
                  staff recruitment, compliance management, and equipment
                  procurement are seamlessly integrated, data-driven, and
                  optimized for both efficiency and patient outcomes.
                </p>
                <div className="pt-4">
                  <Badge className="bg-orange-100 text-orange-800 mr-2">
                    2030 Vision
                  </Badge>
                  <Badge className="bg-red-100 text-red-800 mr-2">
                    National Impact
                  </Badge>
                  <Badge className="bg-indigo-100 text-indigo-800">
                    Digital First
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at NHSCareHub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to the leading NHS digital platform
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>

                  {/* Content */}
                  <Card
                    className={`w-5/12 ${
                      index % 2 === 0 ? "mr-auto" : "ml-auto"
                    } border-0 shadow-lg`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className="bg-primary text-white">
                          {milestone.year}
                        </Badge>
                        <Calendar className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced healthcare and technology leaders driving our mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-poppins font-bold text-gray-900 mb-6">
                Certifications & Compliance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                NHSCareHub maintains the highest standards of security,
                compliance, and quality to ensure the safety and privacy of NHS
                data and operations.
              </p>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Compliance Documentation
                </Button>
              </div>
            </div>
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    NHS Digital Standards
                  </h3>
                  <Badge className="bg-green-100 text-green-800 mb-4">
                    Fully Compliant
                  </Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Data Security</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>GDPR Compliance</span>
                    <Badge className="bg-green-100 text-green-800">100%</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>NHS Standards</span>
                    <Badge className="bg-blue-100 text-blue-800">
                      Approved
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Security Rating</span>
                    <Badge className="bg-purple-100 text-purple-800">
                      AAA+
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-poppins font-bold mb-4">
              Connect With Us
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to transform your healthcare operations? Get in touch with
              our team today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="opacity-90">+44 203 488 8343</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="opacity-90">hello@nhscarehub.uk</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Office</h3>
                <p className="opacity-90">London, United Kingdom</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
