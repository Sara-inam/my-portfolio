import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import Objective from "@/components/Objective";
import SocialProfiles from "@/components/SocialProfiles";
import Certifications from "@/components/Certifications";
import LinkedInPosts from "@/components/LinkedInPosts";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <AboutSection />
      <Objective />
      <SocialProfiles />
      <Certifications />
      <LinkedInPosts />
      <Footer />
    </main>
  );
}