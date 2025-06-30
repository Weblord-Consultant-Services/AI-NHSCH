import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Play,
  Clock,
  Users,
  Shield,
  Stethoscope,
  Star,
  CheckCircle,
  BookOpen,
  Award,
  Calendar,
  BarChart,
  Download,
  ExternalLink,
} from "lucide-react";

export default function Training() {
  const trainingPaths = [
    {
      icon: Users,
      title: "Staff Recruitment Mastery",
      description:
        "Learn to effectively use our recruitment platform for NHS staffing",
      level: "Beginner to Advanced",
      duration: "4 hours",
      modules: 12,
      enrolled: 2847,
      rating: 4.8,
      completion: 94,
      color: "bg-blue-500",
      topics: [
        "Platform navigation and setup",
        "Creating compelling job listings",
        "Candidate screening techniques",
        "Interview scheduling and management",
      ],
    },
    {
      icon: Shield,
      title: "NHS Compliance Excellence",
      description:
        "Master NHS compliance requirements and regulatory documentation",
      level: "Intermediate",
      duration: "6 hours",
      modules: 18,
      enrolled: 3456,
      rating: 4.9,
      completion: 97,
      color: "bg-green-500",
      topics: [
        "Understanding NHS compliance frameworks",
        "Document management and access",
        "Audit preparation and reporting",
        "Risk assessment procedures",
      ],
    },
    {
      icon: Stethoscope,
      title: "Medical Equipment Procurement",
      description: "Expert guidance on sourcing and managing medical equipment",
      level: "Advanced",
      duration: "5 hours",
      modules: 15,
      enrolled: 1923,
      rating: 4.7,
      completion: 89,
      color: "bg-purple-500",
      topics: [
        "Supplier evaluation and selection",
        "Quality assurance standards",
        "Cost optimization strategies",
        "Inventory management best practices",
      ],
    },
  ];

  const certifications = [
    {
      title: "NHS Digital Platform Specialist",
      description: "Complete certification for healthcare platform management",
      duration: "12 weeks",
      difficulty: "Professional",
      prerequisites: "2+ years NHS experience",
      benefits: [
        "Industry-recognized certification",
        "Career advancement opportunities",
        "Higher salary potential",
        "Professional networking",
      ],
    },
    {
      title: "Healthcare Compliance Officer",
      description:
        "Specialized certification in NHS compliance and regulations",
      duration: "8 weeks",
      difficulty: "Advanced",
      prerequisites: "Basic compliance knowledge",
      benefits: [
        "Regulatory expertise recognition",
        "Audit leadership skills",
        "Risk management certification",
        "Professional development",
      ],
    },
  ];

  const webinars = [
    {
      title: "NHS Digital Transformation 2025: What's New",
      presenter: "Dr. Sarah Johnson, NHS Digital Director",
      date: "2025-01-25",
      time: "14:00 GMT",
      duration: "1 hour",
      attendees: 847,
      type: "Live",
    },
    {
      title: "Advanced Recruitment Strategies for Healthcare",
      presenter: "Michael Chen, Recruitment Specialist",
      date: "2025-01-30",
      time: "10:00 GMT",
      duration: "45 minutes",
      attendees: 623,
      type: "Live",
    },
    {
      title: "Compliance Best Practices: Real-World Case Studies",
      presenter: "Dr. Priya Patel, Compliance Expert",
      date: "2025-02-05",
      time: "15:30 GMT",
      duration: "1.5 hours",
      attendees: 1234,
      type: "Live",
    },
  ];

  const resources = [
    {
      title: "Platform User Manual",
      type: "PDF Guide",
      size: "3.2 MB",
      downloads: 8945,
    },
    {
      title: "Video Tutorial Series",
      type: "Video Content",
      size: "2.1 GB",
      downloads: 5234,
    },
    {
      title: "Quick Reference Cards",
      type: "PDF Cards",
      size: "1.8 MB",
      downloads: 6789,
    },
  ];

  const handleEnroll = (courseName: string) => {
    alert(`Enrollment initiated for: ${courseName}`);
  };

  const handleDownloadResource = (resourceName: string) => {
    const resourceData = {
      title: resourceName,
      downloadDate: new Date().toISOString(),
      type: "Training Resource",
      platform: "NHSCareHub Training Center",
      content: `${resourceName} - NHS healthcare training material`,
    };

    const blob = new Blob([JSON.stringify(resourceData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${resourceName.toLowerCase().replace(/\s+/g, "-")}.json`;
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
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-poppins font-bold text-gray-900">
              NHS Training Center
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed for NHS healthcare
            professionals to master our platform and advance their careers.
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>12,847+ learners enrolled</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>NHS-accredited programs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span>4.8/5 average rating</span>
            </div>
          </div>
        </div>

        {/* Training Paths */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Professional Training Paths
          </h2>
          <div className="space-y-8">
            {trainingPaths.map((path, index) => {
              const Icon = path.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="lg:col-span-2 p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 ${path.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                            {path.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {path.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <Badge variant="outline">{path.level}</Badge>
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{path.duration}</span>
                            </span>
                            <span>{path.modules} modules</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            What you'll learn:
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            {path.topics.map((topic, topicIndex) => (
                              <li
                                key={topicIndex}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Completion Rate:</span>
                            <span className="font-semibold">
                              {path.completion}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-500 h-2 rounded-full"
                              style={{ width: `${path.completion}%` }}
                            ></div>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Rating:</span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="font-semibold">
                                {path.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          onClick={() => handleEnroll(path.title)}
                          className="px-8"
                        >
                          Enroll Now
                        </Button>
                        <Button variant="outline">
                          <Play className="w-4 h-4 mr-2" />
                          Preview Course
                        </Button>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8 flex flex-col justify-center">
                      <div className="text-center space-y-4">
                        <div>
                          <div className="text-3xl font-bold text-primary">
                            {path.enrolled.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-600">
                            Learners enrolled
                          </div>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-500 fill-current"
                            />
                          ))}
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          NHS Accredited
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Certifications */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Professional Certifications
            </h2>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {cert.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{cert.description}</p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Program Details:
                            </h4>
                            <div className="space-y-1 text-sm text-gray-600">
                              <div>Duration: {cert.duration}</div>
                              <div>Level: {cert.difficulty}</div>
                              <div>Prerequisites: {cert.prerequisites}</div>
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">
                              Benefits:
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {cert.benefits.map((benefit, benefitIndex) => (
                                <li
                                  key={benefitIndex}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button onClick={() => handleEnroll(cert.title)}>
                            Apply for Certification
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Webinars */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Upcoming Webinars
            </h2>
            <div className="space-y-4">
              {webinars.map((webinar, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <Badge
                          className={
                            webinar.type === "Live"
                              ? "bg-red-100 text-red-800"
                              : "bg-blue-100 text-blue-800"
                          }
                        >
                          {webinar.type}
                        </Badge>
                        <span className="text-sm text-gray-600">
                          {webinar.attendees} registered
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {webinar.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {webinar.presenter}
                      </p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(webinar.date).toLocaleDateString("en-GB")}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {webinar.time} ({webinar.duration})
                          </span>
                        </div>
                      </div>
                      <Button size="sm" className="w-full">
                        Register Free
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Training Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Training Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        {resource.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Badge variant="outline">{resource.type}</Badge>
                        <span>{resource.size}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {resource.downloads.toLocaleString()} downloads
                  </div>
                  <Button
                    onClick={() => handleDownloadResource(resource.title)}
                    size="sm"
                    className="w-full"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Stats */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">12,847</div>
                <div className="text-sm opacity-90">Active Learners</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">45</div>
                <div className="text-sm opacity-90">Training Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">94%</div>
                <div className="text-sm opacity-90">Completion Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4.8/5</div>
                <div className="text-sm opacity-90">Average Rating</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
