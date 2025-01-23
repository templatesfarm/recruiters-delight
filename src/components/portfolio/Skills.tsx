"use client";
import React from "react";
import { useAppStore } from "@/store/appStore";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { SkillsEditableWithAuth } from "portfolioui/hr-favorite";

export const Skills = () => {
  const { portfolio, saveSkillsInfo, isLoading } = usePortfolioStore();
  const { isEditing } = useAppStore();

  return (
    <SkillsEditableWithAuth
      saveSkillsInfo={saveSkillsInfo}
      skillsInfo={portfolio.skillsInfo}
      isEditing={isEditing}
      isLoading={isLoading}
      containerClassName=""
    />
  );
};
