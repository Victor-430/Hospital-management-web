import { Header } from "@/components/Layout/Header";
import { NotFound } from "@/components/NotFound";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
        
        <NotFound >

        {children}
        </NotFound>
      </body>
      </body>
    </html>
  );
}
