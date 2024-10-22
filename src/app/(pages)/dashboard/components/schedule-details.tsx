import { usePatient } from "@/app/hooks/usePatient";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ScheduleDetailsProps } from "../types";

export default function ScheduleDetails({ patientId }: ScheduleDetailsProps) {
  const { patient, refetchPatient } = usePatient(patientId);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Mais detalhes</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Detalhes da consulta</AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-slate-700">Paciente: {patient.name}</p>
                <p className="text-base font-medium text-slate-700">Email: {patient.email}</p>
                <p className="text-base font-medium text-slate-700">Contato: {patient.phone}</p>
                <p className="text-base font-medium text-slate-700">Endereço: {patient.street}, {patient.district}, {patient.city}, {patient.state}</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          <AlertDialogAction>Fechar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
