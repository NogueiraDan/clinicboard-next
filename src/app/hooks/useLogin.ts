import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import api from "../../app/service/api";
import Cookie from "js-cookie";
import { useUser } from "../context/UserContext";

interface LoginResponse {
  id: string;
  name: string;
  email: string;
  role: string;
  access_token: string;
}

interface LoginBody {
  email: string;
  password: string;
}

export function useLogin() {
  const router = useRouter();
  const { setUser } = useUser();

  const handleSuccess = (role: string) => {
    toast.success("Login realizado com sucesso!");
    role === "ADMIN"
      ? router.push("/admin/dashboard")
      : router.push("/dashboard");
  };

  const handleError = (error: any) => {
    toast.error(error.message);
    if (isAxiosError(error)) {
      toast.error(error.response?.data.message);
    }
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (body: LoginBody) => {
      const { data } = await api.post<LoginResponse>("/auth/login", body);
      Cookie.set("sessionToken", data.access_token, { expires: 1 / 12 });
      Cookie.set("userRole", data.role, { expires: 1 / 12 });
      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
      });
      return data;
    },
    onSuccess: (data) => handleSuccess(data.role),
    onError: handleError,
  });

  return {
    login: mutateAsync,
  };
}
