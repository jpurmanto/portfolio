"use client";

import { usePathname } from "next/navigation";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <>
      {/* {pathName !== "/admin" ? <Navbar /> : null} */}
      {children}
    </>
  );
}
