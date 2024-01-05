import { getSectionData } from "@/services";
import { AuthProvider } from "./auth-provider";
import { ContentProvider } from "./content-provider";
import { ModalProvider } from "./modal-provider";
import { AllData } from "@/types";

export default async function Providers({
  children,
}: {
  children: React.ReactElement;
}) {
  const allData: AllData = await getSectionData("all");

  return (
    <AuthProvider>
      <ContentProvider data={allData}>
        <ModalProvider>{children}</ModalProvider>
      </ContentProvider>
    </AuthProvider>
  );
}
