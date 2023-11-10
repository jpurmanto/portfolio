import { AboutView, ContactView, ExperienceView } from "@/components/views";
import HomeView from "@/components/views/HomeView";
import { AboutInterface } from "@/db";
import { getSectionData } from "@/services";

export default async function Home() {
  const aboutSectionData: AboutInterface[] | any = await getSectionData(
    "about"
  );
  const educationSectionData = await getSectionData("education");
  const experienceSectionData = await getSectionData("experience");
  const homeSectionData = await getSectionData("home");

  return (
    <main>
      <HomeView data={homeSectionData} />
      <AboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      />
      <ExperienceView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ContactView />
    </main>
  );
}
