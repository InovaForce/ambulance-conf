import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Col,  Row } from "react-bootstrap";
import SideBar from "@/components/sideBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "infinitychassis | Ambulance Configuration Tool",
  description: "Generated by inovaForce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head >
      <link rel="prefetch" href="http://localhost:3000/_next/static/css/app/configuration/page.css?v=1721753072477" />
      <link rel="stylesheet" href="http://localhost:3000/_next/static/css/app/configuration/page.css?v=1721753072477" />
      </head>   
      <body className={`inter.className d-flex flex-column`}>
        <Header />
        <Row className="flex-grow-1" style={{ Height: "100vh" }}>
          <Col md={9}>{children}</Col>
          <Col md={3}>
            <SideBar />
          </Col>
        </Row>
        <Footer />
      </body>
    </html>
  );
}
