import CampusStats from "./sections/CampusOverview";
import CoursePathways from "./sections/CourseCategories";
import LMSLogin from "./sections/LMSLogin";
import StudentRegistration from "./sections/StudentRegistration";
import UpcomingCourses from "./sections/UpcomingCourses";
import HeroWithMegaMenu from "./sections/Hero";

export default function Home() {
  return (
    <>
      <HeroWithMegaMenu />
      {/* <CampusStats /> */}
      <UpcomingCourses />
      <CoursePathways />
      <LMSLogin />
      <StudentRegistration />
    </>
  );
}
