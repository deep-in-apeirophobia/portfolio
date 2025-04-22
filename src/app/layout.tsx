import type { Metadata } from "next";
import { Atma, Marck_Script, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Menu from "@/components/Menu";
import { PostHogProvider } from "@/components/PostHogProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const atma = Atma({
  variable: "--font-atma",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

const marckScript = Marck_Script({
  variable: "--font-marck-script",
  weight: '400',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Atrin's Portfolio",
  description: "A show case of my work as an export Full-stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marckScript.variable} ${spaceGrotesk.variable} ${atma.variable} antialiased custom-scroll  w-full`}
      >
        <PostHogProvider>
          <Menu />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
