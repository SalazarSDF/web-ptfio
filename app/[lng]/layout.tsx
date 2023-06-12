import "./globals.css";
import { Metadata } from "next";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: {
    template: "%s | SalazarSDF",
    default: "SalazarSDF",
  },

  description: "SalazarSDF portfolio",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng}>
      <body>{children}</body>
    </html>
  );
}
