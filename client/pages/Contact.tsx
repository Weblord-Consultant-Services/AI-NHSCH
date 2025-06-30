import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  User,
  Building,
  AlertCircle,
  CheckCircle,
  Heart,
  Headphones,
  Users,
  Shield,
  Stethoscope,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      value: "+44 203 488 8343",
      description: "Mon-Fri 8:00 AM - 6:00 PM GMT",
      action: "tel:+442034888343",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "support@nhscarehub.uk",
      description: "Response within 24 hours",
      action: "mailto:support@nhscarehub.uk",
      color: "bg-green-500",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available Now",
      description: "Mon-Fri 8:00 AM - 8:00 PM GMT",
      action: "#",
      color: "bg-purple-500",
    },
    {
      icon: MapPin,
      title: "Office Address",
      value: "85 Great Portland Street",
      description: "First Floor, London, England, W1W 7LT",
      action: "#",
      color: "bg-orange-500",
    },
  ];

  const departments = [
    {
      icon: Users,
      title: "Staff Recruitment Support",
      email: "recruitment@nhscarehub.uk",
      description:
        "Job applications, candidate verification, placement support",
    },
    {
      icon: Shield,
      title: "Compliance & Documentation",
      email: "compliance@nhscarehub.uk",
      description: "Document access, compliance queries, regulatory support",
    },
    {
      icon: Stethoscope,
      title: "Equipment & Procurement",
      email: "equipment@nhscarehub.uk",
      description: "Equipment sourcing, supplier queries, procurement support",
    },
    {
      icon: Headphones,
      title: "Technical Support",
      email: "technical@nhscarehub.uk",
      description: "Platform issues, account problems, technical assistance",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM GMT" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM GMT" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Support", hours: "24/7 for critical NHS operations" },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <TopBanner />
        <Navigation />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for contacting NHSCareHub. Our team will respond to your
              inquiry within 24 hours.
            </p>
            <div className="space-x-4">
              <Button onClick={() => setSubmitted(false)} size="lg">
                Send Another Message
              </Button>
              <Button variant="outline" size="lg">
                Return to Homepage
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-poppins font-bold text-gray-900">
              Contact NHSCareHub
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our NHS healthcare platform support team. We're
            here to help with recruitment, compliance, equipment, and technical
            support.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => {
                  if (
                    method.action.startsWith("tel:") ||
                    method.action.startsWith("mailto:")
                  ) {
                    window.open(method.action, "_self");
                  }
                }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="font-medium text-primary mb-1">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="w-5 h-5" />
                  <span>Send us a Message</span>
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="your.email@nhs.uk"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          type="tel"
                          placeholder="+44 7XXX XXXXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Organization
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="NHS Trust / Hospital"
                          value={formData.organization}
                          onChange={(e) =>
                            handleInputChange("organization", e.target.value)
                          }
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Inquiry Category *
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        handleInputChange("category", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="recruitment">Staff Recruitment</option>
                      <option value="compliance">
                        Compliance & Documentation
                      </option>
                      <option value="equipment">Equipment & Procurement</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="partnership">
                        Partnership Opportunities
                      </option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject *</label>
                    <Input
                      type="text"
                      placeholder="Brief subject of your inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <textarea
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px] resize-y"
                      required
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">
                          Emergency Support
                        </h4>
                        <p className="text-sm text-blue-700">
                          For urgent NHS operational issues, please call our
                          24/7 emergency hotline at{" "}
                          <a
                            href="tel:+442034888343"
                            className="font-semibold underline"
                          >
                            +44 203 488 8343
                          </a>{" "}
                          instead of using this form.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-lg py-6"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        {schedule.day}
                      </span>
                      <span className="text-sm font-medium">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Department Contacts */}
            <Card>
              <CardHeader>
                <CardTitle>Department Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departments.map((dept, index) => {
                    const Icon = dept.icon;
                    return (
                      <div
                        key={index}
                        className="border-b last:border-0 pb-4 last:pb-0"
                      >
                        <div className="flex items-start space-x-3">
                          <Icon className="w-5 h-5 text-primary mt-1" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {dept.title}
                            </h4>
                            <a
                              href={`mailto:${dept.email}`}
                              className="text-sm text-primary hover:underline"
                            >
                              {dept.email}
                            </a>
                            <p className="text-xs text-gray-600 mt-1">
                              {dept.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() =>
                      window.open("https://www.nhs.uk/help/", "_blank")
                    }
                  >
                    NHS Help Centre
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() =>
                      window.open(
                        "https://www.nhs.uk/using-the-nhs/about-the-nhs/feedback-and-complaints/",
                        "_blank",
                      )
                    }
                  >
                    NHS Complaints
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() =>
                      window.open(
                        "https://www.nhs.uk/about-us/nhs-website-privacy-policy/",
                        "_blank",
                      )
                    }
                  >
                    Privacy Policy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
