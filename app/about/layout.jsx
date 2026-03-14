import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BackgroundWrapper from "../Components/BackgroundWrapper";

export const metadata = {
  title: "About IVTC Campus | Top IT Training & Degree Support in Sri Lanka",
  description: "Discover IVTC Campus: Your destination for expert A/L ICT classes, specialized After A/L diploma programs, and dedicated pathways for Degree and Post-Graduate success in Sri Lanka.",
  keywords: [
    "About IVTC Campus",
    "A/L ICT Classes Sri Lanka",
    "After A/L IT Courses",
    "Degree Support Sri Lanka",
    "Postgraduate Pathways Sri Lanka",
    "IT Training for School Leavers",
    "Best IT Campus Colombo",
    "Practical IT Training Sri Lanka",
    "Job-Ready IT Skills Sri Lanka"
  ],
};

export default function AboutLayout({ children }) {
  return (
    <BackgroundWrapper>
      <Navbar />
      {children}
      <Footer />
    </BackgroundWrapper>
  );
}
