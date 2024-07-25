"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button";

const OxygenSystem = ({ setActive, generally, setGenerally }) => {
  const [selectedSystem, setSelectedSystem] = useState("");
  const [price, setPrice] = useState(0);
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
    // Yeni seçilen sistemin fiyatını al
    let newPrice = 0;
    switch (system) {
      case "Intersurgical":
        newPrice = parseFloat(
          vehicleData[8].central_oxygen_system[0].price.replace("$", "")
        );
        break;
      case "Dräger":
        newPrice = parseFloat(
          vehicleData[8].central_oxygen_system[1].price.replace("$", "")
        );
        break;
      case "Air Liquide":
        newPrice = parseFloat(
          vehicleData[8].central_oxygen_system[2].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    // Eğer bir sistem daha önce seçilmişse, eski sistemin fiyatını çıkart
    let oldPrice = 0;
    if (
      generally.medical.oxygenSystem &&
      generally.medical.oxygenSystem !== system
    ) {
      switch (generally.medical.mainStretcher) {
        case "Intersurgical":
          oldPrice = parseFloat(
            vehicleData[8].central_oxygen_system[0].price.replace("$", "")
          );
          break;
        case "Dräger":
          oldPrice = parseFloat(
            vehicleData[8].central_oxygen_system[1].price.replace("$", "")
          );
          break;
        case "Air Liquide":
          oldPrice = parseFloat(
            vehicleData[8].central_oxygen_system[2].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    // `selectedSystem`'i güncelle
    setSelectedSystem(system);
    setPrice(newPrice);

    // `totalPrice` hesapla ve güncelle
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medical: {
        ...prev.medical,
        oxygenSystem: system,
      },
    }));
  };

  return (
    <div>
      <h1>Central Oxygen System Selector</h1>
      <Image
        width={300}
        height={200}
        src={vehicleData[8].image_url}
        alt={vehicleData[8].central_oxygen_system[0].name}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <div>
        <SelectButton
          key={vehicleData[8].central_oxygen_system[0].name}
          value={vehicleData[8].central_oxygen_system[0].price}
          handleSelect={handleSelect}
          option={vehicleData[8].central_oxygen_system[0].name}
          price={vehicleData[8].central_oxygen_system[0].price}
        />
        <SelectButton
          key={vehicleData[8].central_oxygen_system[1].name}
          value={vehicleData[8].central_oxygen_system[1].price}
          handleSelect={handleSelect}
          option={vehicleData[8].central_oxygen_system[1].name}
          price={vehicleData[8].central_oxygen_system[1].price}
        />
        <SelectButton
          key={vehicleData[8].central_oxygen_system[2].name}
          value={vehicleData[8].central_oxygen_system[2].price}
          handleSelect={handleSelect}
          option={vehicleData[8].central_oxygen_system[2].name}
          price={vehicleData[8].central_oxygen_system[2].price}
        />
      </div>
      <div>
        <h2>Selected System: {selectedSystem}</h2>
        <h2>Price: {price}</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>                
            </div>  
    </div>
  );
};

export default OxygenSystem;
