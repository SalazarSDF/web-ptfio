import "./globals.css";
import { Metadata } from "next";
import { languages } from "../i18n/settings";
import Head from "next/head";

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
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0"
        ></meta>
      </Head>
      <body>{children}</body>
    </html>
  );
}
