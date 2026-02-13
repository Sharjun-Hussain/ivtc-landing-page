import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";

import SocialSidebar from "./Components/SocialSidebar";
import WhatsAppButton from "./Components/WhatsAppButton";

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
  icons: {
    icon: "/ivtc_logo.png",
    shortcut: "/ivtc_logo.png",
    apple: "/ivtc_logo.png",
  },
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
          {/* <SmoothScrollProvider> */}
          <SocialSidebar />
          <WhatsAppButton />
          {children}
          {/* </SmoothScrollProvider> */}

        </ThemeProvider>
      </body>
    </html>
  );
}
