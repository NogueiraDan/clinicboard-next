import { usePatient } from "@/app/hooks/usePatient";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScheduleDetailsProps } from "../types";
import { useDeleteSchedule } from "@/app/hooks/useDeleteSchedule";

export default function ScheduleDetails({
  patientId,
  scheduleId,
}: ScheduleDetailsProps) {
  const { patient } = usePatient(patientId);
  const { deleteSchedule } = useDeleteSchedule(scheduleId);

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
              <p className="text-base font-medium text-slate-700">
                Paciente: {patient.name}
              </p>
              <p className="text-base font-medium text-slate-700">
                Email: {patient.email}
              </p>
              <p className="text-base font-medium text-slate-700">
                Contato: {patient.phone}
              </p>
              <p className="text-base font-medium text-slate-700">
                Endereço: {patient.street}, {patient.district}, {patient.city},{" "}
                {patient.state}
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <Dialog>
            <DialogTrigger>
              <Button variant="destructive">Excluir</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Tem certeza disso?</DialogTitle>
                <DialogDescription>
                  Essa ação é irreversível e excluirá o agendamento do paciente
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="destructive" onClick={() => deleteSchedule()}>Sim, quero excluir</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <AlertDialogAction>Fechar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
