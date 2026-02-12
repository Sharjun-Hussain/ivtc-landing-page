import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";
import SmoothScrollProvider from "./providers/SmoothScroll";
import SocialSidebar from "./Components/SocialSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IVTC Campus",
  description: "Developed by create Inzeedo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <SocialSidebar />
            {children}
          </SmoothScrollProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}
