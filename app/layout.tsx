import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ONCODING",
  description: "Nós codamos seus sonhos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
