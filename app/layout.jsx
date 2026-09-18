import Script from "next/script";
import PropTypes from "prop-types";

import "./globals.css";

export const metadata = {
  title: "Atharva Choudhary | Software Engineer",
  description:
    "Portfolio of Atharva Choudhary, a software engineer focused on backend systems, data, and cybersecurity.",
  icons: {
    icon: "/favicon.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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