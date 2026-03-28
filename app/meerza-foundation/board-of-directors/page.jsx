import BoardHero from "@/components/MeerzaFoundation/BoardHero";
import BoardWhatWeDo from "@/components/MeerzaFoundation/BoardWhatWeDo";
import BoardDirectors from "@/components/MeerzaFoundation/BoardDirectors";
import BoardImpact from "@/components/MeerzaFoundation/BoardImpact";

export const metadata = {
  title: "Board of Directors - Meerza Foundation",
  description: "Meet the leadership behind the Meerza Foundation and discover our mission pillars and community impact.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <BoardHero />
      <BoardWhatWeDo />
      <BoardDirectors />
    
    </main>
  );
}
