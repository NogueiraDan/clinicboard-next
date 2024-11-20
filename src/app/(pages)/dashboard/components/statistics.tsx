import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function Statistics() {
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-medium">
            Agendamentos no dia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold">X</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-medium">Horários livres</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xl font-bold">X</div>
        </CardContent>
      </Card>
    </>
  );
}
