import InitiativesHero from "@/components/MeerzaFoundation/InitiativesHero";
import InitiativesAcademicAid from "@/components/MeerzaFoundation/InitiativesAcademicAid";
import InitiativesQuranAcademy from "@/components/MeerzaFoundation/InitiativesQuranAcademy";
import InitiativesDigitalLibrary from "@/components/MeerzaFoundation/InitiativesDigitalLibrary";

export const metadata = {
  title: "Initiatives | Meerza Foundation - Empowering Communities",
  description:
    "Discover the humanitarian and educational initiatives of Meerza Foundation. From Academic Aid to Quran Academy and Digital Libraries, we empower lives through knowledge and compassion.",
  keywords: [
    "Meerza Foundation",
    "IVTC Campus charity",
    "Academic Aid Sri Lanka",
    "Quran Academy",
    "Digital Library",
    "Humanitarian Initiatives",
    "Educational Support",
  ],
  openGraph: {
    title: "Initiatives | Meerza Foundation - Empowering Communities",
    description:
      "Explore our humanitarian and educational initiatives, including student aid, Quran academy, and digital library resources.",
    url: "https://ivtccampus.lk/meerza-foundation",
    siteName: "Meerza Foundation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Initiatives | Meerza Foundation - Empowering Communities",
    description:
      "Explore our humanitarian and educational initiatives, including student aid, Quran academy, and digital library resources.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0a0a0a]">
      <InitiativesHero />
      <InitiativesAcademicAid />
      <InitiativesQuranAcademy />
      {/* <InitiativesDigitalLibrary /> */}
    </main>
  );
}
