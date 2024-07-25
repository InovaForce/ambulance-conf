"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button";
import Label from "../label";

const ManualSuctionUnit = ({ setActive, generally, setGenerally }) => {
  const [selectedUnit, setSelectedUnit] = useState("");
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

  const handleSelect = (unit) => {
    // Yeni seçilen unit'in fiyatını al
    let newPrice = 0;
    switch (unit) {
      case "Laerdal":
        newPrice = parseFloat(
          vehicleData[14].manuel_suction_unit[0].price.replace("$", "")
        );
        break;
      case "SSCOR":
        newPrice = parseFloat(
          vehicleData[14].manuel_suction_unit[1].price.replace("$", "")
        );
        break;
      case "DeVilbiss":
        newPrice = parseFloat(
          vehicleData[14].manuel_suction_unit[2].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    // Eğer bir unit daha önce seçilmişse, eski unit'in fiyatını çıkart
    let oldPrice = 0;
    if (
      generally.medical.manualSuctionUnit &&
      generally.medical.manualSuctionUnit !== unit
    ) {
      switch (generally.medical.manualSuctionUnit) {
        case "Laerdal":
          oldPrice = parseFloat(
            vehicleData[14].manuel_suction_unit[0].price.replace("$", "")
          );
          break;
        case "SSCOR":
          oldPrice = parseFloat(
            vehicleData[14].manuel_suction_unit[1].price.replace("$", "")
          );
          break;
        case "DeVilbiss":
          oldPrice = parseFloat(
            vehicleData[14].manuel_suction_unit[2].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    // `selectedUnit`'i güncelle
    setSelectedUnit(unit);
    setPrice(newPrice);

    // `totalPrice` hesapla ve güncelle
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medical: {
        ...prev.medical,
        manualSuctionUnit: unit,
      },
    }));
  };

  return (
    <div>
      <Label title="Manual Suction Unit Selector" />
      <Image
        width={300}
        height={250}
        src={vehicleData[14].image_url}
        alt={vehicleData[14].manuel_suction_unit[0].name}
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
        {vehicleData[14].manuel_suction_unit.map((type) => (
          <SelectButton
            key={type.name}
            value={type.price}
            handleSelect={handleSelect}
            option={type.name}
            price={type.price}
            disabled={selectedUnit === type.name}
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

export default ManualSuctionUnit;
