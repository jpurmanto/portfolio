"use client";

import { loginFields } from "@/constants";
import { FormFields } from "@/helpers";

export default function LoginCMS({
  formData,
  setFormData,
  handleLogin,
}: {
  formData: LoginFormData;
  setFormData: React.Dispatch<React.SetStateAction<string>>;
  handleLogin: () => {};
}) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormFields
          fields={loginFields}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={handleLogin}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Login
        </button>
      </div>
    </div>
  );
}
