import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moath Zayadneh — Software Engineer",
  description:
    "Portfolio of Moath Zayadneh, a software engineer building distributed Node.js services, high-performance C++ network systems, and React interfaces.",
  openGraph: {
    title: "Moath Zayadneh — Software Engineer",
    description: "Distributed backend services, C++ network systems, and thoughtful web products.",
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
