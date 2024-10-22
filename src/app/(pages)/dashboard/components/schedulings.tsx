"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { SchedulingSkeleton } from "./skeletons/schedulings-skeleton";
import { useSchedules } from "@/app/hooks/useSchedules";
import { usePatient } from "@/app/hooks/usePatient";
import ScheduleDetails from "./schedule-details";
import { Schedule } from "../types";

export default function Schedulings() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { schedules, refetchSchedules, isFetching } = useSchedules(date);

  function handleChangeCalendarDay(date: Date) {
    setDate(date);
    refetchSchedules;
  }
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
          onDayClick={handleChangeCalendarDay}
          className="rounded-md border w-[300px] flex items-center justify-center"
        />
        <div className="w-[60%] max-h-64 overflow-y-auto">
          {isFetching ? (
            <SchedulingSkeleton />
          ) : (
            <>
              {schedules && (
                <React.Fragment>
                  {schedules?.map((schedule: Schedule) => (
                    <div
                      key={schedule.id}
                      className="rounded border h-auto w-full mb-3 p-3 flex flex-col gap-1"
                    >
                      <p className="text-lg font-medium">
                        Horário: {schedule.hour}
                      </p>
                      <p className="text-base font-medium">
                        Data: {schedule.date}
                      </p>
                      <ScheduleDetails patientId={schedule.patient_id} />
                    </div>
                  ))}
                </React.Fragment>
              )}

              {schedules?.length <= 0 && !isFetching && (
                <h3 className="text-primary text-3xl mt-4">
                  Você não tem agendamentos para este dia!
                </h3>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
