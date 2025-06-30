import { ReactNode } from "react";
import LiveChatbot from "@/components/LiveChatbot";
import ScrollToTop from "@/components/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}

      {/* Global Components */}
      <LiveChatbot />
      <ScrollToTop />
    </>
  );
}
