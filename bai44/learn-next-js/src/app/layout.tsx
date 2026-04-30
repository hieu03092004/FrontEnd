import type { Metadata } from "next";
import { Quicksand,Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";


const quicksand = Quicksand({
  subsets: ["latin"],       // hoặc weight: "variable" (nếu font hỗ trợ)
  variable: "--font-quicksand",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],       // Dancing Script không phải lúc nào cũng có đủ weight, chọn cái có sẵn
  variable: "--font-dancing",
  display: "swap",
});
export const metadata: Metadata = {
  title: "App 28 tech",
  description: "Mo ta 28 tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className={`${quicksand.variable} ${dancingScript.variable}`}>
      <body
        
      >
        <Header/>
          {children}
        {/* <footer>
            Footer
        </footer> */}
      </body>
    </html>
  );
}
