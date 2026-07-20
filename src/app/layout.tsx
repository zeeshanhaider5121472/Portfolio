import AnimatedCursorComponent from "@/components/AnimatedCursor";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import Next.js Script component
import "./globals.css";
import "./locomotive.css";

const inter = Inter({ subsets: ["latin"] });

// ✅ Dedicated viewport configuration
export const viewport: Viewport = {
  themeColor: "#000000",
};

// ✅ Cleaned up metadata object
export const metadata: Metadata = {
  title: "Zeeshan Haider😎",
  description:
    "I am a full stack developer. I love to build things that make a difference.",
  metadataBase: new URL("https://sudhanshur.vercel.app/"),
  keywords: [
    "Zeeshan Haider",
    "Zeeshan",
    "Haider",
    "Zeeshan Haider Portfolio",
    "Zeeshan Haider Website",
    "Zeeshan Haider Developer",
    "Zeeshan Haider Full Stack Developer",
    "Zeeshan Haider Full Stack Developer Portfolio",
    "Zeeshan Haider Full Stack Developer Website",
    "Zeeshan Haider Full Stack Developer Website Portfolio",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-in": "/en-IN",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Add Clarity Tracking Script */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "nkp1ne82u0");
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <AnimatedCursorComponent>{children}</AnimatedCursorComponent>
      </body>
    </html>
  );
}
