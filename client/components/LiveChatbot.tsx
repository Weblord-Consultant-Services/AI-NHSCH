import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Phone,
  Mail,
  ExternalLink,
  Clock,
  CheckCircle,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "quick-reply" | "contact";
}

export default function LiveChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        text: "Hello! I'm the NHSCareHub virtual assistant. I'm here to help you with staff recruitment, compliance questions, equipment sourcing, and platform support. How can I assist you today?",
        sender: "bot",
        timestamp: new Date(),
        type: "text",
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate bot response
  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("job") ||
      message.includes("recruitment") ||
      message.includes("hiring")
    ) {
      return "I can help you with NHS job opportunities! We have over 2,800+ active positions across the UK. You can browse jobs by specialty, location, or trust. Would you like me to connect you with our recruitment team or show you current openings?";
    }

    if (
      message.includes("compliance") ||
      message.includes("document") ||
      message.includes("guideline")
    ) {
      return "For compliance support, I can help you access NHS guidelines, CQC standards, and regulatory documents. We have 1,247+ compliance documents available for download. Would you like help finding specific compliance materials?";
    }

    if (
      message.includes("equipment") ||
      message.includes("medical") ||
      message.includes("supply")
    ) {
      return "Our equipment marketplace connects you with NHS-approved suppliers for medical devices, PPE, and healthcare equipment. We work with 892 verified suppliers. Would you like to browse equipment categories or speak with a procurement specialist?";
    }

    if (
      message.includes("help") ||
      message.includes("support") ||
      message.includes("contact")
    ) {
      return "I'm here to help! You can reach our support team 24/7 at +44 203 488 8343 or email support@nhscarehub.uk. For urgent NHS operational issues, we provide immediate assistance. What specific area do you need help with?";
    }

    if (
      message.includes("price") ||
      message.includes("cost") ||
      message.includes("free")
    ) {
      return "NHSCareHub core services are available to all verified NHS professionals at no cost. This includes job matching, compliance document access, and basic equipment sourcing. Premium features and specialized services may have associated costs. Would you like to learn more about our service tiers?";
    }

    if (
      message.includes("account") ||
      message.includes("register") ||
      message.includes("sign up")
    ) {
      return "Creating your NHS professional account is quick and secure! You'll need your professional credentials for verification. All accounts are verified against NHS databases within 24-48 hours. Would you like help getting started with registration?";
    }

    return "Thank you for your question! I'm here to help with NHS recruitment, compliance, equipment sourcing, and platform support. If you need immediate assistance, please call our 24/7 support line at +44 203 488 8343 or email support@nhscarehub.uk. Is there something specific I can help you find today?";
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);

      // If chat is minimized, show unread count
      if (isMinimized) {
        setUnreadCount((prev) => prev + 1);
      }
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickReplies = [
    "View job opportunities",
    "Download compliance docs",
    "Browse equipment",
    "Contact support",
    "Pricing information",
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadCount(0);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (!isMinimized) {
      setUnreadCount(0);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          className="w-16 h-16 rounded-full shadow-2xl bg-primary hover:bg-primary/90 relative"
        >
          <MessageCircle className="w-8 h-8 text-white" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`w-96 shadow-2xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"}`}
      >
        {/* Header */}
        <CardHeader className="bg-primary text-white rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-lg">NHS CareHub Assistant</CardTitle>
                <div className="flex items-center space-x-2 text-sm opacity-90">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Online - Avg response &lt; 1min</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMinimize}
                className="text-white hover:bg-white/20 p-1"
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            {/* Messages */}
            <CardContent className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-xs ${
                      message.sender === "user"
                        ? "flex-row-reverse space-x-reverse"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString("en-GB", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </CardContent>

            {/* Quick Replies */}
            {messages.length <= 1 && !isTyping && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-600 mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-1">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setInputValue(reply);
                        setTimeout(() => sendMessage(), 100);
                      }}
                      className="text-xs h-7 px-2"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Options */}
            <div className="px-4 pb-2">
              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs font-semibold text-blue-900 mb-2">
                  Need immediate help?
                </p>
                <div className="flex space-x-4 text-xs">
                  <a
                    href="tel:+442034888343"
                    className="flex items-center space-x-1 text-blue-700 hover:text-blue-900"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:support@nhscarehub.uk"
                    className="flex items-center space-x-1 text-blue-700 hover:text-blue-900"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  onClick={sendMessage}
                  size="sm"
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                <Clock className="w-3 h-3 inline mr-1" />
                Available 24/7 • Response time &lt; 1 minute
              </p>
            </div>
          </>
        )}

        {isMinimized && unreadCount > 0 && (
          <div className="absolute -top-2 -right-2">
            <Badge className="w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {unreadCount}
            </Badge>
          </div>
        )}
      </Card>
    </div>
  );
}
