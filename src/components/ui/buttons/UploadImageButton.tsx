"use client";

import { ProjectInterface } from "@/db";
import ContentContext from "@/providers/content-provider";
import { updateData } from "@/services";
import { AllData } from "@/types";
import { UploadButton } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function UploadImageButton({
  section,
  index,
  setCurrentImage,
}: {
  section: string;
  index?: number;
  setCurrentImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  const router = useRouter();
  const { currentData } = useContext(ContentContext);

  return (
    <main
      className="group-hover/image:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden"
      style={{ filter: "drop-shadow(5px 5px 10px #000" }}
    >
      <UploadButton
        endpoint="imageUploader"
        appearance={{ button:"ri-image-edit-fill gap-2 bg-[var(--secondary-color)]" ,allowedContent: "text-white bg-gray-500 px-2 rounded-md" }}
        onClientUploadComplete={async (res) => {
          const data =
            index !== undefined
              ? {
                  ...(
                    (currentData as AllData)[section as keyof AllData] as {
                      [key: string]: any;
                    }
                  )[index],
                  image: res[0].url,
                }
              : (currentData as AllData)[section as keyof AllData];

          setCurrentImage(res[0].url);
          await updateData(section.toLowerCase(), data);
          router.refresh();

          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
