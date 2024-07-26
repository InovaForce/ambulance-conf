"use client";
import FirmContactForm from "@/components/contact/contactForm";
import HomeComp from "@/components/home";
import { getAllInformation } from "@/services/api";
import { useState, useEffect } from "react";

const Home = () => {
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
  require('dotenv').config();


  return (
    <div>
      <HomeComp />
      <FirmContactForm />
    </div>
  );
};

export default Home;

/*
{data.length > 0 && (
        <Image
          src={data[0].image_url.ambulans_tipi_box}
          alt="Ambulans Tipi Box"
          width={200}
          height={200}
        />
      )}
*/