import { login } from "@/services";
import { ApiResponse, LoginFormData } from "@/types";

export async function handleLogin(
  loginFormData: LoginFormData,
  setAuthUser: React.Dispatch<React.SetStateAction<boolean>>
) {
  const res: ApiResponse = await login(loginFormData);

  if (res?.statusCode === 200) {
    setAuthUser(true);
    sessionStorage.setItem("authUser", JSON.stringify(true));
  }
}
