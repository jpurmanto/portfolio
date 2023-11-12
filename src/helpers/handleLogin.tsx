import { login } from "@/services";

export async function handleLogin(
  loginFormData: LoginFormData,
  setAuthUser: React.Dispatch<React.SetStateAction<boolean>>
) {
  const res = await login(loginFormData);

  if (res?.success) {
    setAuthUser(true);
    sessionStorage.setItem("authUser", JSON.stringify(true));
  }
}
