import LandingSection from "./components/LandingSection";
import BestSelling from "./components/BestSelling";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <LandingSection />
      <BestSelling />
    </main>
  );
}
