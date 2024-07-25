"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button"; // SelectButton bileşenini import ediyoruz
import Label from "../label";

const PortablePatientMonitor = ({ setActive, generally, setGenerally }) => {
  const [selectedMonitor, setSelectedMonitor] = useState("");
  const [price, setPrice] = useState(0);
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

 const handleSelect = (monitor) => {
   // Yeni seçilen monitörün fiyatını al
   const newPrice = parseFloat(monitor.price.replace("$", ""));

   // Eğer bir monitör daha önce seçilmişse, eski monitörün fiyatını çıkar
   let oldPrice = 0;
   if (
     generally.medical.portablePatientMonitor &&
     generally.medical.portablePatientMonitor !== monitor.name
   ) {
     const oldMonitor = vehicleData[20].portable_patient_monitor.find(
       (m) => m.name === generally.medical.portablePatientMonitor
     );
     if (oldMonitor) {
       oldPrice = parseFloat(oldMonitor.price.replace("$", ""));
     }
   }

   // `selectedMonitor`'ı güncelle
   setSelectedMonitor(monitor.name);
   setPrice(newPrice);

   // `totalPrice` hesapla ve güncelle
   setGenerally((prev) => ({
     ...prev,
     totalPrice: prev.totalPrice - oldPrice + newPrice,
     medical: {
       ...prev.medical,
       portablePatientMonitor: monitor.name,
     },
   }));
 };

  return (
    <div>
      <Label title="Portable Patient Monitor" / >
      <Image
        width={300}
        height={250}
        src={vehicleData[20].image_url}
        alt="Portable Patient Monitor"
        style={{ objectFit: "cover",display: "block", margin: "0 auto" }}
      />
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" , justifyContent: "space-evenly"}}>
        {vehicleData[20].portable_patient_monitor.map((monitor, index) => (
          <SelectButton
            key={index}
            value={monitor.price}
            handleSelect={() => handleSelect(monitor)}
            option={monitor.name}
            price={monitor.price}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
            <button className="back" onClick={handleBack}> Back </button>
            <button className="next" onClick={handleNext}> Next </button>                
          </div>  
    </div>
  );
};

export default PortablePatientMonitor;
