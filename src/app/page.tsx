import { Modal } from "@/components/ui";
import {
  AboutView,
  ContactView,
  HomeView,
  ProjectView,
  TimelineView,
} from "@/components/views";

export default async function Home() {
  return (
    <main>
      <HomeView />
      <AboutView />
      <TimelineView />
      <ProjectView />
      <ContactView />
      <Modal />
    </main>
  );
}
