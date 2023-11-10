import { AboutView } from "@/components/views";
import { getSectionData } from "@/services";

export default async function Home() {
  const aboutSectionData = await getSectionData("about");

  return (
    <main>
      <AboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
    </main>
  );
}
