import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import BackgroundWrapper from "../Components/BackgroundWrapper";

export const metadata = {
  title: "About IVTC Campus | Best IT Training for Sri Lankan School Leavers",
  description: "Learn how IVTC Campus helps Sri Lankan students start their IT careers after A/Ls. Practical training, modern labs, and high job placement in software engineering and more.",
  keywords: [
    "About IVTC Campus",
    "IT Training Sri Lanka after A/L",
    "Software Engineering Sri Lanka",
    "Computer Courses for School Leavers",
    "Best IT Campus Colombo",
    "Practical IT Training Sri Lanka",
    "Jobs after A/L Sri Lanka"
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
