import { Row } from "react-bootstrap";
import ConfigurationPage from "./page";
import { getDictionary } from "@/services/dictionaries";

const LayoutConfiguration = async ({ params }) => {
  const { lang } = params;

  const dict = await getDictionary(lang);



  return (
    <>
      <Row className="flex-grow-1" style={{ height: "100vh" }}>
        <ConfigurationPage dict={dict} />
      </Row>
    </>
  );
};

export default LayoutConfiguration;
