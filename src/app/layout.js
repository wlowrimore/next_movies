import { Inter } from "next/font/google";
import "./globals.css";
import HeaderNav from "./components/HeaderNav";
import { SearchProvider } from "@/searchContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Movies",
  description: "A Next.js app using the TMDb API and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchProvider>
          <HeaderNav />
          {children}
        </SearchProvider>
      </body>
    </html>
  );
}
