"use client";
import { useEffect, useState } from 'react';
import Label from '../label';
import styles from '@/styles/components/configuration/traction_type.module.scss';
import { getAllInformation } from '@/services/api';
import SelectButton from '../select-button';

const TractionTypeSelector = ({setActive,generally,setGenerally}) => {
    const [selectedTractionType, setSelectedTractionType] = useState("");
    const [vehicleData, setVehicleData] = useState(null);
    const [price, setPrice] = useState(100);
    console.log("generally", generally);
    
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
      // Yeni seçilen stretcher'ın fiyatını al
      console.log("generally", generally);
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
      // `selectedStretcher`'ı güncelle
      setSelectedTractionType(vehicle);
      setPrice(newPrice);
      // `totalPrice` hesapla ve güncelle
      setGenerally((prev) => ({
        ...prev,
        totalPrice: prev.totalPrice - oldPrice + newPrice,
        pyschical: {
          ...prev.pyschical,
          tractionType: vehicle,
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
        <Label title="CHOOSE YOUR TRACTION TYPE"></Label>
{/*        <Image
          src="/images/traction_type.jpg"
          width={800}
          height={350}
          alt="traction_type"
        />*/}
        <div className={styles.traction_type}>
          <div>
            <SelectButton
              key={vehicleData[1].traction_type[0].name}
              value={vehicleData[1].traction_type[0].price}
              handleSelect={handleSelect}
              option={vehicleData[1].traction_type[0].name}
              price={vehicleData[1].traction_type[0].price}
            />
            <SelectButton
              key={vehicleData[1].traction_type[1].name}
              value={vehicleData[1].traction_type[1].price}
              handleSelect={handleSelect}
              option={vehicleData[1].traction_type[1].name}
              price={vehicleData[1].traction_type[1].price}
            />
          </div>
        </div>
        {selectedTractionType && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h5>Selected Traction Type: {selectedTractionType}</h5>
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
export default TractionTypeSelector;