"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button";

const BluetoothTransmissionSelector = ({
  setActive,
  generally,
  setGenerally,
}) => {
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
    // Yeni seçilen sistemin fiyatını al
    let newPrice = 0;
    switch (system) {
      case "Philips":
        newPrice = parseFloat(
          vehicleData[12].bluetooth_transmission[0].price.replace("$", "")
        );
        break;
      case "GE Healthcare":
        newPrice = parseFloat(
          vehicleData[12].bluetooth_transmission[1].price.replace("$", "")
        );
        break;
      case "Welch Allyn":
        newPrice = parseFloat(
          vehicleData[12].bluetooth_transmission[2].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    // Eğer bir sistem daha önce seçilmişse, eski sistemin fiyatını çıkart
    let oldPrice = 0;
    if (selectedSystem !== "None") {
      switch (selectedSystem) {
        case "Philips":
          oldPrice = parseFloat(
            vehicleData[12].bluetooth_transmission[0].price.replace("$", "")
          );
          break;
        case "GE Healthcare":
          oldPrice = parseFloat(
            vehicleData[12].bluetooth_transmission[1].price.replace("$", "")
          );
          break;
        case "Welch Allyn":
          oldPrice = parseFloat(
            vehicleData[12].bluetooth_transmission[2].price.replace("$", "")
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
      medicalEquipment: {
        ...prev.medicalEquipment,
        bluetoothTransmission: system,
      },
    }));
  };

  return (
    <div>
      <h1>Bluetooth Transmission System Selector</h1>
      <Image
        width={300}
        height={200}
        src={vehicleData[12].image_url}
        alt={vehicleData[12].bluetooth_transmission[0].name}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <div>
        <SelectButton
          key={vehicleData[12].bluetooth_transmission[0].name}
          value={vehicleData[12].bluetooth_transmission[0].price}
          handleSelect={handleSelect}
          option={vehicleData[12].bluetooth_transmission[0].name}
          price={vehicleData[12].bluetooth_transmission[0].price}
        />
        <SelectButton
          key={vehicleData[12].bluetooth_transmission[1].name}
          value={vehicleData[12].bluetooth_transmission[1].price}
          handleSelect={handleSelect}
          option={vehicleData[12].bluetooth_transmission[1].name}
          price={vehicleData[12].bluetooth_transmission[1].price}
        />
        <SelectButton
          key={vehicleData[12].bluetooth_transmission[2].name}
          value={vehicleData[12].bluetooth_transmission[2].price}
          handleSelect={handleSelect}
          option={vehicleData[12].bluetooth_transmission[2].name}
          price={vehicleData[12].bluetooth_transmission[2].price}
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

export default BluetoothTransmissionSelector;
