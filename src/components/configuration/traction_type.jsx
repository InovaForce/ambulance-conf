import React, { useEffect, useState } from 'react';
import Label from '../label';
import styles from '@/styles/components/configuration/traction_type.module.scss';
import { getAllInformation } from '@/services/api';
import SelectButton from '../select-button';
import OptionButton from '../option-button';

const TractionTypeSelector = ({ setActive, generally, setGenerally, name, buttons }) => {
  const [selectedTractionType, setSelectedTractionType] = useState("");
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
    return <div>Loading...</div>;
  }

  const handleSelect = (vehicle) => {
    let newPrice = 0;
    switch (vehicle) {
      case "4X4":
        newPrice = parseFloat(
          vehicleData[1].traction_type[0].price.replace("$", "")
        );
        break;
      case "4X2":
        newPrice = parseFloat(
          vehicleData[1].traction_type[1].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    let oldPrice = 0;
    if (
      generally.pyschical.tractionType &&
      generally.pyschical.tractionType !== vehicle
    ) {
      switch (generally.pyschical.tractionType) {
        case "4X4":
          oldPrice = parseFloat(
            vehicleData[1].traction_type[0].price.replace("$", "")
          );
          break;
        case "4X2":
          oldPrice = parseFloat(
            vehicleData[1].traction_type[1].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    setSelectedTractionType(vehicle);
    setPrice(newPrice);
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      pyschical: {
        ...prev.pyschical,
        tractionType: vehicle,
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
      
       <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap:"50px",
          alignItems: "center",          
        }}
       > 
          {vehicleData[1].traction_type.map((type) => (
            <SelectButton
              key={type.name}
              value={type.price}
              handleSelect={handleSelect}
              option={type.name}
              price={type.price}
              disabled={generally.pyschical.tractionType === type.name}
            />
          ))}
        </div>
        <div className={styles.next_back}>
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

export default TractionTypeSelector;
