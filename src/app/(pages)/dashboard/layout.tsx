import Header from "./components/header";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full w-full">
      <Header />
      {children}
    </main>
  );
}