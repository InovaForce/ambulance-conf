"use client";
import Image from "next/image";
import { useState } from "react";
import Label from "../label";
import styles from "@/styles/components/configuration/fuel_type.module.scss";

const FuelTypeSelector = ({ setActive }) => {
  const [selectedFuelType, setSelectedFuelType] = useState("");

  const handleSelectFuelType = (type) => {
    setSelectedFuelType(type);
  };

  const handleNext = () => {
    setActive((prev) => prev + 1);
  };

  const handleBack = () => {
    setActive((prev) => prev - 1);
  };

  return (
    <div>
      <Label title=" CHOOSE YOUR FUEL TYPE"/>
      <Image
        src="/images/fuel_type.jpg"
        width={800}
        height={330}
        alt="fuel_type"
      />
      <div className={styles.fuel_type}>
        <div>
          <button
            className={styles.btn_fuel_type}
            onClick={() => handleSelectFuelType("Gasoline")}
            style={{
              marginTop: "10px",
              padding: "5px 25px",
              fontSize: "16px",
              fontWeight: "600",
              backgroundColor:
                selectedFuelType === "Gasoline" ? "blue" : "grey",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            GASOLINE
          </button>
        </div>
        <div className="fuelTypeImg">
          <button 
              className={styles.btn_fuel_type}
              onClick={() => handleSelectFuelType("Diesel")}
              style={{
              marginTop: "10px",
              padding: "5px 30px",
              fontSize: "18px",
              fontWeight: "600",
              backgroundColor:
                selectedFuelType === "Diesel" ? "blue" : "grey",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            DIESEL
          </button>
        </div>
      </div>
      {selectedFuelType && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h5>Selected Fuel Type: {selectedFuelType}</h5>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <button className="back" onClick={handleBack}> Back </button>
        <button className="next" onClick={handleNext}> Next </button>
      </div>
    </div>
  );
};

export default FuelTypeSelector;