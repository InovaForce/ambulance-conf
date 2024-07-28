import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "infinitychassis | Ambulance Configuration Tool",
  description: "Generated by inovaForce",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link
          rel="prefetch"
          href="http://localhost:3000/_next/static/css/app/configuration/page.css?v=1721753072477"
        />
        <link
          rel="stylesheet"
          href="http://localhost:3000/_next/static/css/app/configuration/page.css?v=1721753072477"
        />
      </head>
      <body className={`inter.className d-flex flex-column`}>        
        {children}  
              
      </body>
    </html>
  );
}