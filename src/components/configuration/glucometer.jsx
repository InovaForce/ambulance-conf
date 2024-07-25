"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button"; // SelectButton bileşenini import ediyoruz

const Glucometer = ({ setActive, generally, setGenerally }) => {
  const [selectedGlucometer, setSelectedGlucometer] = useState("");
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

  const handleSelect = (glucometer) => {
    // Yeni seçilen glukometre fiyatını al
    const newPrice = parseFloat(glucometer.price.replace("$", ""));

    // Eğer bir glukometre daha önce seçilmişse, eski glukometrenin fiyatını çıkart
    let oldPrice = 0;
    if (selectedGlucometer) {
      const oldGlucometer = vehicleData[18].glucometer.find(
        (g) => g.name === selectedGlucometer
      );
      if (oldGlucometer) {
        oldPrice = parseFloat(oldGlucometer.price.replace("$", ""));
      }
    }

    // `selectedGlucometer`'ı güncelle
    setSelectedGlucometer(glucometer.name);
    setPrice(newPrice);

    // `totalPrice` hesapla ve güncelle
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medicalEquipment: {
        ...prev.medicalEquipment,
        glucometer: glucometer.name,
      },
    }));
  };

  return (
    <div>
      <h1>Glucometer Selector</h1>
      <Image
        width={300}
        height={200}
        src={vehicleData[18].image_url}
        alt="Glucometer"
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <div>
        {vehicleData[18].glucometer.map((glucometer, index) => (
          <SelectButton
            key={index}
            value={glucometer.price}
            handleSelect={() => handleSelect(glucometer)}
            option={glucometer.name}
            price={glucometer.price}
          />
        ))}
      </div>
      <div>
        <h2>Selected Glucometer: {selectedGlucometer}</h2>
        <h2>Price: ${price}</h2>
      </div>
      <button className="back" onClick={handleBack}>Back</button>
      <button className="next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Glucometer;
