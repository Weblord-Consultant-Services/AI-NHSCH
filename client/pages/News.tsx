import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import TopBanner from "@/components/TopBanner";
import Footer from "@/components/Footer";
import {
  Newspaper,
  Search,
  Calendar,
  Clock,
  Eye,
  TrendingUp,
  Filter,
  X,
  ExternalLink,
  Share,
  Bookmark,
  MessageCircle,
  Heart,
  Sparkles,
  AlertCircle,
  CheckCircle,
  Users,
  Shield,
  Stethoscope,
} from "lucide-react";

interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  category:
    | "breaking"
    | "policy"
    | "recruitment"
    | "technology"
    | "compliance"
    | "research";
  publishedAt: string;
  readTime: number;
  views: number;
  source: string;
  sourceUrl: string;
  image: string;
  tags: string[];
  priority: "high" | "medium" | "low";
  verified: boolean;
}

export default function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
    null,
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate AI-powered real-time news fetching
    const fetchNewsArticles = async () => {
      setIsLoading(true);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const simulatedArticles: NewsArticle[] = [
        {
          id: "1",
          title:
            "NHS Launches Major Digital Transformation Initiative for 2025",
          summary:
            "NHS England announces £2.3 billion investment in digital healthcare infrastructure, including AI-powered diagnostic tools and electronic health records.",
          content: `NHS England has unveiled an ambitious £2.3 billion digital transformation programme aimed at revolutionizing healthcare delivery across the UK. The initiative, dubbed "NHS Digital 2025," represents the largest investment in healthcare technology in the service's history.

Key components of the programme include:

**AI-Powered Diagnostics**: Implementation of artificial intelligence systems in over 500 hospitals to assist with early disease detection and treatment planning. The AI tools are expected to reduce diagnostic times by up to 40% and improve accuracy rates significantly.

**Electronic Health Records**: A unified electronic health record system will be rolled out across all NHS trusts by December 2025, enabling seamless patient data sharing and reducing administrative burden on healthcare staff.

**Telemedicine Expansion**: Virtual consultation capabilities will be expanded to cover 90% of GP practices, allowing patients to access healthcare services remotely and reducing waiting times.

**Staff Digital Skills Training**: Comprehensive training programmes will be provided to over 100,000 NHS staff to ensure they can effectively utilize new digital tools and technologies.

Dr. Amanda Thompson, NHS Digital Director, stated: "This investment represents a fundamental shift in how we deliver healthcare services. By embracing cutting-edge technology, we can provide better patient outcomes while making our staff's jobs more efficient and fulfilling."

The transformation is expected to save the NHS over £1 billion annually by 2027 through improved efficiency and reduced administrative costs. Patient satisfaction surveys indicate strong support for digital healthcare initiatives, with 78% of respondents expressing enthusiasm for AI-assisted diagnostics.

Implementation will begin in major teaching hospitals before rolling out to district general hospitals and community healthcare providers throughout 2025 and 2026.`,
          category: "breaking",
          publishedAt: "2025-01-15T09:30:00Z",
          readTime: 4,
          views: 15847,
          source: "NHS England",
          sourceUrl: "https://www.england.nhs.uk/",
          image: "/placeholder.svg",
          tags: ["Digital Health", "AI", "NHS Investment", "Technology"],
          priority: "high",
          verified: true,
        },
        {
          id: "2",
          title:
            "Critical Nursing Shortage Prompts Emergency Recruitment Drive",
          summary:
            "NHS trusts across England launch coordinated recruitment campaign targeting 25,000 new nursing positions amid growing staff shortages.",
          content: `NHS trusts across England have launched an unprecedented emergency recruitment drive aimed at filling 25,000 nursing positions over the next six months. The initiative comes in response to critical staffing shortages that have affected patient care and staff wellbeing across the healthcare system.

**Current Situation**: Recent NHS workforce statistics reveal a 12% increase in nursing vacancies compared to the same period last year. The shortage is particularly acute in intensive care units, emergency departments, and mental health services.

**Recruitment Strategy**: The campaign includes:
- International recruitment partnerships with nursing colleges in the Philippines, India, and Nigeria
- Enhanced training programmes for healthcare assistants to progress to registered nurse roles
- Improved working conditions and flexible scheduling options
- Competitive salary packages and professional development opportunities

**Financial Incentives**: New recruits will receive:
- £5,000 joining bonus for critical care positions
- Accommodation support for international nurses
- Full funding for continuing education and specialist training
- Enhanced pension contributions

Mary Johnson, Chief Nursing Officer for England, emphasized the urgency: "We are facing one of the most challenging periods in NHS history regarding nursing staffing. This recruitment drive is essential to maintaining the high standards of care our patients deserve."

The shortage has been attributed to several factors including Brexit-related EU nurse departures, pandemic-related stress and burnout, and an aging nursing workforce approaching retirement.

Early results from pilot recruitment programmes show promising signs, with international partnerships yielding 2,000 new applications in the first month. The NHS expects to see significant improvement in staffing levels by summer 2025.`,
          category: "recruitment",
          publishedAt: "2025-01-14T14:15:00Z",
          readTime: 3,
          views: 12394,
          source: "NHS Employers",
          sourceUrl: "https://www.nhsemployers.org/",
          image: "/placeholder.svg",
          tags: [
            "Nursing",
            "Recruitment",
            "Staff Shortage",
            "Healthcare Workforce",
          ],
          priority: "high",
          verified: true,
        },
        {
          id: "3",
          title: "New Compliance Standards for Medical Equipment Procurement",
          summary:
            "Updated NHS procurement guidelines introduce stricter quality and safety standards for medical equipment purchases.",
          content: `The NHS has introduced comprehensive new compliance standards for medical equipment procurement, effective immediately. The updated guidelines aim to enhance patient safety, improve cost-effectiveness, and ensure all medical devices meet the highest quality standards.

**Key Changes Include**:

**Enhanced Due Diligence**: All suppliers must now undergo rigorous background checks and provide detailed quality assurance documentation. This includes ISO 13485 certification for medical device manufacturers.

**Clinical Evidence Requirements**: New equipment must be supported by peer-reviewed clinical studies demonstrating safety and efficacy. Post-market surveillance data is now mandatory for continued approval.

**Sustainability Criteria**: Environmental impact assessments are now required, with preference given to suppliers demonstrating carbon neutrality and sustainable manufacturing practices.

**Cost-Benefit Analysis**: Procurement decisions must include comprehensive total cost of ownership calculations, including maintenance, training, and disposal costs.

**Cybersecurity Standards**: All connected medical devices must meet strict cybersecurity requirements to protect patient data and prevent potential security breaches.

James Mitchell, Director of NHS Procurement, explained: "These new standards ensure that every piece of equipment we purchase not only provides excellent clinical outcomes but also represents value for money and meets our environmental commitments."

The changes affect all NHS trusts and are expected to result in a 15% reduction in equipment-related incidents while maintaining cost-effectiveness. Training programmes for procurement staff will be rolled out over the next three months.

Suppliers have been given a six-month transition period to meet the new requirements, with support available through NHS Supply Chain partnerships.`,
          category: "compliance",
          publishedAt: "2025-01-13T11:20:00Z",
          readTime: 5,
          views: 8762,
          source: "NHS Supply Chain",
          sourceUrl: "https://www.nhssupplychain.nhs.uk/",
          image: "/placeholder.svg",
          tags: [
            "Procurement",
            "Medical Equipment",
            "Compliance",
            "Quality Standards",
          ],
          priority: "medium",
          verified: true,
        },
        {
          id: "4",
          title:
            "Breakthrough in AI-Assisted Cancer Diagnosis Shows 94% Accuracy",
          summary:
            "Clinical trial results demonstrate significant improvement in early cancer detection using machine learning algorithms.",
          content: `A groundbreaking clinical trial involving 15 NHS hospitals has demonstrated that AI-assisted cancer diagnosis can achieve 94% accuracy in detecting early-stage cancers, representing a 23% improvement over traditional diagnostic methods.

**Trial Results**: The 18-month study analyzed over 50,000 medical images including CT scans, MRIs, and mammograms using advanced machine learning algorithms developed in partnership with leading UK universities.

**Key Findings**:
- 94% accuracy in early cancer detection (vs. 71% with traditional methods)
- 40% reduction in false positive rates
- 65% faster diagnosis times
- Significant improvement in rare cancer identification

**Clinical Impact**: Dr. Rebecca Foster, Lead Oncologist at Manchester Royal Infirmary, noted: "This technology is revolutionary. We're detecting cancers months earlier than previously possible, which dramatically improves patient outcomes and survival rates."

**Technology Details**: The AI system uses deep learning neural networks trained on millions of medical images. It can identify subtle patterns invisible to the human eye and flags suspicious areas for radiologist review.

**Implementation Timeline**: Following these successful trials, NHS England plans to roll out AI-assisted diagnosis to 100 hospitals by the end of 2025. Training programmes for radiologists and oncologists will begin next month.

**Patient Benefits**: Early detection significantly improves treatment outcomes, with five-year survival rates increasing by up to 40% for certain cancer types when caught in stage one versus stage three.

The technology has received approval from the Medicines and Healthcare products Regulatory Agency (MHRA) and meets all NHS Digital standards for healthcare AI applications.

Investment in this programme totals £150 million over three years, funded through the NHS Long Term Plan technology allocation.`,
          category: "research",
          publishedAt: "2025-01-12T16:45:00Z",
          readTime: 4,
          views: 22156,
          source: "NHS Research Authority",
          sourceUrl: "https://www.hra.nhs.uk/",
          image: "/placeholder.svg",
          tags: ["AI", "Cancer", "Diagnosis", "Research", "Machine Learning"],
          priority: "high",
          verified: true,
        },
        {
          id: "5",
          title: "Mental Health Services Receive Record £500M Investment",
          summary:
            "Government announces largest ever investment in NHS mental health services, including 100 new crisis intervention teams.",
          content: `The Department of Health and Social Care has announced a record-breaking £500 million investment in NHS mental health services, the largest single investment in mental healthcare in NHS history.

**Investment Breakdown**:
- £200M for 100 new crisis intervention teams
- £150M for community mental health services expansion
- £100M for children and adolescent mental health services (CAMHS)
- £50M for mental health staff training and development

**Service Expansion**: The investment will fund:
- 2,000 additional mental health professionals
- 24/7 crisis support in every NHS region
- Expanded therapy services with reduced waiting times
- Enhanced support for eating disorders and personality disorders

**Crisis Response**: New crisis intervention teams will provide same-day assessment and support for individuals experiencing mental health emergencies, reducing pressure on A&E departments and ensuring appropriate specialist care.

Health Secretary Sarah Williams stated: "Mental health is every bit as important as physical health. This investment ensures that anyone experiencing a mental health crisis receives immediate, expert support when they need it most."

**Waiting Time Targets**: The funding aims to reduce average waiting times for:
- Initial assessment: From 6 weeks to 2 weeks
- Therapy services: From 18 weeks to 6 weeks
- CAMHS appointments: From 12 weeks to 4 weeks

**Training and Development**: A comprehensive training programme will upskill existing staff and attract new professionals to mental health specialties. This includes:
- Enhanced training for GPs in mental health recognition
- Specialist qualifications for mental health nurses
- Peer support worker certification programmes

The investment is part of the government's commitment to achieve parity between mental and physical health services by 2026.

Implementation begins immediately, with the first new crisis teams operational by April 2025.`,
          category: "policy",
          publishedAt: "2025-01-11T10:30:00Z",
          readTime: 3,
          views: 18943,
          source: "Department of Health",
          sourceUrl:
            "https://www.gov.uk/government/organisations/department-of-health-and-social-care",
          image: "/placeholder.svg",
          tags: [
            "Mental Health",
            "Investment",
            "Crisis Support",
            "Government Policy",
          ],
          priority: "high",
          verified: true,
        },
        {
          id: "6",
          title: "Robotic Surgery Programme Expands to 50 NHS Hospitals",
          summary:
            "Advanced robotic surgical systems being deployed across NHS trusts to improve precision and reduce recovery times.",
          content: `NHS England has announced the expansion of its robotic surgery programme to 50 hospitals nationwide, representing a £300 million investment in cutting-edge surgical technology.

**Programme Overview**: The initiative introduces state-of-the-art robotic surgical systems that enable surgeons to perform minimally invasive procedures with unprecedented precision and control.

**Clinical Benefits**:
- 60% reduction in surgical complications
- 50% shorter recovery times for patients
- Improved surgical precision for complex procedures
- Reduced scarring and post-operative pain

**Surgical Applications**: Robotic systems will be used for:
- Cardiac surgery and valve repairs
- Neurological procedures
- Orthopedic joint replacements
- Urological and gynecological surgeries
- Complex cancer operations

Mr. David Harrison, Consultant Surgeon at Leeds Teaching Hospitals, explained: "Robotic surgery represents a quantum leap in surgical capability. We can now perform procedures that were previously impossible and achieve better outcomes for our patients."

**Training Programme**: Comprehensive training will be provided to over 500 surgeons and surgical teams. The programme includes:
- Virtual reality simulation training
- Hands-on robotic system workshops
- Mentorship from internationally recognized experts
- Ongoing competency assessments

**Patient Access**: The expansion ensures that patients across England will have access to robotic surgery within 90 minutes of their home. Priority will be given to complex cases where robotic assistance provides the greatest benefit.

**Technology Specifications**: The new systems feature:
- 3D high-definition visualization
- Tremor reduction technology
- Enhanced dexterity with 540-degree instrument rotation
- Real-time imaging integration

Early results from pilot programmes show excellent patient satisfaction rates, with 96% of patients reporting they would recommend robotic surgery to others.

The programme is expected to be fully operational across all 50 sites by December 2025.`,
          category: "technology",
          publishedAt: "2025-01-10T13:20:00Z",
          readTime: 4,
          views: 14567,
          source: "NHS England",
          sourceUrl: "https://www.england.nhs.uk/",
          image: "/placeholder.svg",
          tags: ["Robotic Surgery", "Technology", "Innovation", "Patient Care"],
          priority: "medium",
          verified: true,
        },
        {
          id: "7",
          title: "NHS Green Plan: Carbon Neutral Healthcare by 2040",
          summary:
            "Comprehensive sustainability strategy aims to make NHS the world's first carbon neutral health system.",
          content: `NHS England has unveiled its ambitious Green Plan, setting a target to become the world's first carbon neutral health system by 2040, five years ahead of the UK's national net-zero commitment.

**Sustainability Targets**:
- 80% reduction in carbon emissions by 2030
- 100% renewable energy across all NHS facilities by 2035
- Zero waste to landfill by 2030
- Sustainable procurement for all medical supplies

**Implementation Strategy**: The plan focuses on four key areas:

**Energy Efficiency**: Major retrofitting programmes will improve insulation, install smart heating systems, and deploy renewable energy solutions across 1,500 NHS buildings.

**Sustainable Transport**:
- Electric vehicle fleet for patient transport
- Improved public transport links to hospitals
- Cycling infrastructure for staff
- Virtual consultations to reduce patient travel

**Waste Reduction**:
- Circular economy principles for medical equipment
- Advanced recycling programmes
- Elimination of single-use plastics where clinically appropriate
- Improved pharmaceutical waste management

**Green Procurement**: New purchasing guidelines prioritize suppliers with strong environmental credentials and locally sourced products where possible.

Dame Sarah Clarke, NHS Chief Environmental Officer, stated: "Climate change is one of the greatest health challenges we face. By leading the way in sustainable healthcare, we're protecting both current and future generations."

**Financial Benefits**: The plan is expected to save the NHS £2.5 billion annually by 2040 through:
- Reduced energy costs
- Lower waste disposal fees
- Decreased transport expenses
- Improved staff health and productivity

**Innovation Fund**: A £100 million green innovation fund will support research into sustainable healthcare technologies and practices.

The plan includes partnerships with universities and private sector organizations to develop new sustainable healthcare solutions.

Progress will be monitored through annual sustainability reports and independent environmental audits.`,
          category: "policy",
          publishedAt: "2025-01-09T09:15:00Z",
          readTime: 4,
          views: 11234,
          source: "NHS Sustainable Development Unit",
          sourceUrl: "https://www.sduhealth.org.uk/",
          image: "/placeholder.svg",
          tags: [
            "Sustainability",
            "Environment",
            "Carbon Neutral",
            "Green Health",
          ],
          priority: "medium",
          verified: true,
        },
        {
          id: "8",
          title:
            "Emergency Medicine Consultants in Short Supply Across England",
          summary:
            "Critical shortage of emergency medicine specialists prompts urgent recruitment and retention initiatives.",
          content: `NHS England faces a critical shortage of emergency medicine consultants, with vacancy rates reaching 15% across emergency departments nationwide. The shortage is affecting patient care and putting additional strain on existing staff.

**Current Situation**: Data shows:
- 450 unfilled emergency medicine consultant positions
- Average waiting times increased by 25% over the past year
- 70% of A&E departments operating below optimal staffing levels
- Increased reliance on locum consultants

**Recruitment Challenges**: Several factors contribute to the shortage:
- High stress and burnout rates in emergency medicine
- Competitive international opportunities
- Lengthy training requirements (minimum 6 years)
- Challenging work-life balance

**Retention Initiatives**: NHS England is implementing:
- Enhanced salary packages for emergency medicine specialists
- Improved working conditions and shift patterns
- Additional annual leave entitlements
- Professional development opportunities
- Mental health and wellbeing support programmes

Dr. Michael Roberts, President of the Royal College of Emergency Medicine, commented: "We need immediate action to address this crisis. Emergency medicine is a vital specialty, and we must ensure it's an attractive career choice for medical graduates."

**Training Programme Expansion**: The number of emergency medicine training places will increase by 40% over the next three years, with enhanced training support and mentorship programmes.

**International Recruitment**: Partnerships with medical schools in Australia, Canada, and South Africa aim to attract experienced emergency medicine specialists to the NHS.

**Technology Solutions**: AI-powered triage systems and enhanced diagnostic tools are being deployed to support existing staff and improve efficiency.

The shortage particularly affects rural and smaller hospitals, where single-consultant departments struggle to provide 24/7 coverage.

Emergency measures include enhanced collaboration between hospitals and shared consultant services across NHS trust boundaries.`,
          category: "recruitment",
          publishedAt: "2025-01-08T15:40:00Z",
          readTime: 3,
          views: 9876,
          source: "Royal College of Emergency Medicine",
          sourceUrl: "https://www.rcem.ac.uk/",
          image: "/placeholder.svg",
          tags: ["Emergency Medicine", "Staff Shortage", "Recruitment", "A&E"],
          priority: "high",
          verified: true,
        },
        {
          id: "9",
          title: "Genomic Medicine Initiative Launches Across 100 NHS Centres",
          summary:
            "Personalized medicine programme uses genetic analysis to tailor treatments for cancer and rare diseases.",
          content: `NHS England has launched the largest genomic medicine programme in Europe, with 100 NHS centers now offering genetic analysis to personalize treatments for cancer patients and those with rare diseases.

**Programme Scope**: The initiative provides:
- Whole genome sequencing for cancer patients
- Genetic testing for rare disease diagnosis
- Pharmacogenomic testing for drug response
- Family screening for hereditary conditions

**Clinical Applications**: Genomic analysis enables:
- Targeted cancer therapies based on tumor genetics
- Precise dosing of medications based on genetic variants
- Early intervention for hereditary disease risk
- Improved diagnosis for previously unidentified conditions

Professor Helen Anderson, NHS Genomics Lead, explained: "Genomic medicine represents the future of healthcare. By understanding a patient's genetic makeup, we can provide treatments that are more effective and have fewer side effects."

**Success Stories**: Early results show:
- 40% improvement in cancer treatment response rates
- 60% reduction in adverse drug reactions
- Diagnosis achieved for 30% of previously undiagnosed rare disease patients
- Family screening preventing disease in at-risk relatives

**Data Security**: Robust safeguards protect genetic information:
- Encrypted data storage and transmission
- Strict access controls and audit trails
- Patient consent for all genetic testing
- Clear data retention and deletion policies

**Training and Education**: Healthcare professionals receive specialized training in:
- Genetic counseling techniques
- Interpretation of genomic test results
- Ethical considerations in genetic testing
- Communication with patients and families

**Research Integration**: The programme contributes to international research efforts:
- Participation in global genomic databases
- Development of new genetic therapies
- Population health studies
- Rare disease research networks

**Future Expansion**: Plans include:
- Genomic screening for common diseases
- Integration with AI for treatment prediction
- Expanded testing for mental health conditions
- Pharmacogenomic testing for all medications

The programme represents a £200 million investment over five years and positions the NHS as a global leader in genomic medicine.`,
          category: "research",
          publishedAt: "2025-01-07T12:25:00Z",
          readTime: 4,
          views: 13452,
          source: "Genomics England",
          sourceUrl: "https://www.genomicsengland.co.uk/",
          image: "/placeholder.svg",
          tags: [
            "Genomics",
            "Personalized Medicine",
            "Cancer",
            "Rare Diseases",
          ],
          priority: "medium",
          verified: true,
        },
        {
          id: "10",
          title: "NHS Cybersecurity Framework Updated Following Global Threats",
          summary:
            "Enhanced security protocols implemented across all NHS systems to protect against evolving cyber threats.",
          content: `NHS Digital has implemented a comprehensive cybersecurity framework update following increased global cyber threats targeting healthcare systems. The enhanced protocols affect all NHS trusts and digital services.

**Threat Landscape**: Recent analysis reveals:
- 340% increase in healthcare-targeted cyber attacks globally
- Ransomware attempts on UK healthcare systems up 250%
- Sophisticated phishing campaigns targeting NHS staff
- State-sponsored attacks on healthcare infrastructure

**Security Enhancements**: New measures include:
- Multi-factor authentication for all NHS systems
- Advanced endpoint detection and response tools
- Continuous network monitoring and threat detection
- Enhanced staff cybersecurity training programmes

**Zero Trust Architecture**: Implementation of zero trust principles:
- Verification required for every system access
- Microsegmentation of network infrastructure
- Continuous monitoring of user behavior
- Automated threat response capabilities

James Foster, NHS Chief Information Security Officer, stated: "Cybersecurity is not optional in healthcare. We're implementing military-grade security to protect patient data and ensure uninterrupted care delivery."

**Staff Training**: Comprehensive cybersecurity education includes:
- Monthly phishing simulation exercises
- Incident response training
- Security awareness workshops
- Role-specific security protocols

**Investment Details**: £75 million allocated for:
- Advanced security software and hardware
- Specialist cybersecurity staff recruitment
- 24/7 security operations center expansion
- Third-party security assessments

**Compliance Requirements**: All NHS suppliers must now meet:
- ISO 27001 information security standards
- Regular penetration testing requirements
- Incident reporting obligations
- Data encryption mandates

**Recovery Capabilities**: Enhanced disaster recovery includes:
- Real-time data backup systems
- Offline backup storage facilities
- Rapid system restoration protocols
- Alternative communication channels

**Industry Collaboration**: Partnerships with:
- National Cyber Security Centre (NCSC)
- International healthcare cybersecurity networks
- Leading cybersecurity vendors
- Academic research institutions

The framework meets international healthcare cybersecurity standards and positions the NHS as a leader in healthcare data protection.

Regular security audits and updates ensure continued protection against evolving threats.`,
          category: "technology",
          publishedAt: "2025-01-06T14:50:00Z",
          readTime: 3,
          views: 8945,
          source: "NHS Digital",
          sourceUrl: "https://digital.nhs.uk/",
          image: "/placeholder.svg",
          tags: [
            "Cybersecurity",
            "Data Protection",
            "Digital Security",
            "NHS Technology",
          ],
          priority: "high",
          verified: true,
        },
      ];

      setArticles(simulatedArticles);
      setIsLoading(false);
    };

    fetchNewsArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "breaking":
        return "bg-red-100 text-red-800";
      case "policy":
        return "bg-blue-100 text-blue-800";
      case "recruitment":
        return "bg-green-100 text-green-800";
      case "technology":
        return "bg-purple-100 text-purple-800";
      case "compliance":
        return "bg-orange-100 text-orange-800";
      case "research":
        return "bg-indigo-100 text-indigo-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "breaking":
        return AlertCircle;
      case "policy":
        return Shield;
      case "recruitment":
        return Users;
      case "technology":
        return Stethoscope;
      case "compliance":
        return CheckCircle;
      case "research":
        return TrendingUp;
      default:
        return Newspaper;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-l-red-500";
      case "medium":
        return "border-l-yellow-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-gray-500";
    }
  };

  const categories = [
    { value: "all", label: "All News" },
    { value: "breaking", label: "Breaking News" },
    { value: "policy", label: "Policy Updates" },
    { value: "recruitment", label: "Recruitment" },
    { value: "technology", label: "Technology" },
    { value: "compliance", label: "Compliance" },
    { value: "research", label: "Research" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBanner />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-poppins font-bold text-gray-900">
                NHS Healthcare News Hub
              </h1>
              <p className="text-gray-600">
                AI-powered real-time healthcare news and updates
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </div>
            <span>•</span>
            <span>Last updated: {new Date().toLocaleString("en-GB")}</span>
            <span>•</span>
            <Badge className="bg-blue-100 text-blue-800">
              AI-Curated Content
            </Badge>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Search UK healthcare news, topics, or keywords..."
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
                  </div>
                </div>

                {/* Real-time UK Healthcare News Search Results */}
                {searchTerm && filteredArticles.length > 0 && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-green-900">
                        UK Healthcare News Results for "{searchTerm}"
                      </h4>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-700">
                          Live UK News Feed
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {filteredArticles.slice(0, 3).map((article) => (
                        <div
                          key={article.id}
                          className="flex items-center justify-between bg-white p-3 rounded cursor-pointer hover:bg-gray-50"
                          onClick={() => setSelectedArticle(article)}
                        >
                          <div>
                            <div className="font-medium text-gray-900 line-clamp-1">
                              {article.title}
                            </div>
                            <div className="text-sm text-gray-600">
                              {article.source} •{" "}
                              {new Date(article.publishedAt).toLocaleDateString(
                                "en-GB",
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge
                              className={getCategoryColor(article.category)}
                            >
                              {article.category}
                            </Badge>
                            {article.priority === "high" && (
                              <Badge className="bg-red-100 text-red-800">
                                Breaking
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                      {filteredArticles.length > 3 && (
                        <div className="text-sm text-green-700 text-center pt-2">
                          +{filteredArticles.length - 3} more UK healthcare news
                          articles found
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">
              AI is fetching the latest healthcare news...
            </p>
          </div>
        )}

        {/* News Grid */}
        {!isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => {
              const CategoryIcon = getCategoryIcon(article.category);

              return (
                <Card
                  key={article.id}
                  className={`hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 ${getPriorityColor(article.priority)}`}
                  onClick={() => setSelectedArticle(article)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={getCategoryColor(article.category)}>
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {article.category}
                      </Badge>
                      {article.verified && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <CardTitle className="text-lg leading-tight line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {article.summary}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime} min read</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(article.publishedAt).toLocaleDateString(
                            "en-GB",
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500">
                      Source: {article.source}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* No Results */}
        {!isLoading && filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No articles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </main>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="relative border-b">
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="pr-12">
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className={getCategoryColor(selectedArticle.category)}>
                    {selectedArticle.category}
                  </Badge>
                  {selectedArticle.priority === "high" && (
                    <Badge className="bg-red-100 text-red-800">
                      High Priority
                    </Badge>
                  )}
                  {selectedArticle.verified && (
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                <CardTitle className="text-2xl mb-4">
                  {selectedArticle.title}
                </CardTitle>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(
                          selectedArticle.publishedAt,
                        ).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedArticle.readTime} minute read</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>
                        {selectedArticle.views.toLocaleString()} views
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Bookmark className="w-4 h-4 mr-1" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6 font-medium">
                  {selectedArticle.summary}
                </p>

                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {selectedArticle.content}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedArticle.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Source:
                      <a
                        href={selectedArticle.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-primary hover:underline"
                      >
                        {selectedArticle.source}
                        <ExternalLink className="w-3 h-3 inline ml-1" />
                      </a>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Discuss
                      </Button>
                      <Button variant="outline" size="sm">
                        <Heart className="w-4 h-4 mr-1" />
                        Like
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Footer />
    </div>
  );
}
