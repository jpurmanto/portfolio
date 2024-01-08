"use client";

import ContentContext from "@/providers/content-provider";
import { updateData } from "@/services";
import { AllData } from "@/types";
import { UploadButton } from "@/utils/uploadthing";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

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
  const { currentData, setCurrentData } = useContext(ContentContext);
  const [uploading, setUploading] = useState(false);

  return (
    <main
      className={`group-hover/image:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
        uploading ? "block" : "hidden"
      }`}
      style={{ filter: "drop-shadow(5px 5px 10px #000" }}
    >
      <UploadButton
        endpoint="imageUploader"
        appearance={{
          button: "ri-image-edit-fill gap-2 bg-[var(--secondary-color)]",
          allowedContent: "text-white bg-gray-500 px-2 rounded-md",
        }}
        onUploadBegin={() => setUploading(true)}
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
              : {
                  ...(currentData as AllData)[section as keyof AllData],
                  image: res[0].url,
                };

          setCurrentImage(res[0].url);
          await updateData(section.toLowerCase(), data);

          setCurrentData({
            ...(currentData as AllData),
            [section as keyof AllData]: data,
          });

          setUploading(false);
          router.refresh();
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
