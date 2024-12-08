import { useMutation } from "@tanstack/react-query";
import api from "@/app/service/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";
import { useUser } from "../context/UserContext";

export function useUpdateUser() {
  const router = useRouter();
  const { setUser, user } = useUser();

  const handleSuccess = (data: any) => {
    toast.success("Usuário atualizado com sucesso!");
    setUser(data);
    window.location.reload();
  };
  const { mutateAsync } = useMutation({
    mutationFn: async (data: any) => {
      const response = await api.patch(`/users/${user?.id}`, data);
      return response.data;
    },
    onSuccess: (data) => handleSuccess(data),
    onError(error) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
        console.log(error);
      }
    },
  });

  return {
    updateUser: mutateAsync,
  };
}
