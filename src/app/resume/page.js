import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Resume from "@/components/Resume";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Resume />
      <Footer />
    </main>
  );
}
