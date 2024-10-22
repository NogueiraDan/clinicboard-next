import { useQuery } from "@tanstack/react-query";
import api from "../service/api";
import { formatDate } from "../utils/format-date";
import { fetchHeaders } from "../utils/fetch-headers";

export function usePatient(patientId: string = "") {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["schedules", patientId],
    queryFn: async () => {
      const response = await api.get(
        `/patients/patient/${patientId}`,
        { headers: fetchHeaders() }
      );
      return response.data;
    },
    enabled: !!patientId,
  });

  return {
    patient: data ?? {},
    isFetching,
    refetchPatient: refetch,
  };
}
