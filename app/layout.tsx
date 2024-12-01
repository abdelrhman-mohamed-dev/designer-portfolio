import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {

  title: "Mustafa Elhoseny",
  authors: {
    name: "Mustafa Elhoseny",
  },

  description:
    "Based in Egypt, I'm a Fullstack developer passionate about building modern web applications that users love.",
  openGraph: {
    title: "Mustafa Elhoseny",
    description:
      "Based in Egypt, I'm a Fullstack developer passionate about building modern web applications that users love.",
    siteName: "Mustafa Elhoseny",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "triks web coding",
    "Mustafa Elhoseny",
    "Mustafa Elhoseny web devolper",
    "web devolper",
    "UI/UX design",
    "AI coding",
    "مطور ويب",
    "عمل متجر الالكتروني",
    "عبدالرحمن محمد",
    "برمجه موفع الالكتروني",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
