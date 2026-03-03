import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export const metadata = {
  title: "About IVTC Campus | Top IT Training & Courses in Sri Lanka",
  description: "Learn about IVTC Campus, Sri Lanka's leading IT education center. We provide practical IT training, certifications, and degree pathways for school leavers.",
  keywords: ["IT Campus Sri Lanka", "IT Courses Sri Lanka", "About IVTC", "Software Engineering Training", "HNDIT Sri Lanka"],
};

export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
