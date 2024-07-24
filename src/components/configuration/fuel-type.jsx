"use client";
import Image from "next/image";
import { useState } from "react";
import Label from "../label";

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
      <Label title=" CHOOSE YOUR FUEL TYPE"></Label>
      <Image
        src="/images/fuel_type.jpg"
        width={800}
        height={500}
        alt="fuel_type"
      />
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div>
          <button
            onClick={() => handleSelectFuelType("Gasoline")}
            style={{
              padding: "10px",
              fontSize: "16px",
              backgroundColor:
                selectedFuelType === "Gasoline" ? "green" : "grey",
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
            onClick={() => handleSelectFuelType("Diesel")}
            style={{
              padding: "10px",
              fontSize: "16px",
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
          <h2>Selected Fuel Type: {selectedFuelType}</h2>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button className="back" onClick={handleBack}> Back </button>
        <button className="next" onClick={handleNext}> Next </button>
      </div>
    </div>
  );
};

export default FuelTypeSelector;