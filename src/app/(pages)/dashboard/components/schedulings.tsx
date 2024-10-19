import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Schedulings() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Agendamentos do dia</CardTitle>
      </CardHeader>
      <CardContent className="pl-2 flex justify-between">
        <Calendar
          mode="single"
          className="rounded-md border w-[300px] flex items-center justify-center"
        />
        <div className="w-[60%] max-h-64 overflow-y-auto">
          <p className="rounded border h-[116px] w-full mb-3">Schedulings</p>
          <p className="rounded border h-[116px] w-full mb-3">Schedulings</p>
          <p className="rounded border h-[116px] w-full mb-3">Schedulings</p>
          <p className="rounded border h-[116px] w-full mb-3">Schedulings</p>
        </div>
      </CardContent>
    </Card>
  );
}
