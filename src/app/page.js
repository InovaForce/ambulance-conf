"use client";
import { getAllInformation } from "@/services/api";
import { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "@/components/Home";


const HomePage = () => {
  
  const [data, setData] = useState([]);
  console.log(data);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllInformation();
        setData(data);
        console.log(data[0].image_url.ambulans_tipi_box);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  
  return (

    <>
    <Home/>
   </>


  );
};

   export default HomePage;
/*
    <>
      <div className="container">
        <Button
          ref={btn1}
           className={`${styles.helpButton} ${styles.helpButton1} btn-primary`}
          onClick={() => setModalShow(true)} 
        >
          Help
        </Button>
        { <HomeComp show={modalShow} onHide={() => setModalShow(false)} /> }
        <Button
          ref={btn2}
           className={`${styles.helpButton} ${styles.helpButton2} btn-primary`} 
          onClick={() => setModalShow(true)}
        >
          Help
        </Button>
      </div>

      <div
        style={{
          display: "flex",
          width: "80%",
          justifyContent:"center",         
          margin : "auto",
          marginBottom: "20px",
        }}
      >
        <Button className="start" onClick={handleStart}>
          Go to Configuration
        </Button>
      </div>
    </>
  );
  
};
*/

