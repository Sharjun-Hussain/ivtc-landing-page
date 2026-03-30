import BoardHero from "@/components/MeerzaFoundation/BoardHero";
import BoardWhatWeDo from "@/components/MeerzaFoundation/BoardWhatWeDo";
import BoardDirectors from "@/components/MeerzaFoundation/BoardDirectors";
import BoardImpact from "@/components/MeerzaFoundation/BoardImpact";

export const metadata = {
  title: "Board of Directors | Meerza Foundation - Leadership & Vision",
  description:
    "Meet the visionary leaders behind the Meerza Foundation. Learn about our board of directors, their mission to inspire change, and the impact of our community-driven projects.",
  keywords: [
    "Meerza Foundation leadership",
    "Board of Directors",
    "Foundation Vision",
    "Community Impact",
    "Social Responsibility",
    "IVTC Campus leaders",
  ],
  openGraph: {
    title: "Board of Directors | Meerza Foundation - Leadership & Vision",
    description:
      "Meet the visionary leaders behind the Meerza Foundation and discover our mission pillars and community impact.",
    url: "https://ivtccampus.lk/meerza-foundation/board-of-directors",
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
    title: "Board of Directors | Meerza Foundation - Leadership & Vision",
    description:
      "Meet the visionary leaders behind the Meerza Foundation and discover our mission pillars and community impact.",
    images: ["/og-image.png"],
  },
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
