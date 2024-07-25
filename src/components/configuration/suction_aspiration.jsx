"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button";

const SuctionAspiration = ({ setActive, generally, setGenerally }) => {
  const [selectedDevice, setSelectedDevice] = useState("");
  const [price, setPrice] = useState(100);
  const [vehicleData, setVehicleData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllInformation();
        setVehicleData(data);
      } catch (error) {
        console.error("Araç verilerini alırken hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setActive((prev) => prev + 1);
  };

  const handleBack = () => {
    setActive((prev) => prev - 1);
  };

  if (!vehicleData) {
    return <div>Yükleniyor...</div>;
  }

  const handleSelect = (device) => {
    let newPrice = 0;
    switch (device) {
      case "Laerdal":
        newPrice = parseFloat(
          vehicleData[10].suction_aspiration[0].price.replace("$", "")
        );
        break;
      case "SSCOR":
        newPrice = parseFloat(
          vehicleData[10].suction_aspiration[1].price.replace("$", "")
        );
        break;
      case "Medela":
        newPrice = parseFloat(
          vehicleData[10].suction_aspiration[2].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    let oldPrice = 0;
    if (
      generally.medical.suctionAspiration &&
      generally.medical.suctionAspiration !== device
    ) {
      switch (generally.medical.suctionAspiration) {
        case "Laerdal":
          oldPrice = parseFloat(
            vehicleData[10].suction_aspiration[0].price.replace("$", "")
          );
          break;
        case "SSCOR":
          oldPrice = parseFloat(
            vehicleData[10].suction_aspiration[1].price.replace("$", "")
          );
          break;
        case "Medela":
          oldPrice = parseFloat(
            vehicleData[10].suction_aspiration[2].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    setSelectedDevice(device);
    setPrice(newPrice);

    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medical: {
        ...prev.medical,
        suctionAspiration: device,
      },
    }));
  };

  return (
    <div>
      <h1>Suction Aspiration Selector</h1>
      <Image
        width={300}
        height={200}
        src={vehicleData[10].image_url}
        alt={vehicleData[10].image_url}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <div>
        <SelectButton
          key={vehicleData[10].suction_aspiration[0].name}
          value={vehicleData[10].suction_aspiration[0].price}
          handleSelect={handleSelect}
          option={vehicleData[10].suction_aspiration[0].name}
          price={vehicleData[10].suction_aspiration[0].price}
        />
        <SelectButton
          key={vehicleData[10].suction_aspiration[1].name}
          value={vehicleData[10].suction_aspiration[1].price}
          handleSelect={handleSelect}
          option={vehicleData[10].suction_aspiration[1].name}
          price={vehicleData[10].suction_aspiration[1].price}
        />
        <SelectButton
          key={vehicleData[10].suction_aspiration[2].name}
          value={vehicleData[10].suction_aspiration[2].price}
          handleSelect={handleSelect}
          option={vehicleData[10].suction_aspiration[2].name}
          price={vehicleData[10].suction_aspiration[2].price}
        />
      </div>
      <div>
        <h2>Selected Device: {selectedDevice}</h2>
        <h2>Price: {price}</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>                
            </div>  
    </div>
  );
};

export default SuctionAspiration;
