import Providers from "@/providers";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import "remixicon/fonts/remixicon.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeremias Villane Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
