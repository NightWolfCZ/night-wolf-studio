import "./globals.css";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar"; // Importujeme novou komponentu

export const metadata = {
  title: 'Night Wolf Studio | Exkluzivní vizuální tvorba',
  description: 'Night Wolf Studio – dravý design, profesionální přístup a unikátní vizuální styl. Vítejte ve světě, kde tvoříme budoucnost.',
  keywords: ['Night Wolf Studio', 'grafický design', 'web development', 'Elen', 'vizuální identita'],
  authors: [{ name: 'Night Wolf Studio' }],
  openGraph: {
    title: 'Night Wolf Studio',
    description: 'Exkluzivní vizuální tvorba a design.',
    url: 'https://night-wolf-studio.vercel.app/',
    siteName: 'Night Wolf Studio',
    locale: 'cs_CZ',
    type: 'website',
  },
}

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