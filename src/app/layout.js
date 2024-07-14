import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Col,  Row } from "react-bootstrap";
import SideBar from "@/components/configuration/sideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`inter.className d-flex flex-column`} >
      
        <Header />
        <Row className="h-100">
          <Col xs={9}>{children}</Col>
          <Col xs={3}>
            <SideBar />
          </Col>
        </Row>

        <Footer />
      </body>
    </html>
  );
}
