import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://emnaguizani.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Emna Guizani — Cloud Computing Student & Aspiring Cloud Engineer",
    template: "%s | Emna Guizani",
  },
  description:
    "Portfolio of Emna Guizani — a cloud computing student at Esprit School of Engineering passionate about designing reliable, automated, high-performance cloud infrastructures with OpenStack, Kubernetes, and Ansible.",
  keywords: [
    "cloud computing",
    "DevOps",
    "OpenStack",
    "Kubernetes",
    "Ansible",
    "software engineering",
    "portfolio",
    "Emna Guizani",
  ],
  authors: [{ name: "Emna Guizani", url: siteUrl }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Emna Guizani — Cloud Computing Student & Aspiring Cloud Engineer",
    description:
      "Portfolio of Emna Guizani — cloud computing, DevOps, OpenStack, Kubernetes.",
    siteName: "Emna Guizani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emna Guizani — Cloud Computing Student & Aspiring Cloud Engineer",
    description:
      "Portfolio of Emna Guizani — cloud computing, DevOps, OpenStack, Kubernetes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSerifDisplay.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Providers>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
