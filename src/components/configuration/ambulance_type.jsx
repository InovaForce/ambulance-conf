"use client";
import { useEffect, useState } from "react";
import Label from "../label";
import styles from "@/styles/components/configuration/ambulance_type.module.scss";
import { getAllInformation } from "@/services/api";
import SelectButton from "../select-button";
import OptionButton from "../option-button";

const AmbulanceType = ({ setActive, generally, setGenerally,name, buttons }) => {
  const [selectedAmbulanceType, setSelectedAmbulanceType] = useState("");
  const [vehicleData, setVehicleData] = useState(null);
  const [price, setPrice] = useState(100);

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

  const handleSelect = (vehicle) => {
    let newPrice = 0;
    switch (vehicle) {
      case "Basic Life Support":
        newPrice = parseFloat(
          vehicleData[2].ambulance_type[0].price.replace("$", "")
        );
        break;
      case "Advanced Life Support":
        newPrice = parseFloat(
          vehicleData[2].ambulance_type[1].price.replace("$", "")
        );
        break;
      case "Intensive Care Ambulance":
        newPrice = parseFloat(
          vehicleData[2].ambulance_type[2].price.replace("$", "")
        );
        break;
      case "Pediatric Ambulance":
        newPrice = parseFloat(
          vehicleData[2].ambulance_type[3].price.replace("$", "")
        );
        break;
      case "Newborn Ambulance":
        newPrice = parseFloat(
          vehicleData[2].ambulance_type[4].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    let oldPrice = 0;
    if (
      generally.pyschical.ambulanceType &&
      generally.pyschical.ambulanceType !== vehicle
    ) {
      switch (generally.pyschical.ambulanceType) {
        case "Basic Life Support":
          oldPrice = parseFloat(
            vehicleData[2].ambulance_type[0].price.replace("$", "")
          );
          break;
        case "Advanced Life Support":
          oldPrice = parseFloat(
            vehicleData[2].ambulance_type[1].price.replace("$", "")
          );
          break;
        case "Intensive Care Ambulance":
          oldPrice = parseFloat(
            vehicleData[2].ambulance_type[2].price.replace("$", "")
          );
          break;
        case "Pediatric Ambulance":
          oldPrice = parseFloat(
            vehicleData[2].ambulance_type[3].price.replace("$", "")
          );
          break;
        case "Newborn Ambulance":
          oldPrice = parseFloat(
            vehicleData[2].ambulance_type[4].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    setSelectedAmbulanceType(vehicle);
    setPrice(newPrice);
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      pyschical: {
        ...prev.pyschical,
        ambulanceType: vehicle,
      },
    }));
  };

  const handleNext = () => {
    setActive((prev) => prev + 1);
  };

  const handleBack = () => {
    setActive((prev) => prev - 1);
  };

  return (
    <div>
      <Label title={name}></Label>
      <div className={styles.ambulance_type}>
        <div className={styles.ambulance_type}>
          {vehicleData[2].ambulance_type.map((type) => (
            <SelectButton
              key={type.name}
              value={type.price}
              handleSelect={handleSelect}
              option={type.name}
              price={type.price}
              disabled={generally.pyschical.ambulanceType === type.name}
            />
          ))}
        </div>
        <OptionButton
        handleNext={handleNext}
        handleBack={handleBack}
        back={buttons.back}
        next={buttons.next}
      />
      </div>
    </div>
  );
};

export default AmbulanceType;

/*<div className={styles.ambulance_type_button}>
                <button onClick={() => handleSelectAmbulanceType('Basic Life Support')} style={{ backgroundColor: selectedAmbulanceType === 'Basic Life Support' ? '#fbf79e' : 'grey', borderRadius: "5px",border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)"}}>
                    Basic Life Support
                </button>
                <button onClick={() => handleSelectAmbulanceType('Advanced Life Support')} style={{ backgroundColor: selectedAmbulanceType === 'Advanced Life Support' ? '#fbf79e' : 'grey',borderRadius: "5px", border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)" }}>
                    Advanced Life Support
                </button>
                <button onClick={() => handleSelectAmbulanceType('Intensive Care Unit')} style={{ backgroundColor: selectedAmbulanceType === 'Intensive Care Unit' ? '#fbf79e' : 'grey',borderRadius: "5px", border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)" }}>
                    Intensive Care Unit
                </button>
            </div>*/
