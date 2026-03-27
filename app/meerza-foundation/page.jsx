import InitiativesHero from "@/components/MeerzaFoundation/InitiativesHero";
import InitiativesAcademicAid from "@/components/MeerzaFoundation/InitiativesAcademicAid";
import InitiativesQuranAcademy from "@/components/MeerzaFoundation/InitiativesQuranAcademy";
import InitiativesDigitalLibrary from "@/components/MeerzaFoundation/InitiativesDigitalLibrary";

export const metadata = {
  title: "Initiatives - Meerza Foundation",
  description: "Explore our humanitarian and educational initiatives, including student aid, Quran academy, and digital library resources.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <InitiativesHero />
      <div className="max-w-7xl mx-auto px-6">
        <InitiativesAcademicAid />
        <InitiativesQuranAcademy />
        <InitiativesDigitalLibrary />
      </div>
    </main>
  );
}