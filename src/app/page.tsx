import { AboutView } from "@/components/views";
import { AboutInterface } from "@/db";
import { getSectionData } from "@/services";

export default async function Home() {
  const aboutSectionData: AboutInterface[] | any = await getSectionData(
    "about"
  );

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
