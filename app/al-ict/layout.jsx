import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BackgroundWrapper from "../Components/BackgroundWrapper";

export const metadata = {
  title: "A/L ICT Resources | Notes, Videos & Past Papers Sri Lanka",
  description: "Free A/L ICT resources for Sri Lankan students. Download topic-wise notes, watch YouTube revision videos, and stay updated with latest exam news.",
  keywords: [
    "A/L ICT Notes Sri Lanka",
    "Sri Lanka A/L ICT Videos",
    "ICT Past Papers Download",
    "A/L ICT News",
    "ICT Syllabus Sri Lanka",
    "Free ICT Resources",
    "ICT Revision Classes"
  ],
};

export default function ALICTLayout({ children }) {
  return (
    <BackgroundWrapper>
      <Navbar />
      {children}
      <Footer />
    </BackgroundWrapper>
  );
}
