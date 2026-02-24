import "./globals.css";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar"; // Importujeme novou komponentu

export const metadata = {
  title: "Night Wolf Studio",
  description: "Visual Identity & Design",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}