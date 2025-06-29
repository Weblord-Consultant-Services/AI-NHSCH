import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Download, ExternalLink } from "lucide-react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const currentDate = new Date().toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-gradient-to-r from-primary to-secondary text-white py-3 px-4 relative z-50">
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
            onClick={() =>
              window.open(
                "https://www.nhs.uk/about-us/nhs-website-privacy-policy/",
                "_blank",
              )
            }
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
    </div>
  );
}
