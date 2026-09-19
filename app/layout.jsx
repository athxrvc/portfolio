import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import PropTypes from "prop-types";

import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "Atharva Choudhary | Software Engineer",
  description:
    "Portfolio of Atharva Choudhary, a software engineer interested in backend systems, cloud infrastructure and data.",
  icons: {
    icon: "/favicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-5LG2LMW0WF"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5LG2LMW0WF');
          `}
        </Script>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
