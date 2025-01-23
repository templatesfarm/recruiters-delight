import { useAppStore } from "@/store/appStore";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const ApplyChangesButton = () => {
  const { isEditing, setIsEditing } = useAppStore();
  const router = useRouter();
  return (
    <>
      {isEditing && (
        <div className="flex justify-end my-5 z-50 mr-48">
          <Button
            onClick={() => {
              setIsEditing(false);
              router.refresh();
            }}
            className="cursor-pointer z-50"
          >
            Apply Changes
          </Button>
        </div>
      )}
    </>
  );
};
