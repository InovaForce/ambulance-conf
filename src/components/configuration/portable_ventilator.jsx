"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button"; // SelectButton bileşenini import ediyoruz

const PortableVentilator = ({ setActive, generally, setGenerally }) => {
  const [selectedVentilator, setSelectedVentilator] = useState("");
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

  const handleSelect = (ventilator) => {
    // Yeni seçilen ventilatörün fiyatını al
    const newPrice = parseFloat(ventilator.price.replace("$", ""));

    // Eğer bir ventilatör daha önce seçilmişse, eski ventilatörün fiyatını çıkart
    let oldPrice = 0;
    if (selectedVentilator) {
      const oldVentilator = vehicleData[19].portable_ventilator.find(
        (v) => v.name === selectedVentilator
      );
      if (oldVentilator) {
        oldPrice = parseFloat(oldVentilator.price.replace("$", ""));
      }
    }

    // `selectedVentilator`'ı güncelle
    setSelectedVentilator(ventilator.name);
    setPrice(newPrice);

    // `totalPrice` hesapla ve güncelle
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medicalEquipment: {
        ...prev.medicalEquipment,
        portableVentilator: ventilator.name,
      },
    }));
  };

  return (
    <div>
      <h1>Portable Ventilator Selector</h1>
      <Image
        width={300}
        height={200}
        src={vehicleData[19].image_url}
        alt="Portable Ventilator"
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <div>
        {vehicleData[19].portable_ventilator.map((ventilator, index) => (
          <SelectButton
            key={index}
            value={ventilator.price}
            handleSelect={() => handleSelect(ventilator)}
            option={ventilator.name}
            price={ventilator.price}
          />
        ))}
      </div>
      <div>
        <h2>Selected Ventilator: {selectedVentilator}</h2>
        <h2>Price: {price}</h2>
      </div>
      <button className="back" onClick={handleBack}>Back</button>
      <button className="next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default PortableVentilator;
