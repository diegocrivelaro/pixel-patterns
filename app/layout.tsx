import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Background from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className="relative h-full w-full bg-black">
          <Background />
          <div className="flex min-h-screen flex-col p-32">
            <div className="flex flex-col gap-y-10 items-center text-center m-auto z-20 mb-16">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
