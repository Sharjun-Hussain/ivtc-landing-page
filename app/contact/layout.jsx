import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function ContactLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
