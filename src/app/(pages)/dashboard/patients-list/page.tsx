"use client";

import { usePatients } from "@/app/hooks/usePatients";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SkeletonTable from "../components/skeletons/table-skeleton";
import PageHeader from "@/components/page-header";
import { PatientResponse } from "../types";

export default function Page() {
  const { patients, isFetching } = usePatients();
  return (
    <main className="flex w-full flex-col">
      <PageHeader title="Pacientes" />
      {isFetching ? (
        <SkeletonTable />
      ) : (
        <Table className="cursor-pointer">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nome</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Endereço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((patient: PatientResponse) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>
                  {patient.street}, {patient.district}, {patient.city},
                  {patient.state}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </main>
  );
}
