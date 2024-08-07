import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "My-Portfolio",
  description: "Personal portfolio projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="myPortfolio">
      <body className={inter.className}>
       <Navbar />
        {children}
        
        <Footer />
        </body>
    </html>
  );
}
