import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function AboutLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
