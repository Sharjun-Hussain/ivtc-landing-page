import Image from "next/image";
import Footer from "./sections/Footer";
import HeroWithMegaMenu from "./sections/Hero";
import CoursePathways from "./sections/CourseCategories";
import CampusStats from "./sections/CampusOverview";
import StudentRegistration from "./sections/StudentRegistration";
import LMSLogin from "./sections/LMSLogin";
import UpcomingCourses from "./sections/UpcomingCourses";
import BackgroundWrapper from "./Components/BackgroundWrapper";

export default function Home() {
  return (
    <BackgroundWrapper>
      <HeroWithMegaMenu />
      <CampusStats />
      <UpcomingCourses />
      <CoursePathways />
      <LMSLogin />
      <StudentRegistration />
      <Footer />
    </BackgroundWrapper>
  );
}
