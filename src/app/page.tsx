import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WelcomeSection from "./components/WelcomeSection";

export default function Home() {
  return (
    <div className="bg-beige text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <WelcomeSection />
        <ServicesSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
