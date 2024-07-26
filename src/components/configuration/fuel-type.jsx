"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Label from "../label";
import styles from "@/styles/components/configuration/fuel_type.module.scss";
import { getAllInformation } from "@/services/api";
import SelectButton from "../select-button";
const FuelTypeSelector = ({ setActive, generally, setGenerally }) => {
  const [selectedFuelType, setSelectedFuelType] = useState("");
  const [vehicleData, setVehicleData] = useState(null);
  const [price, setPrice] = useState(100);
  console.log("generally",generally)
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
  if (!vehicleData) {
    return <div>Yükleniyor...</div>;
  }
  const handleSelect = (fuel) => {
    // Yeni seçilen stretcher'ın fiyatını al
    console.log("generally", generally);
    let newPrice = 0;
    switch (fuel) {
      case "Gasoline":
        newPrice = parseFloat(
          vehicleData[0].fuel_type[0].price.replace("$", "")
        );
        break;
      case "Diesel":
        newPrice = parseFloat(
          vehicleData[0].fuel_type[1].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }
    let oldPrice = 0;
    if (generally.pyschical.fuelType && generally.pyschical.fuelType !== fuel) {
      switch (generally.pyschical.fuelType) {
        case "Gasoline":
          oldPrice = parseFloat(
            vehicleData[0].fuel_type[0].price.replace("$", "")
          );
          break;
        case "Diesel":
          oldPrice = parseFloat(
            vehicleData[0].fuel_type[1].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }
    // `selectedStretcher`'ı güncelle
    setSelectedFuelType(fuel);
    setPrice(newPrice);
    // `totalPrice` hesapla ve güncelle
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      pyschical: {
        ...prev.pyschical,
        fuelType: fuel,
      },
    }));
    console.log("generally", generally);
  };
  const handleNext = () => {
    setActive((prev) => prev + 1);
  };
  const handleBack = () => {
    setActive((prev) => prev - 1);
  };
  return (
    <div>
      <Label title="CHOOSE YOUR FUEL TYPE"></Label>
      <Image
        src="/images/fuel_type.jpg"
        width={800}
        height={350}
        alt="fuel_type"
      />
      <div className={styles.fuel_type}>
        <div>
          {vehicleData[0].fuel_type.map((type) => (
            <SelectButton
              key={type.name}
              value={type.price}
              handleSelect={handleSelect}
              option={type.name}
              price={type.price}
              disabled={selectedFuelType === type.name}
            />
          ))}
        </div>
      </div>
      {selectedFuelType && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h5>Selected Fuel Type: {selectedFuelType}</h5>
        </div>
      )}
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
export default FuelTypeSelector;
