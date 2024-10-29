"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { usePatients } from "@/app/hooks/usePatients";
import { Button } from "@/components/ui/button";

export default function Page() {
  const { patients, isFetching } = usePatients();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="py-5 px-4 md:px-8 mt-5">
      <h1 className="text-3xl font-bold text-gray-700 mb-10 text-start">
        Agende o horário
      </h1>

      <div className="flex flex-row justify-start">
        <div className="flex flex-col gap-10 sm:w-full md:w-[45%] lg:w-[35%]">
          <div>
            <label className="font-semibold">Paciente</label>
            <Select>
              <SelectTrigger className="w-full max-w-xs">
                <SelectValue placeholder="Selecione o paciente" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="font-semibold">Horário</label>
            <Select>
              <SelectTrigger className="w-full max-w-xs">
                <SelectValue placeholder="Selecione o horário" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={() => alert("Agendamento criado")} className="w-full max-w-xs bg-gray-800 text-white font-semibold">
            Criar agendamento
          </Button>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-semibold mb-4">Selecione a data do agendamento</p>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            onDayClick={() => alert("Data selecionada")}
            className="rounded-md border p-4 w-full items-center justify-center flex"
          />
        </div>
      </div>
    </div>
  );
}
