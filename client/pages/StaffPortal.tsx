import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import TopBanner from "@/components/TopBanner";
import {
  Users,
  UserPlus,
  Briefcase,
  MapPin,
  Clock,
  Star,
  ExternalLink,
  Download,
  Calendar,
  Phone,
} from "lucide-react";

interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  agency: string;
  urgency: "high" | "medium" | "low";
  applications: number;
}

export default function StaffPortal() {
  const [jobs, setJobs] = useState<JobListing[]>([]);

  useEffect(() => {
    // Simulate real job data from NHS recruitment agencies
    const simulatedJobs: JobListing[] = [
      {
        id: 1,
        title: "Registered Nurse - ICU",
        department: "Intensive Care",
        location: "London, UK",
        salary: "£28,000 - £34,000",
        type: "Permanent",
        posted: "2 hours ago",
        agency: "NHS Professionals",
        urgency: "high",
        applications: 23,
      },
      {
        id: 2,
        title: "Healthcare Assistant",
        department: "General Medicine",
        location: "Manchester, UK",
        salary: "£19,000 - £21,000",
        type: "Full-time",
        posted: "5 hours ago",
        agency: "Bank Partners",
        urgency: "medium",
        applications: 41,
      },
      {
        id: 3,
        title: "Senior Physiotherapist",
        department: "Rehabilitation",
        location: "Birmingham, UK",
        salary: "£35,000 - £42,000",
        type: "Permanent",
        posted: "1 day ago",
        agency: "Allied Health Professionals",
        urgency: "high",
        applications: 18,
      },
      {
        id: 4,
        title: "Mental Health Nurse",
        department: "Psychiatry",
        location: "Leeds, UK",
        salary: "£26,000 - £32,000",
        type: "Contract",
        posted: "2 days ago",
        agency: "Pulse Healthcare",
        urgency: "medium",
        applications: 29,
      },
      {
        id: 5,
        title: "Paramedic",
        department: "Emergency Services",
        location: "Bristol, UK",
        salary: "£25,000 - £30,000",
        type: "Permanent",
        posted: "3 days ago",
        agency: "Emergency Staffing Solutions",
        urgency: "high",
        applications: 52,
      },
    ];

    setJobs(simulatedJobs);
  }, []);

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

  const recruitmentAgencies = [
    {
      name: "NHS Professionals",
      url: "https://www.nhsprofessionals.nhs.uk/",
      specialties: ["Nursing", "Medical", "Allied Health"],
      rating: 4.8,
      activeJobs: 1247,
    },
    {
      name: "Bank Partners",
      url: "https://www.bankpartners.co.uk/",
      specialties: ["Healthcare Assistants", "Support Workers"],
      rating: 4.6,
      activeJobs: 856,
    },
    {
      name: "Pulse Healthcare",
      url: "https://www.pulse-health.com/",
      specialties: ["Mental Health", "Community Care"],
      rating: 4.7,
      activeJobs: 623,
    },
    {
      name: "Allied Health Professionals",
      url: "https://www.ahp.jobs/",
      specialties: ["Physiotherapy", "Occupational Therapy"],
      rating: 4.9,
      activeJobs: 445,
    },
  ];

  const handleDownloadCV = () => {
    const cvData = {
      generatedDate: new Date().toISOString(),
      template: "NHS Healthcare Professional CV Template",
      sections: [
        "Personal Information",
        "Professional Summary",
        "Clinical Experience",
        "Education & Qualifications",
        "Professional Development",
        "References",
      ],
      guidelines: "Optimized for NHS recruitment standards 2025",
    };

    const blob = new Blob([JSON.stringify(cvData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nhs-cv-template-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-poppins font-bold text-gray-900 mb-2">
            NHS Staff Portal
          </h1>
          <p className="text-gray-600">
            Connect with qualified healthcare professionals and trusted
            recruitment agencies
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Button
            onClick={handleDownloadCV}
            className="flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>CV Template</span>
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open("https://www.jobs.nhs.uk/", "_blank")}
          >
            <UserPlus className="w-4 h-4 mr-2" />
            NHS Jobs Portal
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              window.open("https://www.healthcareers.nhs.uk/", "_blank")
            }
          >
            <Briefcase className="w-4 h-4 mr-2" />
            Career Guidance
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open("https://www.nhsbsa.nhs.uk/", "_blank")}
          >
            <Calendar className="w-4 h-4 mr-2" />
            Training Portal
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-poppins font-bold text-gray-900">
                Latest Job Opportunities
              </h2>
              <Badge className="bg-blue-100 text-blue-800">
                {jobs.length} Active Positions
              </Badge>
            </div>

            <div className="space-y-4">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-gray-600">{job.department}</p>
                      </div>
                      <Badge className={getUrgencyColor(job.urgency)}>
                        {job.urgency} priority
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{job.posted}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{job.applications} applicants</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-lg font-semibold text-primary">
                          {job.salary}
                        </div>
                        <div className="text-sm text-gray-600">
                          via {job.agency}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Save Job
                        </Button>
                        <Button
                          size="sm"
                          onClick={() =>
                            window.open("https://www.jobs.nhs.uk/", "_blank")
                          }
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recruitment Agencies */}
          <div className="space-y-6">
            <h2 className="text-2xl font-poppins font-bold text-gray-900">
              Trusted Recruitment Partners
            </h2>

            <div className="space-y-4">
              {recruitmentAgencies.map((agency, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{agency.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">{agency.rating}</span>
                      <span className="text-gray-600">rating</span>
                    </div>

                    <div className="text-sm text-gray-600">
                      <strong>{agency.activeJobs}</strong> active positions
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {agency.specialties.map((specialty, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(agency.url, "_blank")}
                        className="flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Site
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Staff Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Staff Statistics 2025</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Total NHS Staff</span>
                  <span className="font-semibold">1.3M+</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Vacancies</span>
                  <span className="font-semibold text-orange-600">47K+</span>
                </div>
                <div className="flex justify-between">
                  <span>Placement Rate</span>
                  <span className="font-semibold text-green-600">89%</span>
                </div>
                <div className="flex justify-between">
                  <span>Avg. Hiring Time</span>
                  <span className="font-semibold">18 days</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
