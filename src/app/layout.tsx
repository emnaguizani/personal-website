import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable}`}
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
