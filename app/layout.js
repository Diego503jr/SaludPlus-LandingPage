import { Libre_Franklin, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Libre_Franklin({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata = {
  title: "SaludPlus — ISSS",
  description:
    "Agenda tus citas de especialidad del ISSS desde tu teléfono. Sin filas, sin esperas.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
