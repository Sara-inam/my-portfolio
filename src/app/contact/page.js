import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import Schedule from "@/components/Schedule";
import SocialMediaProfiles from "@/components/SocialMediaProfiles";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <ContactForm />
      <Schedule />
      <SocialMediaProfiles />
      <Footer />
    </main>
  );
}