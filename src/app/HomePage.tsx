"use client";
import Footer from "@/components/portfolio/Footer";
import { Dock } from "@/components/portfolio/Dock";
import { Hero } from "@/components/portfolio/Hero";
import PasswordInput from "@/components/PasswordInput";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { PortfolioType, usePortfolioStore } from "@/store/usePortfolioStore";
import { useEffect } from "react";
import { ApplyChangesButton } from "@/components/ApplyChangesButton";
import { ScrollProgressView } from "portfolioui";
import { Achievements } from "@/components/portfolio/Achievements";

interface HomePageProps {
  portfolio: PortfolioType;
  url: string;
}

export default function HomePage({ portfolio, url }: HomePageProps) {
  const { updateState } = usePortfolioStore();

  useEffect(() => {
    console.log("url: ", url);
    updateState(portfolio);
  }, [updateState, portfolio, url]);

  return (
    <div className="min-h-screen overflow-hidden space-y-10 w-full">
      <div className="pb-5 relative">
        <PasswordInput />
        <ApplyChangesButton />
        <ScrollProgressView className="from-blue-400 to-blue-700 via-blue-500" />
        <Dock />
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <Footer />
      </div>
    </div>
  );
}
