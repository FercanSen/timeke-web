import type { Metadata } from "next";
import "./globals.css";
import { Mukta } from "next/font/google";

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Timeke",
  description: "Keep track of your time.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={mukta.className}>
      <body className="flex h-screen bg-gray-100">
        <main className="flex-1 p-4 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
