import { usePortfolioStore } from "@/store/usePortfolioStore";
import { Skeleton } from "../ui/skeleton";
import { ContactViewWithAuth } from "portfolioui/hr-favorite";

export default function Footer() {
  const { portfolio, isLoading } = usePortfolioStore();
  const { personalInfo } = portfolio;

  if (isLoading) {
    return (
      <div className="flex flex-col justify-start items-center mx-auto w-[70%] md:w-[50%]">
        <Skeleton className="w-full h-24" />
        <Skeleton className="w-full h-24" />
      </div>
    );
  }
  return (
    <ContactViewWithAuth
      email={personalInfo.email}
      phoneNumber={personalInfo.contactNumber}
    />
  );
}
