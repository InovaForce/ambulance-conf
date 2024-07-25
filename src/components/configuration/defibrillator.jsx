"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button";

const Defibrillator = ({ setActive, generally, setGenerally }) => {
  const [selectedDefibrillator, setSelectedDefibrillator] = useState("");
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

  const handleSelect = (defibrillator) => {
    let newPrice = 0;
    switch (defibrillator) {
      case "Zoll":
        newPrice = parseFloat(
          vehicleData[11].defibrillator[0].price.replace("$", "")
        );
        break;
      case "Philips":
        newPrice = parseFloat(
          vehicleData[11].defibrillator[1].price.replace("$", "")
        );
        break;
      case "Physio-Control":
        newPrice = parseFloat(
          vehicleData[11].defibrillator[2].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    let oldPrice = 0;
    if (selectedDefibrillator !== "None") {
      switch (selectedDefibrillator) {
        case "Zoll":
          oldPrice = parseFloat(
            vehicleData[11].defibrillator[0].price.replace("$", "")
          );
          break;
        case "Philips":
          oldPrice = parseFloat(
            vehicleData[11].defibrillator[1].price.replace("$", "")
          );
          break;
        case "Physio-Control":
          oldPrice = parseFloat(
            vehicleData[11].defibrillator[2].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    setSelectedDefibrillator(defibrillator);
    setPrice(newPrice);

    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medicalEquipment: {
        ...prev.medicalEquipment,
        defibrillator: defibrillator,
      },
    }));
  };

  return (
    <div>
      <h1>Defibrillator Selector</h1>
      <Image
        width={300}
        height={200}
        src={vehicleData[11].image_url}
        alt={vehicleData[11].image_url}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <div>
        <SelectButton
          key={vehicleData[11].defibrillator[0].name}
          value={vehicleData[11].defibrillator[0].price}
          handleSelect={handleSelect}
          option={vehicleData[11].defibrillator[0].name}
          price={vehicleData[11].defibrillator[0].price}
        />
        <SelectButton
          key={vehicleData[11].defibrillator[1].name}
          value={vehicleData[11].defibrillator[1].price}
          handleSelect={handleSelect}
          option={vehicleData[11].defibrillator[1].name}
          price={vehicleData[11].defibrillator[1].price}
        />
        <SelectButton
          key={vehicleData[11].defibrillator[2].name}
          value={vehicleData[11].defibrillator[2].price}
          handleSelect={handleSelect}
          option={vehicleData[11].defibrillator[2].name}
          price={vehicleData[11].defibrillator[2].price}
        />
      </div>
      <div>
        <h2>Selected Defibrillator: {selectedDefibrillator}</h2>
        <h2>Price: {price}</h2>
      </div>
      <button className="back" onClick={handleBack}>Back</button>
      <button className="next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Defibrillator;
