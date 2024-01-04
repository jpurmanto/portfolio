import { AuthProvider } from "./auth-provider";
import { ModalProvider } from "./modal-provider";

export default function Providers({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
}
