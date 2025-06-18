import LandingSection from "./components/LandingSection";
import BestSelling from "./components/BestSelling";
import FAQ from "./components/FAQ";
export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <LandingSection />
      <BestSelling />
      <FAQ/>
    </main>
  );
}
