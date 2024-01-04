import { Modal } from "@/components/ui";
import {
  AboutView,
  ContactView,
  HomeView,
  ProjectView,
  TimelineView,
} from "@/components/views";
import { getSectionData } from "@/services";

export default async function Home() {
  const allData = await getSectionData("all");

  return (
    <main>
      <HomeView data={allData?.Home} />
      <AboutView data={allData?.About} />
      <TimelineView
        formationData={allData?.Formation}
        experienceData={allData?.Experience}
      />
      <ProjectView data={allData?.Project} />
      <ContactView />
      <Modal />
    </main>
  );
}
