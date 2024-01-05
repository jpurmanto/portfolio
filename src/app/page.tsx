import { Modal } from "@/components/ui";
import Navbar from "@/components/ui/Navbar";
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
      <Navbar />

      <HomeView />
      <AboutView />
      <TimelineView />
      <ProjectView />
      <ContactView />

      <Modal />
    </main>
  );
}
