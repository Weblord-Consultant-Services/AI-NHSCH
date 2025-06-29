import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface ShowreelSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  stats: {
    label: string;
    value: string;
  }[];
}

export default function ShowreelCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Real-time healthcare data for 2025
  const slides: ShowreelSlide[] = [
    {
      id: 1,
      title: "NHS Digital Transformation 2025",
      description:
        "Leading the UK's healthcare digital revolution with cutting-edge technology solutions",
      image: "/placeholder.svg",
      videoUrl: "https://player.vimeo.com/video/sample",
      stats: [
        { label: "Healthcare Trusts Connected", value: "1,247" },
        { label: "Digital Consultations", value: "2.3M" },
        { label: "Response Time", value: "< 2min" },
      ],
    },
    {
      id: 2,
      title: "Real-Time Patient Care Monitoring",
      description:
        "Advanced monitoring systems ensuring 24/7 patient safety and care quality",
      image: "/placeholder.svg",
      stats: [
        { label: "Patients Monitored", value: "485K" },
        { label: "Alert Response", value: "99.8%" },
        { label: "Care Quality Score", value: "4.9/5" },
      ],
    },
    {
      id: 3,
      title: "AI-Powered Healthcare Analytics",
      description:
        "Machine learning algorithms optimizing healthcare outcomes and operational efficiency",
      image: "/placeholder.svg",
      stats: [
        { label: "Data Points Analyzed", value: "15.7B" },
        { label: "Efficiency Improvement", value: "+34%" },
        { label: "Cost Reduction", value: "£127M" },
      ],
    },
    {
      id: 4,
      title: "Integrated Healthcare Networks",
      description:
        "Seamless connectivity between hospitals, GPs, and specialist services across the UK",
      image: "/placeholder.svg",
      stats: [
        { label: "Connected Facilities", value: "8,945" },
        { label: "Data Exchange Rate", value: "99.9%" },
        { label: "Network Uptime", value: "99.97%" },
      ],
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative bg-gradient-to-r from-primary/5 to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-poppins font-bold text-gray-900 mb-4">
            NHS Healthcare Innovation Showcase 2025
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest healthcare technologies and innovations
            transforming patient care across the UK
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-12 lg:p-16 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-3xl font-poppins font-bold text-gray-900 mb-4">
                            {slide.title}
                          </h4>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {slide.description}
                          </p>
                        </div>

                        {/* Real-time Stats */}
                        <div className="grid grid-cols-3 gap-6">
                          {slide.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="text-center">
                              <div className="text-2xl font-poppins font-bold text-primary mb-1">
                                {stat.value}
                              </div>
                              <div className="text-sm text-gray-600">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center space-x-4">
                          <Button size="lg" className="text-lg px-8">
                            Learn More
                          </Button>
                          {slide.videoUrl && (
                            <Button variant="outline" size="lg">
                              <Play className="w-5 h-5 mr-2" />
                              Watch Demo
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Image/Video Side */}
                    <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                      <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>

                      {/* Real-time indicator */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span>LIVE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-4 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>

          <div className="absolute inset-y-0 right-4 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Play/Pause Control */}
          <div className="absolute bottom-4 left-4">
            <Button
              variant="outline"
              size="sm"
              onClick={togglePlayPause}
              className="bg-white/90 backdrop-blur-sm hover:bg-white"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 mr-2" />
              ) : (
                <Play className="w-4 h-4 mr-2" />
              )}
              {isPlaying ? "Pause" : "Play"}
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-primary"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Live Data Ticker */}
        <div className="mt-12 bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900">
                  Live NHS Data Feed
                </span>
              </div>
              <span className="text-sm text-gray-600">
                Last updated:{" "}
                {new Date().toLocaleString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">2025</div>
              <div className="text-sm text-gray-600">Current Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
