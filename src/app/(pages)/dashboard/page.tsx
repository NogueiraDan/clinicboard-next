import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecentSales } from "./components/recent-sales";
import Schedulings from "./components/schedulings";
import Statistics from "./components/statistics";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard do usuário",
};

export default function Page() {
  return (
    <main className="h-full">
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Inicio</TabsTrigger>
              <TabsTrigger value="analytics">Métricas</TabsTrigger>
              <TabsTrigger value="notifications">Notificações</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Statistics />
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
                <Schedulings />
                <div className="col-span-3">
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Sales</CardTitle>
                      <CardDescription>
                        You made 265 sales this month.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSales />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4"></TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
