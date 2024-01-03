"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Providers from "@/providers";

export function AppWrapper({
  children,
}: {
  children: React.ReactElement;
}): JSX.Element {
  const pathName = usePathname();

  return (
    <>
      {pathName !== "/admin" ? <Navbar /> : null}
      <Providers>{children}</Providers>
    </>
  );
}
