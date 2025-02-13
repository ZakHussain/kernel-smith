import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "KernelSmith",
  description: "KernelSmith is an AI-powered development toolkit that simplifies hardware-targeted ML code generation, enabling developers to optimize models across various architectures without deep hardware expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-F0HR946J78"/>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
