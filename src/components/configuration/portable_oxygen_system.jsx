"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button";
import Label from "../label";

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
    if (
      generally.medical.mainStretcher &&
      generally.medical.mainStretcher !== system
    ) {
      switch (generally.medical.mainStretcher) {
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
      medical: {
        ...prev.medical,
        portableOxygenSystem: system,
      },
    }));
  };

  return (
    <div>
      <Label title=" Portable Oxygen System Selector" />
      <Image
        width={300}
        height={250}
        src={vehicleData[9].image_url}
        alt={vehicleData[9].image_url}
        style={{ objectFit: "cover", display: "block", margin: "0 auto" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {vehicleData[9].portable_oxygen_system.map((type) => (
          <SelectButton
            key={type.name}
            value={type.price}
            handleSelect={handleSelect}
            option={type.name}
            price={type.price}
            disabled={selectedSystem === type.name}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <button className="back" onClick={handleBack}>
          {" "}
          Back{" "}
        </button>
        <button className="next" onClick={handleNext}>
          {" "}
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default PortableOxygenSystem;
