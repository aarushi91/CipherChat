import AnimatedBackground from "../components/ui/AnimatedBackground";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import HeroSection from "../components/home/HeroSection";
import Features from "../components/layout/Features";
import FeaturesSection from "../components/home/FeaturesSection";
import PreviewSection from "../components/home/PreviewSection";
import StatsSection from "../components/home/StatsSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";
import WhyCipherChat from "../components/layout/WhyCipherChat";
import ChatShowcase from "../components/layout/ChatShowcase";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";

const Home = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#09090B] text-white">

            <AnimatedBackground />

            <Navbar />

            <Hero />

            <HeroSection />

            <Features />

            <FeaturesSection />

            <WhyCipherChat />

            <ChatShowcase />

            <PreviewSection />

            <StatsSection />

            <TestimonialsSection />

            <FAQSection />

            <CTASection />

            <Footer />

        </div>
    );
};

export default Home;