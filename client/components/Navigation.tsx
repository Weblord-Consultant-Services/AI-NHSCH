import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ConnectModal from "@/components/ConnectModal";
import {
  Heart,
  Home,
  Users,
  Shield,
  Stethoscope,
  Search,
  Sparkles,
  X,
  Clock,
  MapPin,
  TrendingUp,
  Calendar,
  Newspaper,
  Info,
  Phone,
} from "lucide-react";

interface AISearchResult {
  id: string;
  title: string;
  description: string;
  category: "recruitment" | "compliance" | "equipment";
  relevance: number;
  data: any;
}

export default function Navigation() {
  const location = useLocation();
  const [isAISearchOpen, setIsAISearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<AISearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);

  const navigationItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/staff-portal", label: "Staff Portal", icon: Users },
    { path: "/compliance", label: "Compliance", icon: Shield },
    { path: "/equipment", label: "Equipment", icon: Stethoscope },
    { path: "/news", label: "News", icon: Newspaper },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  const simulateAISearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simulate AI-powered search results
    const mockResults: AISearchResult[] = [
      {
        id: "1",
        title: "NHS Nurses - ICU Positions",
        description:
          "17 urgent ICU nursing positions available in London. Immediate start available.",
        category: "recruitment",
        relevance: 0.95,
        data: {
          positions: 17,
          location: "London",
          salary: "£32,000 - £38,000",
          urgency: "high",
        },
      },
      {
        id: "2",
        title: "Ventilator Equipment - Phillips V60",
        description:
          "Professional-grade ventilators available for purchase or lease. NHS approved.",
        category: "equipment",
        relevance: 0.89,
        data: {
          price: "£12,500",
          availability: "In Stock",
          certification: "NHS Approved",
        },
      },
      {
        id: "3",
        title: "Care Quality Commission Guidelines 2025",
        description:
          "Latest CQC inspection standards and compliance requirements updated for 2025.",
        category: "compliance",
        relevance: 0.87,
        data: {
          updated: "June 2025",
          sections: 12,
          downloadSize: "2.4MB",
        },
      },
      {
        id: "4",
        title: "Healthcare Assistants - North West",
        description:
          "45 healthcare assistant roles across Manchester, Liverpool, and surrounding areas.",
        category: "recruitment",
        relevance: 0.82,
        data: {
          positions: 45,
          region: "North West",
          salary: "£19,000 - £22,000",
        },
      },
      {
        id: "5",
        title: "Medical Monitors - Patient Vital Signs",
        description:
          "Advanced patient monitoring systems with real-time data analytics.",
        category: "equipment",
        relevance: 0.78,
        data: {
          models: 8,
          priceRange: "£2,500 - £15,000",
          features: "ECG, BP, SpO2, Temp",
        },
      },
    ]
      .filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase()) ||
          result.category.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 5);

    setSearchResults(mockResults);
    setIsSearching(false);
  };

  const handleAISearch = (query: string) => {
    setSearchQuery(query);
    simulateAISearch(query);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "recruitment":
        return "bg-blue-100 text-blue-800";
      case "compliance":
        return "bg-green-100 text-green-800";
      case "equipment":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "recruitment":
        return Users;
      case "compliance":
        return Shield;
      case "equipment":
        return Stethoscope;
      default:
        return Search;
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-no-repeat bg-center bg-cover"></div>
              <span
                className="font-poppins font-bold text-xl bg-no-repeat bg-center bg-cover block"
                style={{
                  backgroundImage:
                    "url(https://cdn.builder.io/api/v1/image/assets%2Fc958b415ffc540ad9c90ee1b661265c5%2Fc08e608ea569427989e056724e124520)",
                  margin: "10px 20px 10px 1px",
                  padding: "10px 60px 10px 70px",
                }}
              >
                <p>
                  <br />
                </p>
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* AI Search & Actions */}
            <div className="flex items-center space-x-3">
              {/* AI Search Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAISearchOpen(true)}
                className="flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <Search className="w-4 h-4" />
                <span className="hidden md:inline">AI Search</span>
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsConnectModalOpen(true)}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* AI Search Modal */}
      {isAISearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl mx-4 max-h-[80vh] overflow-hidden">
            {/* Search Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      AI-Powered Healthcare Search
                    </h3>
                    <p className="text-sm text-gray-600">
                      Find jobs, equipment, and compliance documents instantly
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setIsAISearchOpen(false);
                    setSearchQuery("");
                    setSearchResults([]);
                  }}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search for jobs, equipment, compliance docs..."
                  value={searchQuery}
                  onChange={(e) => handleAISearch(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg"
                  autoFocus
                />
                {isSearching && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Search Results */}
            <div className="p-6 overflow-y-auto max-h-96">
              {searchResults.length === 0 && searchQuery && !isSearching && (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    No results found for "{searchQuery}"
                  </p>
                </div>
              )}

              {searchResults.length === 0 && !searchQuery && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Popular Searches
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Nurse jobs",
                      "Ventilators",
                      "CQC guidelines",
                      "ICU equipment",
                      "Staff training",
                      "PPE supplies",
                    ].map((term) => (
                      <Button
                        key={term}
                        variant="outline"
                        size="sm"
                        onClick={() => handleAISearch(term)}
                        className="justify-start"
                      >
                        {term}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {searchResults.map((result) => {
                  const CategoryIcon = getCategoryIcon(result.category);

                  return (
                    <Card
                      key={result.id}
                      className="hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <CategoryIcon className="w-5 h-5 text-primary" />
                              <Badge
                                className={getCategoryColor(result.category)}
                              >
                                {result.category}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-xs text-gray-500">
                                  Live Data
                                </span>
                              </div>
                            </div>

                            <h4 className="font-semibold text-gray-900 mb-1">
                              {result.title}
                            </h4>
                            <p className="text-gray-600 text-sm mb-3">
                              {result.description}
                            </p>

                            {/* Category-specific data */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                              {result.category === "recruitment" && (
                                <>
                                  <div className="flex items-center space-x-1">
                                    <Users className="w-4 h-4" />
                                    <span>
                                      {result.data.positions} positions
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>
                                      {result.data.location ||
                                        result.data.region}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <TrendingUp className="w-4 h-4" />
                                    <span>{result.data.salary}</span>
                                  </div>
                                </>
                              )}

                              {result.category === "equipment" && (
                                <>
                                  <div className="flex items-center space-x-1">
                                    <TrendingUp className="w-4 h-4" />
                                    <span>
                                      {result.data.price ||
                                        result.data.priceRange}
                                    </span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Shield className="w-4 h-4" />
                                    <span>
                                      {result.data.certification ||
                                        result.data.availability}
                                    </span>
                                  </div>
                                </>
                              )}

                              {result.category === "compliance" && (
                                <>
                                  <div className="flex items-center space-x-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{result.data.updated}</span>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{result.data.downloadSize}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-sm font-semibold text-primary mb-1">
                              {Math.round(result.relevance * 100)}% match
                            </div>
                            <Button size="sm" variant="outline">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Connect Modal */}
      <ConnectModal
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        initialMode="signin"
      />
    </>
  );
}
