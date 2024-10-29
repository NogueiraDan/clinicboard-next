"use client";

import { usePatients } from "@/app/hooks/usePatients";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SkeletonTable from "../components/skeletons/table-skeleton";

export default function Page() {
  const { patients, isFetching } = usePatients();
  return (
    <main className="px-10 my-10 flex w-full flex-col">
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
            {patients.map((patient: any) => (
              <TableRow key={patient.id}>
                <TableCell>{patient.name}</TableCell>
                <TableCell>{patient.phone}</TableCell>
                <TableCell>{patient.street}, {patient.district}, {patient.city}, {patient.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </main>
  );
}
