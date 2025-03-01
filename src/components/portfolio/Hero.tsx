"use client";
import React from "react";

import { usePortfolioStore } from "@/store/usePortfolioStore";

import { HeroEditableWithAuth } from "portfolioui/recruiters-delight";
import { useAppStore } from "@/store/appStore";
import { useTheme } from "next-themes";

export const Hero = () => {
  const {
    portfolio: { heroInfo },
    isLoading,
    saveHeroInfo,
  } = usePortfolioStore();
  const { isEditing } = useAppStore();

  const { theme } = useTheme();

  return (
    <HeroEditableWithAuth
      isEditing={isEditing}
      heroInfo={heroInfo}
      saveHeroInfo={saveHeroInfo}
      isLoading={isLoading}
      theme={theme}
    />
  );
};
