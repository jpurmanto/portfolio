"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export function NavbarWrapper({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const pathName = usePathname();

  return (
    <>
      {pathName !== "/admin" ? <Navbar /> : null}
      {children}
    </>
  );
}
