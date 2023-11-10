import NavbarWrapper from "@/components/ui/NavbarWrapper";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jeremias Villane Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarWrapper>{children}</NavbarWrapper>
      </body>
    </html>
  );
}
