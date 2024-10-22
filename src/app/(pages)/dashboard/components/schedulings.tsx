"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { SchedulingSkeleton } from "./skeletons/schedulings-skeleton";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/app/context/UserContext";
import api from "@/app/service/api";
import { fetchHeaders } from "@/app/utils/fetch-headers";
import { formatDate } from "@/app/utils/format-date";

export default function Schedulings() {
  const { user } = useUser();
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const { data, isFetching, refetch } = useQuery({
    queryKey: ["schedules", date, user?.id],
    queryFn: async () => {
      const response = await api.get(
        `/scheduling/user/${user?.id}/date?date=${formatDate(date)}`,
        { headers: fetchHeaders() }
      );
      return response.data;
    },
    enabled: !!date,
  });

  function handleChangeCalendarDay(date: Date) {
    setDate(date);
    refetch;
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
              {data && (
                <React.Fragment>
                  {data?.map((schedule: any) => (
                    <p
                      key={schedule.id}
                      className="rounded border h-[116px] w-full mb-3"
                    >
                      Scheduling: {schedule.date}
                    </p>
                  ))}
                </React.Fragment>
              )}

              {data?.length <= 0 && !isFetching && (
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
