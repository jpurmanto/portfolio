import {
  AboutView,
  ContactView,
  TimelineView,
  HomeView,
  ProjectView,
} from "@/components/views";
import { getSectionData } from "@/services";

export default async function Home() {
  const aboutSectionData = await getSectionData("about");
  const formationSectionData = await getSectionData("formation");
  const experienceSectionData = await getSectionData("experience");
  const homeSectionData = await getSectionData("home");
  const projectSectionData = await getSectionData("projects");

  return (
    <main>
      <HomeView data={aboutSectionData?.length ? homeSectionData[0] : []} />
      <AboutView data={aboutSectionData?.length ? aboutSectionData[0] : []} />
      <TimelineView
        formationData={formationSectionData}
        experienceData={experienceSectionData}
      />
      <ProjectView data={projectSectionData} />
      <ContactView />
    </main>
  );
}
