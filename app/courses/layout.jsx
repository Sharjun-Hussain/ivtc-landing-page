import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function CoursesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
