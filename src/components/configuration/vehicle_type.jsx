"use client";
import { useState, useEffect } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';
import Label from '../label';
import styles from '@/styles/components/configuration/vehicle_type.module.scss';
import SelectButton from '../select-button';

const VehicleTypeSelector = ({ setActive,generally,setGenerally }) => {
    const [selectedVehicleType, setSelectedVehicleType] = useState("");
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
        case "Van Type":
          newPrice = parseFloat(
            vehicleData[3].vehicle_type[0].price.replace("$", "")
          );
          break;
        case "Box Type":
          newPrice = parseFloat(
            vehicleData[3].vehicle_type[1].price.replace("$", "")
          );
          break;
        default:
          newPrice = 0;
      }
      let oldPrice = 0;
      if (
        generally.pyschical.vehicleType &&
        generally.pyschical.vehicleType !== vehicle
      ) {
        switch (generally.pyschical.vehicleType) {
          case "Van Type":
            oldPrice = parseFloat(
              vehicleData[3].vehicle_type[0].price.replace("$", "")
            );
            break;
          case "Box Type":
            oldPrice = parseFloat(
              vehicleData[3].vehicle_type[1].price.replace("$", "")
            );
            break;
          default:
            oldPrice = 0;
        }
      }
      // `selectedStretcher`'ı güncelle
      setSelectedVehicleType(vehicle);
      setPrice(newPrice);
      // `totalPrice` hesapla ve güncelle
      setGenerally((prev) => ({
        ...prev,
        totalPrice: prev.totalPrice - oldPrice + newPrice,
        pyschical: {
          ...prev.pyschical,
          vehicleType: vehicle,
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
        <Label title="CHOOSE YOUR VEHICLE TYPE"></Label>
        <Image
          src="/images/vehicle_type.jpg"
          width={800}
          height={350}
          alt="fuel_type"
        />
        <div className={styles.vehicle_type}>
          <div>
            <SelectButton
              key={vehicleData[3].vehicle_type[0].name}
              value={vehicleData[3].vehicle_type[0].price}
              handleSelect={handleSelect}
              option={vehicleData[3].vehicle_type[0].name}
              price={vehicleData[3].vehicle_type[0].price}
            />
            <SelectButton
              key={vehicleData[3].vehicle_type[1].name}
              value={vehicleData[3].vehicle_type[1].price}
              handleSelect={handleSelect}
              option={vehicleData[3].vehicle_type[1].name}
              price={vehicleData[3].vehicle_type[1].price}
            />
          </div>
        </div>
        {selectedVehicleType && (
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <h5>Selected Fuel Type: {selectedVehicleType}</h5>
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
export default VehicleTypeSelector;