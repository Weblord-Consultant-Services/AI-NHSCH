import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Calendar,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function PrivacyPolicy() {
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
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-poppins font-bold text-gray-900">
                Privacy Policy
              </h1>
              <p className="text-gray-600">NHSCareHub Data Protection Notice</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {currentDate}</span>
            </div>
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="w-3 h-3 mr-1" />
              GDPR Compliant
            </Badge>
            <Badge className="bg-blue-100 text-blue-800">Version 2.1</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-blue-600" />
                <span>Important Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                This Privacy Policy explains how NHSCareHub ("we", "our", or
                "us") collects, uses, and protects your personal information
                when you use our digital healthcare management platform. We are
                committed to protecting your privacy and handling your data in
                accordance with UK data protection laws including the General
                Data Protection Regulation (GDPR) and the Data Protection Act
                2018.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-3">
                  Personal Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • <strong>Account Information:</strong> Name, email address,
                    phone number, professional qualifications
                  </li>
                  <li>
                    • <strong>Professional Details:</strong> NHS employment
                    status, organization, role, registration numbers
                  </li>
                  <li>
                    • <strong>Contact Information:</strong> Postal address,
                    emergency contact details
                  </li>
                  <li>
                    • <strong>Identity Verification:</strong> Professional
                    credentials, background check information
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mb-3 mt-6">
                  Usage Information
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Platform usage analytics and interaction data</li>
                  <li>• Device information, IP addresses, browser type</li>
                  <li>• Log files and cookies for platform functionality</li>
                  <li>• Communication records with our support team</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Service Provision
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Facilitate job matching and recruitment</li>
                      <li>• Provide access to compliance documents</li>
                      <li>• Enable equipment procurement services</li>
                      <li>• Maintain platform security and functionality</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Communication
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Send service updates and notifications</li>
                      <li>• Provide customer support and assistance</li>
                      <li>• Share relevant healthcare industry news</li>
                      <li>• Conduct satisfaction surveys</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Data Sharing and Disclosure
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      NHS Organizations
                    </h3>
                    <p className="text-gray-700">
                      We may share relevant professional information with NHS
                      trusts and healthcare organizations for recruitment and
                      staffing purposes, with your explicit consent.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Recruitment Partners
                    </h3>
                    <p className="text-gray-700">
                      Verified recruitment agencies may access your profile
                      information when you apply for positions or express
                      interest in opportunities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Legal Requirements
                    </h3>
                    <p className="text-gray-700">
                      We may disclose information when required by law, to
                      protect our rights, or to ensure platform security and
                      user safety.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Data Security
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Technical Measures
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• End-to-end encryption for data transmission</li>
                      <li>• Secure cloud storage with backup systems</li>
                      <li>• Multi-factor authentication requirements</li>
                      <li>• Regular security audits and penetration testing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Administrative Measures
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Access controls and role-based permissions</li>
                      <li>• Staff training on data protection</li>
                      <li>• Data retention and deletion policies</li>
                      <li>• Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Your Rights
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4">
                  Under GDPR and UK data protection law, you have the following
                  rights:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Right to Access:</strong> Request copies of your
                        personal data
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Right to Rectification:</strong> Request
                        correction of inaccurate data
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Right to Erasure:</strong> Request deletion of
                        your data
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Right to Portability:</strong> Receive your data
                        in a portable format
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Right to Object:</strong> Object to processing
                        of your data
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Right to Withdraw Consent:</strong> Withdraw
                        consent at any time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Contact Information
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4">
                  For questions about this Privacy Policy or to exercise your
                  rights, contact our Data Protection Officer:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>privacy@nhscarehub.uk</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+44 203 488 8343</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Data Protection Officer, NHSCareHub, London, UK</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Supervisory Authority:</strong> You also have the
                    right to lodge a complaint with the Information
                    Commissioner's Office (ICO) at
                    <a href="https://ico.org.uk" className="underline ml-1">
                      ico.org.uk
                    </a>
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
