import { Row } from "react-bootstrap";
import ConfigurationPage from "./page";
import { getDictionary } from "@/services/dictionaries";
import Header from "@/components/header";

const LayoutConfiguration = async ({ params }) => {
  const { lang } = params;

  const dict = await getDictionary(lang);



  return (
    <>
    <Header/>
      <Row style={{ Height: "100%" }}  >
        <ConfigurationPage dict={dict} />
      </Row>
    </>
  );
};

export default LayoutConfiguration;
