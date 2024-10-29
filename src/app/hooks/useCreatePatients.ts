import { useMutation } from "@tanstack/react-query";
import api from "@/app/service/api";
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import { isAxiosError } from "axios";

export function useCreatePatient() {
  const router = useRouter()
  const { mutateAsync } = useMutation({
    mutationFn: async (body : any): Promise<any> => {
      const response = await api.post(`/patients`, body);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Paciente cadastrado com sucesso!");
      router.push('/dashboard');
    },
    onError(error) {
      console.log("Caiu no onError do useCreatePatient", error);
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
        console.log(error);
      }
    },
  });

  return {
    createPatient: mutateAsync,
  };
}
