import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";

import SocialSidebar from "./Components/SocialSidebar";
import WhatsAppButton from "./Components/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IVTC Campus",
  description: "Developed by create Inzeedo",
  icons: {
    icon: "/ivtc_favicon_white.png",
    shortcut: "/ivtc_favicon_white.png",
    apple: "/ivtc_favicon_white.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {/* <SmoothScrollProvider> */}
          <SocialSidebar />
          {/* <WhatsAppButton /> */}
          {children}
          {/* </SmoothScrollProvider> */}

        </ThemeProvider>
      </body>
    </html>
  );
}
