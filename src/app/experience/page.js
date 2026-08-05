import Navbar from "@/components/Navbar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import EducationTimeline from "@/components/EducationTimeline";
import OnlineVerification from "@/components/OnlineVerification";
import Footer from "@/components/Footer";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <ExperienceTimeline />
      <EducationTimeline />
      <OnlineVerification />
      <Footer />
    </main>
  );
}