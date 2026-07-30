import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Schedule from "@/components/Schedule";

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Schedule />
      <Footer />
    </main>
  );
}
