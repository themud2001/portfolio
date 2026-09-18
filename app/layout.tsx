import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moath Zayadneh — Software Engineer",
  description:
    "Portfolio of Moath Zayadneh, a software engineer building RESTful APIs and backend systems with Node.js, Django, and Spring Boot, alongside C++ networking and React.",
  openGraph: {
    title: "Moath Zayadneh — Software Engineer",
    description: "RESTful APIs, backend systems, C++ networking, and React interfaces.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
