import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Calendar,
  Mail,
  Phone,
  CheckCircle,
  AlertTriangle,
  Scale,
  Shield,
} from "lucide-react";

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-poppins font-bold text-gray-900">
                Terms of Service
              </h1>
              <p className="text-gray-600">
                NHSCareHub Platform Usage Agreement
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Effective date: {currentDate}</span>
            </div>
            <Badge className="bg-blue-100 text-blue-800">
              <Scale className="w-3 h-3 mr-1" />
              Legally Binding
            </Badge>
            <Badge className="bg-green-100 text-green-800">Version 2.1</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-green-600" />
                <span>Agreement Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you and NHSCareHub Ltd ("we", "our", or "us")
                regarding your use of the NHSCareHub digital healthcare
                management platform. By accessing or using our services, you
                agree to be bound by these Terms and our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4">
                  By creating an account or using NHSCareHub services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms. If you do not agree to these Terms, you
                  must not access or use our platform.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Professional Use Only:</strong> This platform is
                    designed exclusively for healthcare professionals and NHS
                    organizations. Users must provide accurate professional
                    credentials during registration.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Platform Services
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">
                  Core Services Provided
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Staff Recruitment
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Job matching services</li>
                      <li>• Candidate verification</li>
                      <li>• Recruitment support</li>
                      <li>• Skills assessment</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Compliance Management
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Document access</li>
                      <li>• Regulatory updates</li>
                      <li>• Compliance tracking</li>
                      <li>• Audit support</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">
                      Equipment Procurement
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Supplier network</li>
                      <li>• Equipment sourcing</li>
                      <li>• Price comparison</li>
                      <li>• Quality assurance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. User Responsibilities
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Account Security
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Maintain confidentiality of your login credentials
                      </li>
                      <li>
                        • Notify us immediately of any unauthorized access
                      </li>
                      <li>
                        • Use strong passwords and enable two-factor
                        authentication
                      </li>
                      <li>
                        • Accept responsibility for all activities under your
                        account
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Professional Conduct
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Provide accurate and up-to-date professional
                        information
                      </li>
                      <li>
                        • Maintain professional standards in all communications
                      </li>
                      <li>
                        • Respect patient confidentiality and data protection
                        laws
                      </li>
                      <li>
                        • Comply with NHS policies and professional regulatory
                        requirements
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Prohibited Activities
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • Sharing accounts or login credentials with others
                      </li>
                      <li>• Uploading malicious software or harmful content</li>
                      <li>
                        • Attempting to gain unauthorized access to platform
                        systems
                      </li>
                      <li>
                        • Using the platform for non-healthcare related
                        activities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Data and Privacy
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Data Collection
                    </h3>
                    <p className="text-gray-700 mb-3">
                      We collect and process personal and professional data as
                      described in our Privacy Policy. This includes:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Professional qualifications and credentials</li>
                      <li>• Employment history and references</li>
                      <li>• Contact information and preferences</li>
                      <li>• Platform usage and interaction data</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Data Protection
                    </h3>
                    <p className="text-gray-700 mb-3">
                      We implement robust security measures to protect your
                      data:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• End-to-end encryption for data transmission</li>
                      <li>• Secure cloud storage with regular backups</li>
                      <li>• Access controls and audit logging</li>
                      <li>• Compliance with GDPR and NHS Digital standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Intellectual Property
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Platform Ownership
                    </h3>
                    <p className="text-gray-700">
                      The NHSCareHub platform, including its design,
                      functionality, and content, is owned by NHSCareHub Ltd and
                      protected by intellectual property laws. Users are granted
                      a limited, non-exclusive license to use the platform for
                      its intended healthcare purposes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">User Content</h3>
                    <p className="text-gray-700">
                      You retain ownership of the content you submit to the
                      platform. However, you grant us a license to use, process,
                      and display this content as necessary to provide our
                      services, including sharing with NHS organizations and
                      recruitment partners for legitimate healthcare purposes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Limitation of Liability
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Important Legal Notice:</strong> Please read this
                    section carefully as it limits our liability to you.
                  </p>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    To the maximum extent permitted by law, NHSCareHub shall not
                    be liable for any indirect, incidental, special,
                    consequential, or punitive damages arising from your use of
                    the platform.
                  </p>
                  <p>
                    Our total liability for any claims relating to the platform
                    shall not exceed the amount you paid us in the 12 months
                    preceding the incident giving rise to the claim.
                  </p>
                  <p>
                    We do not guarantee the accuracy, completeness, or
                    timeliness of information provided by third parties,
                    including job listings, compliance documents, or equipment
                    specifications.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Termination
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Your Right to Terminate
                    </h3>
                    <p className="text-gray-700 mb-3">
                      You may terminate your account at any time by:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>
                        • Using the account deletion option in your profile
                      </li>
                      <li>• Contacting our support team</li>
                      <li>• Sending a written request to our legal team</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Our Right to Terminate
                    </h3>
                    <p className="text-gray-700 mb-3">
                      We may suspend or terminate your account if you:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Violate these Terms of Service</li>
                      <li>• Provide false or misleading information</li>
                      <li>• Engage in prohibited activities</li>
                      <li>
                        • Fail to maintain required professional credentials
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Contact Information
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>legal@nhscarehub.uk</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+44 203 488 8343</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Governing Law:</strong> These Terms are governed by
                    English law and subject to the exclusive jurisdiction of the
                    English courts. If any provision is found unenforceable, the
                    remaining provisions will remain in full force and effect.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
