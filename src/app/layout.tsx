import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import ReactQueryProvider from "./utils/providers/ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Psiboard",
  description: "Sistema de gestão para profissionais",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${poppins.className}`}>
        <ReactQueryProvider>
          <ToastContainer />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
