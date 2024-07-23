"use client";
import HomeComp from "@/components/home";
import Progress from "@/components/progress/progress";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
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

  return (
    <div>
      <HomeComp />
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
