import React from "react";
import { usePortfolioStore } from "@/store/usePortfolioStore";
import { useAppStore } from "@/store/appStore";
import { ProjectsTimelineWithAuth } from "portfolioui/hr-favorite";

export const Projects = () => {
  const {
    saveProjectsInfo,
    portfolio: { projectsInfo },
    isLoading,
  } = usePortfolioStore();
  const { isEditing } = useAppStore();
  return (
    <ProjectsTimelineWithAuth
      isEditing={isEditing}
      saveProjectsInfo={saveProjectsInfo}
      projectsInfo={projectsInfo}
      isLoading={isLoading}
      circleClassName="bg-fuchsia-300 dark:bg-fuchsia-300"
      lineClassName="from-purple-800 via-pink-700"
    />
  );
};
