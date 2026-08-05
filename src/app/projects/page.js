import Navbar from "@/components/Navbar";
import ProjectsList from "@/components/ProjectsList";
import Process from "@/components/Process";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <ProjectsList />
      <Process />
      <Schedule />
      <Footer />
    </main>
  );
}