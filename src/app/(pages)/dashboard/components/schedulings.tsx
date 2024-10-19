"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { SchedulingSkeleton } from "./skeletons/schedulings-skeleton";

export default function Schedulings() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [loading, setLoading] = React.useState(true);

  // Simule um carregamento de dados
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Agendamentos do dia</CardTitle>
      </CardHeader>
      <CardContent className="pl-2 flex justify-between">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-[300px] flex items-center justify-center"
        />
        <div className="w-[60%] max-h-64 overflow-y-auto">
        {loading ? (
            <SchedulingSkeleton />
          ) : (
            <>
              <p className="rounded border h-[116px] w-full mb-3">Scheduling: {date?.toLocaleDateString()}</p>
              <p className="rounded border h-[116px] w-full mb-3">Scheduling: {date?.toLocaleDateString()}</p>
              <p className="rounded border h-[116px] w-full mb-3">Scheduling: {date?.toLocaleDateString()}</p>
              <p className="rounded border h-[116px] w-full mb-3">Scheduling: {date?.toLocaleDateString()}</p>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
