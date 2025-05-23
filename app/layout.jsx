// layout.jsx
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-JetBrainsMono'
})

export const metadata = {
  title: "Tafiyatul Jannat",
  description: "Hi, I am Tafiyatul Jannat and this is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={JetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>  {children}</PageTransition>

      </body>
    </html>
  );
}
