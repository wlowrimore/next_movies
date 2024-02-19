import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import HeaderNav from "./components/HeaderNav";
import { SearchProvider } from "@/searchContext";
import { getServerSession } from "next-auth";
import SessionProvider from './components/SessionProvider';

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "300", "500", "700"] });

export const metadata = {
  title: "Next Movies",
  description: "A Next.js app using the TMDb API and Tailwind CSS",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={`{montserrat.className} bg-neutral-950`}>
        <SessionProvider session={session}>
          <SearchProvider>
            <HeaderNav />
            {children}
          </SearchProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
