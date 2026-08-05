import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EducationTimeline from "@/components/EducationTimeline";

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <EducationTimeline />
      <Footer />
    </main>
  );
}
