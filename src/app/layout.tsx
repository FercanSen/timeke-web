import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Timeke",
  description: "Keep track of your time.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mukta.className}>
      <body className="flex flex-col h-screen bg-gray-100">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}