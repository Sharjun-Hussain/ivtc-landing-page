import Image from "next/image";
import Footer from "./sections/Footer";
import HeroWithMegaMenu from "./sections/Hero";
import CoursePathways from "./sections/CourseCategories";
import CampusStats from "./sections/CampusOverview";
import StudentRegistration from "./sections/StudentRegistration";
import LMSLogin from "./sections/LMSLogin";

export default function Home() {
  return (
    <div >
      <HeroWithMegaMenu />
      <CampusStats />
      <CoursePathways />
      <LMSLogin />
      <StudentRegistration />

      <Footer />
    </div>
  );
}
