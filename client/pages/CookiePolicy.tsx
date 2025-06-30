import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Cookie,
  Calendar,
  Mail,
  Phone,
  CheckCircle,
  AlertCircle,
  Settings,
  Shield,
  BarChart,
  Target,
} from "lucide-react";

export default function CookiePolicy() {
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
            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
              <Cookie className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-poppins font-bold text-gray-900">
                Cookie Policy
              </h1>
              <p className="text-gray-600">
                How NHSCareHub Uses Cookies and Tracking Technologies
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {currentDate}</span>
            </div>
            <Badge className="bg-orange-100 text-orange-800">
              <Cookie className="w-3 h-3 mr-1" />
              Cookie Notice
            </Badge>
            <Badge className="bg-green-100 text-green-800">Version 2.1</Badge>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                <span>What Are Cookies?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Cookies are small text files that are stored on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences, analyzing how you
                use our platform, and ensuring our services function properly.
                This policy explains how NHSCareHub uses cookies and similar
                tracking technologies.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Types of Cookies We Use
              </h2>
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span>Essential Cookies</span>
                      <Badge className="bg-green-100 text-green-800">
                        Always Active
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">
                      These cookies are necessary for the platform to function
                      and cannot be switched off. They are usually set in
                      response to actions you take such as logging in or filling
                      out forms.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Examples include:</h4>
                      <ul className="space-y-1 text-sm text-green-800">
                        <li>• Authentication and login session management</li>
                        <li>• Security and fraud prevention</li>
                        <li>• Platform functionality and navigation</li>
                        <li>• Form submission and data validation</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart className="w-5 h-5 text-blue-600" />
                      <span>Analytics Cookies</span>
                      <Badge className="bg-blue-100 text-blue-800">
                        Optional
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">
                      These cookies help us understand how users interact with
                      our platform by collecting and reporting information
                      anonymously. This helps us improve our services.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Examples include:</h4>
                      <ul className="space-y-1 text-sm text-blue-800">
                        <li>• Google Analytics for usage statistics</li>
                        <li>• Page view and click tracking</li>
                        <li>• Performance monitoring and error reporting</li>
                        <li>• User journey and behavior analysis</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5 text-purple-600" />
                      <span>Functional Cookies</span>
                      <Badge className="bg-purple-100 text-purple-800">
                        Optional
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">
                      These cookies enable enhanced functionality and
                      personalization, such as remembering your preferences and
                      settings to provide you with a more tailored experience.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Examples include:</h4>
                      <ul className="space-y-1 text-sm text-purple-800">
                        <li>• Language and region preferences</li>
                        <li>• Theme and display settings</li>
                        <li>• Search filters and sorting preferences</li>
                        <li>• Notification preferences</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-red-600" />
                      <span>Marketing Cookies</span>
                      <Badge className="bg-red-100 text-red-800">
                        Optional
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">
                      These cookies are used to deliver relevant content and
                      advertisements. They may be set by us or third-party
                      providers whose services we use on our platform.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Examples include:</h4>
                      <ul className="space-y-1 text-sm text-red-800">
                        <li>
                          • Healthcare job recommendations based on profile
                        </li>
                        <li>• Relevant equipment and service suggestions</li>
                        <li>• Professional development opportunities</li>
                        <li>• Industry news and updates personalization</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Third-Party Cookies
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4">
                  We work with trusted third-party services that may set cookies
                  on our platform. These partners help us provide better
                  services and analyze platform performance.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Analytics Partners
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>Google Analytics:</strong> Website usage
                        statistics
                      </li>
                      <li>
                        • <strong>Hotjar:</strong> User experience analysis
                      </li>
                      <li>
                        • <strong>Microsoft Clarity:</strong> Behavior insights
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Service Providers
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        • <strong>NHS Authentication:</strong> Secure login
                        verification
                      </li>
                      <li>
                        • <strong>CloudFlare:</strong> Performance and security
                      </li>
                      <li>
                        • <strong>Intercom:</strong> Customer support chat
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Managing Your Cookie Preferences
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-6">
                  You have full control over which cookies you allow. You can
                  manage your preferences through your browser settings or using
                  our cookie preference center.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Browser Settings
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Most browsers allow you to control cookies through their
                      settings:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Block all cookies</li>
                      <li>• Block third-party cookies only</li>
                      <li>• Delete existing cookies</li>
                      <li>• Set preferences for specific websites</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Platform Settings
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Through your NHSCareHub account settings, you can:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Enable/disable analytics cookies</li>
                      <li>• Control marketing preferences</li>
                      <li>• Manage notification settings</li>
                      <li>• Export your data preferences</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <p className="text-yellow-800 text-sm">
                    <strong>Important:</strong> Disabling certain cookies may
                    affect the functionality of the platform. Essential cookies
                    cannot be disabled as they are necessary for basic platform
                    operation and security.
                  </p>
                </div>

                <div className="text-center">
                  <Button className="mr-4">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage Cookie Preferences
                  </Button>
                  <Button variant="outline">
                    View Browser Cookie Settings
                  </Button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Cookie Duration
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Session Cookies
                    </h3>
                    <p className="text-gray-700 mb-3">
                      These temporary cookies are deleted when you close your
                      browser. They are essential for:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Maintaining your login session</li>
                      <li>• Form data and navigation state</li>
                      <li>• Security and fraud prevention</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Persistent Cookies
                    </h3>
                    <p className="text-gray-700 mb-3">
                      These cookies remain on your device for a set period
                      (typically 6-24 months) and help with:
                    </p>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Remembering your preferences</li>
                      <li>• Analytics and performance tracking</li>
                      <li>• Personalized content delivery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Protection and Cookies
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      GDPR Compliance
                    </h3>
                    <p className="text-gray-700">
                      Our use of cookies complies with the General Data
                      Protection Regulation (GDPR) and UK data protection laws.
                      We obtain your consent for non-essential cookies and
                      provide clear information about their purpose.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Data Minimization
                    </h3>
                    <p className="text-gray-700">
                      We only collect cookie data that is necessary for the
                      specified purposes and retain it for the minimum time
                      required. You can withdraw consent for optional cookies at
                      any time.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Security</h3>
                    <p className="text-gray-700">
                      All cookie data is encrypted and stored securely. We
                      implement technical and organizational measures to protect
                      against unauthorized access, alteration, or deletion of
                      cookie information.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Updates to This Policy
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices, technology, or legal requirements.
                  We will notify you of any material changes through:
                </p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li>• Email notifications to registered users</li>
                  <li>• Platform notifications when you log in</li>
                  <li>• Updates posted on our website</li>
                  <li>• Banner notifications for significant changes</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Stay Informed:</strong> We recommend reviewing this
                    policy periodically to understand how we use cookies to
                    improve your experience on the NHSCareHub platform.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Contact Us
              </h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-700 mb-4">
                  If you have questions about our use of cookies or this policy,
                  please contact us:
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
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Data Protection Officer:</strong> For specific
                    questions about data protection and cookie usage, you can
                    contact our Data Protection Officer directly at
                    dpo@nhscarehub.uk
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
