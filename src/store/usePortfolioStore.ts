import { create } from "zustand";
import { serverRoutes } from "@/lib/contants";
import { HeroType } from "portfolioui";
import { ProjectsInfoType } from "@/components/recruitersdelight/project.types";
import { SkillsSlidersType } from "@/components/recruitersdelight/skillsSliders.types";
import { PersonalInfoType } from "@/components/recruitersdelight/personalInfo.types";

const initialPersonalState: PersonalInfoType = {
  displayName: "",
  name: "",
  contactNumber: "",
  email: "",
  socialMedia: {
    linkedIn: "",
    github: "",
    youtube: "",
    xdotcom: "",
  },
};

const initialHeroState: HeroType = {
  displayName: "",
  message: "",
  introduction: "",
  description: "",
};

const initialSkillsState: SkillsSlidersType = {
  displayName: "",
  skills: [],
};

const initialProjectState = {
  displayName: "",
  projects: [
    {
      timeline: "",
      projectName: "",
      headline1: "",
      headline2: "",
      designation: "",
      link: "",
      cover: "",
      skills: "",
      companyName: "",
      clientName: "",
      images: [],
    },
  ],
};

export interface PortfolioType {
  personalInfo: PersonalInfoType;
  heroInfo: HeroType;
  skillsInfo: SkillsSlidersType;
  projectsInfo: ProjectsInfoType;
}

interface PortfolioStore {
  portfolio: PortfolioType;
  isLoading: boolean;
  error: string;
  savePortfolio: (x: PortfolioType) => void;
  savePersonalInfo: (x: PersonalInfoType) => void;
  saveHeroInfo: (x: HeroType) => void;
  saveProjectsInfo: (x: ProjectsInfoType) => void;
  saveSkillsInfo: (x: SkillsSlidersType) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateState: (x: any) => void;
}

export const usePortfolioStore = create<PortfolioStore>((set, get) => ({
  portfolio: {
    personalInfo: initialPersonalState,
    heroInfo: initialHeroState,
    skillsInfo: initialSkillsState,
    projectsInfo: initialProjectState,
  },
  isLoading: true,
  error: "",

  savePortfolio: async (portfolioData: PortfolioType) => {
    set({ isLoading: true });
    try {
      const response = await fetch(serverRoutes.PORTFOLIO, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(portfolioData),
      });
      if (response.ok) {
        const data = await response.json();
        set({
          portfolio: data,
          isLoading: false,
        });
      } else {
        set({ isLoading: false, error: "Failed to Save Portfolio Info" });
      }
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },

  savePersonalInfo: async (personalInfo: PersonalInfoType) => {
    const currentPortfolio = get().portfolio;
    await get().savePortfolio({
      ...currentPortfolio,
      personalInfo,
    } as PortfolioType);
  },

  saveHeroInfo: async (heroInfo: HeroType) => {
    const currentPortfolio = get().portfolio;
    await get().savePortfolio({
      ...currentPortfolio,
      heroInfo,
    } as PortfolioType);
  },

  saveSkillsInfo: async (skillsInfo: SkillsSlidersType) => {
    const currentPortfolio = get().portfolio;
    await get().savePortfolio({
      ...currentPortfolio,
      skillsInfo,
    } as PortfolioType);
  },

  saveProjectsInfo: async (projectsInfo: ProjectsInfoType) => {
    const currentPortfolio = get().portfolio;
    await get().savePortfolio({
      ...currentPortfolio,
      projectsInfo,
    } as PortfolioType);
  },

  updateState: (newState: PortfolioType) => {
    set({
      portfolio: newState,
      isLoading: false,
      error: "",
    });
  },
}));
