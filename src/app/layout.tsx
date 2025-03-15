import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import { ToTopButton } from "@/components/ui";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"], // Chọn trọng số cần dùng
  variable: "--font-raleway", // Định nghĩa biến CSS
});

export const metadata: Metadata = {
  title: "vuvandinh",
  description: "vuvandinh.id.vn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${raleway.className}  !bg-[#f9fbfc] antialiased`}>
        <Header />
        <main className="min-h-screen pt-28 md:pt-36">{children}</main>
        <Footer />
        <ToTopButton></ToTopButton>
      </body>
    </html>
  );
}
