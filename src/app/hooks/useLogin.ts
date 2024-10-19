import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'
import { isAxiosError } from "axios";
import api from "../../app/service/api";
import Cookie from "js-cookie";
import { useUser } from "../context/UserContext";

export function useLogin() {
  const router = useRouter()
  const { setUser } = useUser();
  const { mutateAsync } = useMutation({
    mutationFn: async (body : any) => {
      const response = await api.post("/auth/login", body);
      Cookie.set("sessionToken", response.data?.access_token, { expires: 1 / 12  });
      setUser({
        id: response?.data.id,
        name: response?.data.name,
        email: response?.data.email,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Login realizado com sucesso!");
      router.push('/dashboard');
    },
    onError(error) {
      console.log("Caiu no onError do useLogin");
      toast.error(error.message);
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    },
  });

  return {
    login: mutateAsync,
  };
}