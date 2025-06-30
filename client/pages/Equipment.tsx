import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import {
  Stethoscope,
  Search,
  Filter,
  Heart,
  Activity,
  Zap,
  Shield,
  Truck,
  Star,
  MapPin,
  Phone,
  ExternalLink,
  Plus,
  ShoppingCart,
  TrendingUp,
  Package,
  AlertCircle,
  CheckCircle,
  X,
  Building,
} from "lucide-react";

interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  category:
    | "diagnostic"
    | "monitoring"
    | "surgical"
    | "mobility"
    | "ppe"
    | "emergency";
  price: number;
  condition: "new" | "refurbished" | "used";
  availability: "in-stock" | "low-stock" | "out-of-stock" | "pre-order";
  supplier: {
    name: string;
    rating: number;
    location: string;
    phone: string;
    verified: boolean;
    nhsApproved: boolean;
  };
  specifications: string[];
  certifications: string[];
  images: string[];
  inStock: number;
  sold: number;
  warranty: string;
}

export default function Equipment() {
  const [equipment, setEquipment] = useState<EquipmentItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");
  const [searchResults, setSearchResults] = useState<EquipmentItem[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState<any>(null);
  const [equipmentStats, setEquipmentStats] = useState({
    totalItems: 15683,
    activeSuppliers: 892,
    ordersThisMonth: 3456,
    avgRating: 4.7,
  });

  useEffect(() => {
    // Simulate real equipment data
    const simulatedEquipment: EquipmentItem[] = [
      {
        id: "1",
        name: "Philips V60 Ventilator",
        description:
          "Professional-grade ventilator with advanced monitoring capabilities for critical care.",
        category: "emergency",
        price: 12500,
        condition: "new",
        availability: "in-stock",
        supplier: {
          name: "MedTech Solutions Ltd",
          rating: 4.8,
          location: "London, UK",
          phone: "+44 20 7123 4567",
          verified: true,
          nhsApproved: true,
        },
        specifications: [
          "Volume control ventilation",
          "Pressure support",
          "CPAP/BiPAP modes",
          "Integrated monitoring",
        ],
        certifications: ["CE Mark", "NHS Approved", "ISO 13485"],
        images: [
          "https://images.pexels.com/photos/18112241/pexels-photo-18112241.jpeg",
        ],
        inStock: 15,
        sold: 127,
        warranty: "3 years",
      },
      {
        id: "2",
        name: "GE Dash 4000 Patient Monitor",
        description:
          "Multi-parameter patient monitoring system with ECG, blood pressure, and SpO2 monitoring.",
        category: "monitoring",
        price: 3200,
        condition: "refurbished",
        availability: "in-stock",
        supplier: {
          name: "Healthcare Equipment Direct",
          rating: 4.6,
          location: "Manchester, UK",
          phone: "+44 161 234 5678",
          verified: true,
          nhsApproved: true,
        },
        specifications: [
          "12-lead ECG",
          "Non-invasive BP",
          "SpO2 monitoring",
          "Temperature measurement",
        ],
        certifications: ["CE Mark", "NHS Approved", "FDA Cleared"],
        images: [
          "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg",
        ],
        inStock: 8,
        sold: 94,
        warranty: "2 years",
      },
      {
        id: "3",
        name: "Welch Allyn Spot Vital Signs",
        description:
          "Compact vital signs monitor for blood pressure, temperature, and pulse rate measurement.",
        category: "diagnostic",
        price: 1850,
        condition: "new",
        availability: "low-stock",
        supplier: {
          name: "Medical Instruments UK",
          rating: 4.9,
          location: "Birmingham, UK",
          phone: "+44 121 345 6789",
          verified: true,
          nhsApproved: true,
        },
        specifications: [
          "NIBP measurement",
          "Oral/axillary temperature",
          "Pulse rate detection",
          "Portable design",
        ],
        certifications: ["CE Mark", "NHS Approved", "ISO 15197"],
        images: [
          "https://images.pexels.com/photos/7723534/pexels-photo-7723534.jpeg",
        ],
        inStock: 3,
        sold: 156,
        warranty: "2 years",
      },
      {
        id: "4",
        name: "Invacare Electric Hospital Bed",
        description:
          "Height-adjustable electric hospital bed with side rails and pressure relief mattress.",
        category: "mobility",
        price: 2400,
        condition: "new",
        availability: "in-stock",
        supplier: {
          name: "Care Equipment Solutions",
          rating: 4.5,
          location: "Leeds, UK",
          phone: "+44 113 456 7890",
          verified: true,
          nhsApproved: true,
        },
        specifications: [
          "Electric height adjustment",
          "Removable side rails",
          "Pressure relief mattress",
          "Emergency lowering",
        ],
        certifications: ["CE Mark", "NHS Approved", "BS EN 60601"],
        images: [
          "https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg",
        ],
        inStock: 22,
        sold: 73,
        warranty: "5 years",
      },
      {
        id: "5",
        name: "3M N95 Respirator Masks (Box of 20)",
        description:
          "High-quality N95 respirator masks providing 95% filtration efficiency.",
        category: "ppe",
        price: 45,
        condition: "new",
        availability: "in-stock",
        supplier: {
          name: "PPE Supplies Direct",
          rating: 4.7,
          location: "Bristol, UK",
          phone: "+44 117 567 8901",
          verified: true,
          nhsApproved: true,
        },
        specifications: [
          "95% filtration efficiency",
          "NIOSH approved",
          "Comfortable fit",
          "Single use",
        ],
        certifications: ["NIOSH N95", "CE Mark", "NHS Approved"],
        images: [
          "https://images.pexels.com/photos/3993241/pexels-photo-3993241.jpeg",
        ],
        inStock: 500,
        sold: 2847,
        warranty: "N/A",
      },
      {
        id: "6",
        name: "Karl Storz Laparoscopic Set",
        description:
          "Complete laparoscopic surgery set with camera, light source, and instruments.",
        category: "surgical",
        price: 28500,
        condition: "refurbished",
        availability: "pre-order",
        supplier: {
          name: "Surgical Equipment Pro",
          rating: 4.9,
          location: "Edinburgh, UK",
          phone: "+44 131 678 9012",
          verified: true,
          nhsApproved: true,
        },
        specifications: [
          "HD camera system",
          "LED light source",
          "Insufflator",
          "Complete instrument set",
        ],
        certifications: ["CE Mark", "NHS Approved", "ISO 13485"],
        images: [
          "https://images.pexels.com/photos/6627704/pexels-photo-6627704.jpeg",
        ],
        inStock: 0,
        sold: 23,
        warranty: "2 years",
      },
    ];

    setEquipment(simulatedEquipment);
  }, []);

  // Real-time search functionality
  useEffect(() => {
    if (searchTerm.trim()) {
      setShowSearchResults(true);
      // Simulate real-time search results
      const results = equipment.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setSearchResults(results);
    } else {
      setShowSearchResults(false);
      setSearchResults([]);
    }
  }, [searchTerm, equipment]);

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesPrice = (() => {
      if (priceRange === "all") return true;
      if (priceRange === "under-1000") return item.price < 1000;
      if (priceRange === "1000-5000")
        return item.price >= 1000 && item.price < 5000;
      if (priceRange === "5000-15000")
        return item.price >= 5000 && item.price < 15000;
      if (priceRange === "over-15000") return item.price >= 15000;
      return true;
    })();
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case "in-stock":
        return "bg-green-100 text-green-800";
      case "low-stock":
        return "bg-yellow-100 text-yellow-800";
      case "out-of-stock":
        return "bg-red-100 text-red-800";
      case "pre-order":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "new":
        return "bg-green-100 text-green-800";
      case "refurbished":
        return "bg-blue-100 text-blue-800";
      case "used":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "diagnostic":
        return Stethoscope;
      case "monitoring":
        return Activity;
      case "surgical":
        return Zap;
      case "mobility":
        return Truck;
      case "ppe":
        return Shield;
      case "emergency":
        return Heart;
      default:
        return Package;
    }
  };

  const handleContactSupplier = (supplier: any) => {
    setSelectedSupplier(supplier);
  };

  const handleBuyNow = (item: EquipmentItem) => {
    // Redirect to NHS Supply Chain or supplier's website
    if (item.supplier.nhsApproved) {
      window.open("https://www.nhssupplychain.nhs.uk/", "_blank");
    } else {
      alert(
        `Contact ${item.supplier.name} at ${item.supplier.phone} to purchase`,
      );
    }
  };

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "diagnostic", label: "Diagnostic" },
    { value: "monitoring", label: "Monitoring" },
    { value: "surgical", label: "Surgical" },
    { value: "mobility", label: "Mobility" },
    { value: "ppe", label: "PPE" },
    { value: "emergency", label: "Emergency" },
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "under-1000", label: "Under £1,000" },
    { value: "1000-5000", label: "£1,000 - £5,000" },
    { value: "5000-15000", label: "£5,000 - £15,000" },
    { value: "over-15000", label: "Over £15,000" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-poppins font-bold text-gray-900">
                Healthcare Equipment Marketplace
              </h1>
              <p className="text-gray-600">
                Buy, sell, and lease medical equipment from trusted NHS-approved
                suppliers
              </p>
            </div>
          </div>
        </div>

        {/* Equipment Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Equipment Listed
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {equipmentStats.totalItems.toLocaleString()}
              </div>
              <div className="flex items-center space-x-2 mt-2">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-muted-foreground">
                  +18% this month
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Suppliers
              </CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {equipmentStats.activeSuppliers}
              </div>
              <p className="text-xs text-muted-foreground">NHS-approved</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Orders This Month
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {equipmentStats.ordersThisMonth.toLocaleString()}
              </div>
              <div className="flex items-center space-x-1 mt-2">
                <TrendingUp className="w-3 h-3 text-green-500" />
                <span className="text-xs text-muted-foreground">+25%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">
                {equipmentStats.avgRating}
              </div>
              <p className="text-xs text-muted-foreground">Supplier rating</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search equipment, suppliers, or categories..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      {priceRanges.map((range) => (
                        <option key={range.value} value={range.value}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Real-time Search Results */}
                {showSearchResults && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-blue-900">
                        Search Results for "{searchTerm}"
                      </h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-blue-700">
                          Real-time results
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {searchResults.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between bg-white p-3 rounded"
                        >
                          <div>
                            <div className="font-medium text-gray-900">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-600">
                              £{item.price.toLocaleString()} •{" "}
                              {item.supplier.name}
                            </div>
                          </div>
                          <Badge
                            className={getAvailabilityColor(item.availability)}
                          >
                            {item.availability}
                          </Badge>
                        </div>
                      ))}
                      {searchResults.length > 3 && (
                        <div className="text-sm text-blue-700 text-center pt-2">
                          +{searchResults.length - 3} more results shown below
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Button
            onClick={() =>
              window.open("https://www.nhssupplychain.nhs.uk/", "_blank")
            }
            className="flex items-center space-x-2 p-6 h-auto"
          >
            <ExternalLink className="w-5 h-5" />
            <span>NHS Supply Chain</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center space-x-2 p-6 h-auto"
          >
            <Plus className="w-5 h-5" />
            <span>List Your Equipment</span>
          </Button>
          <Button
            variant="outline"
            className="flex items-center space-x-2 p-6 h-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Bulk Order Request</span>
          </Button>
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => {
            const CategoryIcon = getCategoryIcon(item.category);

            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">
                        {item.name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge className={getConditionColor(item.condition)}>
                          {item.condition}
                        </Badge>
                        <Badge
                          className={getAvailabilityColor(item.availability)}
                        >
                          {item.availability}
                        </Badge>
                        {item.supplier.nhsApproved && (
                          <Badge className="bg-blue-100 text-blue-800">
                            NHS Approved
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{item.description}</p>

                  {/* Price */}
                  <div className="text-2xl font-bold text-primary">
                    £{item.price.toLocaleString()}
                  </div>

                  {/* Specifications */}
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm mb-2">
                      Key Features:
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {item.specifications.slice(0, 3).map((spec, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stock Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>In Stock: {item.inStock}</span>
                    <span>Sold: {item.sold}</span>
                  </div>

                  {/* Supplier Info */}
                  <div className="pt-3 border-t border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900 text-sm">
                        {item.supplier.name}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">
                          {item.supplier.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{item.supplier.location}</span>
                      </div>
                      {item.supplier.verified && (
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>Verified</span>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleBuyNow(item)}
                        className="flex-1"
                        size="sm"
                        disabled={item.availability === "out-of-stock"}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {item.availability === "pre-order"
                          ? "Pre-Order"
                          : "Buy Now"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleContactSupplier(item.supplier)}
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trusted Suppliers Section */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Trusted NHS-Approved Suppliers</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    name: "NHS Supply Chain",
                    url: "https://www.nhssupplychain.nhs.uk/",
                    description: "Official NHS procurement platform",
                    category: "Primary Supplier",
                  },
                  {
                    name: "Medisave",
                    url: "https://www.medisave.co.uk/",
                    description: "Medical equipment and supplies",
                    category: "Equipment Specialist",
                  },
                  {
                    name: "Henry Schein Medical",
                    url: "https://www.henryschein.co.uk/",
                    description: "Healthcare solutions provider",
                    category: "Global Supplier",
                  },
                  {
                    name: "Praxisdienst",
                    url: "https://www.praxisdienst.co.uk/",
                    description: "Medical practice equipment",
                    category: "Practice Solutions",
                  },
                ].map((supplier, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => window.open(supplier.url, "_blank")}
                  >
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {supplier.name}
                      </h4>
                      <Badge
                        variant="secondary"
                        className="mb-2 bg-green-100 text-green-800"
                      >
                        NHS Approved
                      </Badge>
                      <p className="text-sm text-gray-600 mb-2">
                        {supplier.description}
                      </p>
                      <span className="text-xs text-gray-500">
                        {supplier.category}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Supplier Phone Modal */}
        {selectedSupplier && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
              <CardHeader className="relative">
                <button
                  onClick={() => setSelectedSupplier(null)}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Contact Supplier</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {selectedSupplier.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">
                      {selectedSupplier.rating}
                    </span>
                    <span className="text-gray-600">rating</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedSupplier.location}</span>
                  </div>
                  {selectedSupplier.verified && (
                    <Badge className="bg-green-100 text-green-800 mb-4">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified Supplier
                    </Badge>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-sm text-gray-600 mb-1">
                      Phone Number
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {selectedSupplier.phone}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Button
                      onClick={() =>
                        window.open(`tel:${selectedSupplier.phone}`, "_self")
                      }
                      className="w-full"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        navigator.clipboard.writeText(selectedSupplier.phone);
                        alert("Phone number copied to clipboard!");
                      }}
                      className="w-full"
                    >
                      Copy Phone Number
                    </Button>
                  </div>

                  <div className="text-xs text-gray-500 text-center">
                    Business hours: Monday - Friday, 9:00 AM - 5:00 PM GMT
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
