import type { Metadata } from "next";
import Script from "next/script";
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
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() || "yluak9k8fr";
  const hasValidClarityProjectId = Boolean(clarityProjectId && /^[a-z0-9]+$/i.test(clarityProjectId));

  return (
    <html lang="en">
      <body>
        {children}
        {hasValidClarityProjectId && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${clarityProjectId}");`}
          </Script>
        )}
      </body>
    </html>
  );
}
