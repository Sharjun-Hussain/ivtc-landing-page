import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

export default function FoundationLayout({ children }) {
  return (
    <>
      <Navbar />
      {/* Background Decorative Element (Synced with Courses) */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-[#002147]/10 dark:bg-[#002147]/15 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
      <Footer />
    </>
  );
}
