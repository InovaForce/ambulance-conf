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
        height={310}
        alt="fuel_type"
      />
      <div className={styles.fuel_type}>
        <div>
          <button
            className={styles.btn_fuel_type}
            onClick={() => handleSelectFuelType("Gasoline")}
            style={{
              marginTop: "10px",
              padding: "3px 25px",
              fontSize: "16px",
              fontWeight: "600",
              backgroundColor:
                selectedFuelType === "Gasoline" ? "#fbf79e" : "grey",
              color: "black",
              border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)",
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
              padding: "3px 25px",
              fontSize: "16px",
              fontWeight: "600",
              backgroundColor:
                selectedFuelType === "Diesel" ? "#fbf79e" : "grey",
              color: "black",
              border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            }}
          >
            DIESEL
          </button>
        </div>
      </div>
      {selectedFuelType && (
        <div style={{ marginTop: "10px", textAlign: "center" }}>
          <h6>Selected Fuel Type: {selectedFuelType}</h6>
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