"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button"; // Eğer bu bileşen varsa, yeniden kullanmak için import ettik

const HeadImmobilizer = ({ setActive, generally, setGenerally }) => {
  const [selectedImmobilizer, setSelectedImmobilizer] = useState("");
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

  const handleSelect = (immobilizer) => {
    // Seçilen immobilizer'ın fiyatını güncelle
    let newPrice = 0;
    switch (immobilizer) {
      case "Ferno":
        newPrice = parseFloat(
          vehicleData[16].head_immobilizer[0].price.replace("$", "")
        );
        break;
      case "Laerdal":
        newPrice = parseFloat(
          vehicleData[16].head_immobilizer[1].price.replace("$", "")
        );
        break;
      case "Ambu":
        newPrice = parseFloat(
          vehicleData[16].head_immobilizer[2].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    // Eğer daha önce seçilmiş bir immobilizer varsa, eski immobilizer'ın fiyatını çıkart
    let oldPrice = 0;
    if (
      generally.medical.headImmobilizer &&
      generally.medical.headImmobilizer !== immobilizer
    ) {
      switch (generally.medical.headImmobilizer) {
        case "Ferno":
          oldPrice = parseFloat(
            vehicleData[16].head_immobilizer[0].price.replace("$", "")
          );
          break;
        case "Laerdal":
          oldPrice = parseFloat(
            vehicleData[16].head_immobilizer[1].price.replace("$", "")
          );
          break;
        case "Ambu":
          oldPrice = parseFloat(
            vehicleData[16].head_immobilizer[2].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    // `selectedImmobilizer`'ı güncelle ve fiyatı ayarla
    setSelectedImmobilizer(immobilizer);
    setPrice(newPrice);

    // `totalPrice` ve `headImmobilizer`'ı güncelle
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medical: {
        ...prev.medical,
        headImmobilizer: immobilizer,
      },
    }));
  };

  return (
    <div>
      <h1>Head Immobilizer Selector</h1>
      <Image
        width={300}
        height={200}
        src={vehicleData[16].image_url}
        alt={vehicleData[16].head_immobilizer[0].name}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <div>
        <SelectButton
          key={vehicleData[16].head_immobilizer[0].name}
          value={vehicleData[16].head_immobilizer[0].price}
          handleSelect={handleSelect}
          option={vehicleData[16].head_immobilizer[0].name}
          price={vehicleData[16].head_immobilizer[0].price}
        />
        <SelectButton
          key={vehicleData[16].head_immobilizer[1].name}
          value={vehicleData[16].head_immobilizer[1].price}
          handleSelect={handleSelect}
          option={vehicleData[16].head_immobilizer[1].name}
          price={vehicleData[16].head_immobilizer[1].price}
        />
        <SelectButton
          key={vehicleData[16].head_immobilizer[2].name}
          value={vehicleData[16].head_immobilizer[2].price}
          handleSelect={handleSelect}
          option={vehicleData[16].head_immobilizer[2].name}
          price={vehicleData[16].head_immobilizer[2].price}
        />
      </div>
      <div>
        <h2>Selected Immobilizer: {selectedImmobilizer}</h2>
        <h2>Price: {price}</h2>
      </div>
      <button className="back" onClick={handleBack}>Back</button>
      <button className="next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default HeadImmobilizer;
