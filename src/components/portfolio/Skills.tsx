"use client";
import React from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useAppStore } from "@/store/appStore";
import { SkillsEditableWithAuth } from "portfolioui/recruiters-delight";
import { SliderIconType } from "portfolioui";

export const Skills = () => {
  const {
    portfolio: { skillsInfo },
    isLoading,
    saveSkillsInfo,
  } = usePortfolioStore();
  const { isEditing } = useAppStore();

  return (
    <SkillsEditableWithAuth
      saveSkillsInfo={saveSkillsInfo}
      skillsInfo={skillsInfo}
      isEditing={isEditing}
      isLoading={isLoading}
      containerClassName="bg-background"
      sliderIconClassName={SliderIconType.TINY_THUMB}
    />
  );
};
