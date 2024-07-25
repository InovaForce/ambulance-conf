"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button";

const ScoopStretcher = ({ setActive, generally, setGenerally }) => {
  const [selectedStretcher, setSelectedStretcher] = useState("");
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

  const handleSelect = (stretcher) => {
    // Yeni seçilen stretcher'ın fiyatını al
    let newPrice = 0;
    switch (stretcher) {
      case "Ferno":
        newPrice = parseFloat(
          vehicleData[21].scoop_stretcher[0].price.replace("$", "")
        );
        break;
      case "MeBer":
        newPrice = parseFloat(
          vehicleData[21].scoop_stretcher[1].price.replace("$", "")
        );
        break;
      case "Laerdal":
        newPrice = parseFloat(
          vehicleData[21].scoop_stretcher[2].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    // Eğer bir stretcher daha önce seçilmişse, eski stretcher'ın fiyatını çıkart
    let oldPrice = 0;
    if (
      generally.medical.scoopStretcher &&
      generally.medical.scoopStretcher !== stretcher
    ) {
      switch (generally.medical.scoopStretcher) {
        case "Ferno":
          oldPrice = parseFloat(
            vehicleData[21].scoop_stretcher[0].price.replace("$", "")
          );
          break;
        case "MeBer":
          oldPrice = parseFloat(
            vehicleData[21].scoop_stretcher[1].price.replace("$", "")
          );
          break;
        case "Laerdal":
          oldPrice = parseFloat(
            vehicleData[21].scoop_stretcher[2].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    // `selectedStretcher`'ı güncelle
    setSelectedStretcher(stretcher);
    setPrice(newPrice);

    // `totalPrice` hesapla ve güncelle
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medical: {
        ...prev.medical,
        scoopStretcher: stretcher,
      },
    }));
  };

  if (!vehicleData) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Scoop Stretcher Selector</h1>
      <Image
        width={300}
        height={200}
        src={vehicleData[21].image_url}
        alt={vehicleData[21].id}
        style={{ objectFit: "cover", borderRadius: "10px" }}
      />
      <div>
        {vehicleData[21].scoop_stretcher.map((stretcher, index) => (
          <SelectButton
            key={stretcher.name}
            value={stretcher.price}
            handleSelect={handleSelect}
            option={stretcher.name}
            price={stretcher.price}
          />
        ))}
      </div>
      <div>
        <h2>Selected Stretcher: {selectedStretcher}</h2>
        <h2>Price: {price}</h2>
      </div>
      <button className="back" onClick={handleBack}>Back</button>
      <button className="next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default ScoopStretcher;
