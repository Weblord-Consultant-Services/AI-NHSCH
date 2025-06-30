import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <Button
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full shadow-2xl bg-white text-primary border border-gray-200 hover:bg-gray-50 hover:shadow-xl transition-all duration-300"
        title="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </Button>
    </div>
  );
}
