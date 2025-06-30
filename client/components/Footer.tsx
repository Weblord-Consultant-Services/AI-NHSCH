import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Users,
  Shield,
  Stethoscope,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentDate = new Date().toLocaleDateString("en-GB");

  return (
    <footer className="bg-gray-900 text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2Fc958b415ffc540ad9c90ee1b661265c5%2F0323db486ec9432e92c43bc6a1ed38a0)",
                }}
              ></div>
              <span
                className="text-xl font-poppins font-bold bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2Fc958b415ffc540ad9c90ee1b661265c5%2Fc08e608ea569427989e056724e124520)",
                }}
              >
                NHSCareHub
              </span>
            </div>
            <p className="text-gray-300 max-w-md">
              The comprehensive digital healthcare management platform trusted
              by thousands of healthcare professionals across the UK since 2025.
            </p>
            <address className="space-y-3 not-italic">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+442034888343"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +44 203 488 8343
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:support@nhscarehub.uk"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  support@nhscarehub.uk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">London, United Kingdom</span>
              </div>
            </address>

            {/* Certifications */}
            <div className="space-y-2">
              <h5 className="text-sm font-semibold text-gray-200">
                Certifications
              </h5>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  ISO 27001
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-800"
                >
                  GDPR Compliant
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-purple-100 text-purple-800"
                >
                  Cyber Essentials+
                </Badge>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <nav>
            <h4 className="text-lg font-poppins font-semibold mb-4 flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Core Services</span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/staff-portal"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span>Staff Recruitment</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/compliance"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Shield className="w-4 h-4" />
                  <span>Compliance Documents</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/equipment"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Healthcare Equipment</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Support Links */}
          <nav>
            <h4 className="text-lg font-poppins font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.nhs.uk/using-the-nhs/about-the-nhs/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>Help Center</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://digital.nhs.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>Documentation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.healthcareers.nhs.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>Training</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://digital.nhs.uk/developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>API Reference</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.nhs.uk/service-search/urgent-and-emergency-care"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>System Status</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </nav>

          {/* Quick Links */}
          <nav>
            <h4 className="text-lg font-poppins font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About NHSCareHub
                </Link>
              </li>
              <li>
                <a
                  href="https://www.jobs.nhs.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>NHS Jobs</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.england.nhs.uk/news/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>NHS News</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.england.nhs.uk/partners/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>Partners</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 NHSCareHub. All rights reserved.
            <span className="ml-2">Last updated: {currentDate}</span>
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <a
                  href="https://www.nhs.uk/about-us/nhs-website-privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.nhs.uk/about-us/nhs-website-terms-and-conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://www.nhs.uk/our-policies/cookies-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
