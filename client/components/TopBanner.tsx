import { useState } from "react";
import { Button } from "@/components/ui/button";
import ConnectModal from "@/components/ConnectModal";
import { X, Download, ExternalLink } from "lucide-react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  if (!isVisible) return null;

  const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="hidden md:block bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="font-semibold">NHS Care Hub 2025</span>
          </div>
          <span className="hidden md:inline text-sm opacity-90">
            Latest Healthcare Compliance Guidelines Updated - {currentDate}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 text-sm"
            onClick={() => {
              // Generate and download NHSCareHub Terms and Policy PDF
              const termsData = {
                title: "NHSCareHub Platform Terms of Use and Policy",
                version: "v2.1.0",
                lastUpdated: new Date().toISOString(),
                downloadDate: new Date().toISOString(),
                sections: [
                  "Platform Overview",
                  "Terms of Service",
                  "Privacy Policy",
                  "User Responsibilities",
                  "Data Protection Guidelines",
                  "Compliance Requirements",
                  "Acceptable Use Policy",
                  "Account Security",
                  "Platform Support",
                  "Contact Information",
                ],
                content: {
                  overview:
                    "NHSCareHub Platform is a comprehensive healthcare management system for NHS professionals.",
                  terms:
                    "By using this platform, users agree to comply with all NHS standards and professional guidelines.",
                  privacy:
                    "We protect user data in accordance with GDPR and NHS data protection standards.",
                  support:
                    "24/7 support available for all registered healthcare professionals.",
                },
              };

              const blob = new Blob([JSON.stringify(termsData, null, 2)], {
                type: "application/json",
              });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `nhscarehub-terms-policy-${new Date().toISOString().split("T")[0]}.json`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Guidelines
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 text-sm"
            onClick={() =>
              window.open("https://www.nhs.uk/conditions/", "_blank")
            }
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            NHS Resources
          </Button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Connect Modal */}
      <ConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        initialMode="signup"
      />
    </div>
  );
}
