"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button";

const PortableOxygenSystem = ({ setActive, generally, setGenerally }) => {
  const [selectedSystem, setSelectedSystem] = useState("");
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

  const handleSelect = (system) => {
    let newPrice = 0;
    switch (system) {
      case "Philips Respironics":
        newPrice = parseFloat(
          vehicleData[9].portable_oxygen_system[0].price.replace("$", "")
        );
        break;
      case "Invacare":
        newPrice = parseFloat(
          vehicleData[9].portable_oxygen_system[1].price.replace("$", "")
        );
        break;
      case "CAIRE Inc.":
        newPrice = parseFloat(
          vehicleData[9].portable_oxygen_system[2].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    let oldPrice = 0;
    if (selectedSystem !== "None") {
      switch (selectedSystem) {
        case "Philips Respironics":
          oldPrice = parseFloat(
            vehicleData[9].portable_oxygen_system[0].price.replace("$", "")
          );
          break;
        case "Invacare":
          oldPrice = parseFloat(
            vehicleData[9].portable_oxygen_system[1].price.replace("$", "")
          );
          break;
        case "CAIRE Inc.":
          oldPrice = parseFloat(
            vehicleData[9].portable_oxygen_system[2].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    setSelectedSystem(system);
    setPrice(newPrice);

    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medicalEquipment: {
        ...prev.medicalEquipment,
        portableOxygenSystem: system,
      },
    }));
  };

  return (
    <div>
      <h1>Portable Oxygen System Selector</h1>
      <Image
        width={300}
        height={200}
        src={vehicleData[9].image_url}
        alt={vehicleData[9].image_url}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <div>
        <SelectButton
          key={vehicleData[9].portable_oxygen_system[0].name}
          value={vehicleData[9].portable_oxygen_system[0].price}
          handleSelect={handleSelect}
          option={vehicleData[9].portable_oxygen_system[0].name}
          price={vehicleData[9].portable_oxygen_system[0].price}
        />
        <SelectButton
          key={vehicleData[9].portable_oxygen_system[1].name}
          value={vehicleData[9].portable_oxygen_system[1].price}
          handleSelect={handleSelect}
          option={vehicleData[9].portable_oxygen_system[1].name}
          price={vehicleData[9].portable_oxygen_system[1].price}
        />
        <SelectButton
          key={vehicleData[9].portable_oxygen_system[2].name}
          value={vehicleData[9].portable_oxygen_system[2].price}
          handleSelect={handleSelect}
          option={vehicleData[9].portable_oxygen_system[2].name}
          price={vehicleData[9].portable_oxygen_system[2].price}
        />
      </div>
      <div>
        <h2>Selected System: {selectedSystem}</h2>
        <h2>Price: {price}</h2>
      </div>
      <button className="back" onClick={handleBack}>Back</button>
      <button className="next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default PortableOxygenSystem;
