import { AppWrapper } from "@/components/ui";
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
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
