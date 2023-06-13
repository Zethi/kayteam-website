import "../styles/globals.css";
import { Footer } from "@/components/ui/Footer";
import { NavBar } from "@/components/ui/NavBar";

export const metadata = {
  title: "KayTeam",
  description: "At KayTeam, customer satisfaction is our priority, and we do everything to achieve it."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
