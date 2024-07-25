"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';
import SelectButton from '../select-button';
import Label from '../label';

const MainStretcher = ({ setActive, generally, setGenerally }) => {
    const [selectedStretcher, setSelectedStretcher] = useState('');
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
    }

    const handleBack = () => {
        setActive((prev) => prev - 1);
    }

    if (!vehicleData) {
        return <div>Yükleniyor...</div>;
    }

    const handleSelect = (stretcher) => {
        // Yeni seçilen stretcher'ın fiyatını al
        let newPrice = 0;
        switch (stretcher) {
            case 'Stryker':
                newPrice = parseFloat(vehicleData[5].main_stretcher[0].price.replace('$', ''));
                break;
            case 'Ferno':
                newPrice = parseFloat(vehicleData[5].main_stretcher[1].price.replace('$', ''));
                break;
            case 'Spencer':
                newPrice = parseFloat(vehicleData[5].main_stretcher[2].price.replace('$', ''));
                break;
            default:
                newPrice = 0;
        }

        // Eğer bir stretcher daha önce seçilmişse, eski stretcher'ın fiyatını çıkart
        let oldPrice = 0;
        if (selectedStretcher !== 'None') {
            switch (selectedStretcher) {
                case 'Stryker':
                    oldPrice = parseFloat(vehicleData[5].main_stretcher[0].price.replace('$', ''));
                    break;
                case 'Ferno':
                    oldPrice = parseFloat(vehicleData[5].main_stretcher[1].price.replace('$', ''));
                    break;
                case 'Spencer':
                    oldPrice = parseFloat(vehicleData[5].main_stretcher[2].price.replace('$', ''));
                    break;
                default:
                    oldPrice = 0;
            }
        }

        // `selectedStretcher`'ı güncelle
        setSelectedStretcher(stretcher);
        setPrice(newPrice);

        // `totalPrice` hesapla ve güncelle
        setGenerally((prev) => ({
            ...prev,
            totalPrice: prev.totalPrice - oldPrice + newPrice,
            medicalEquipment: {
                ...prev.medicalEquipment,
                mainStretcher: stretcher
            }
        }));
    };

    return (
      <div>
        <Label title="Main Stretcher" />
        <Image
          width={300}
          height={200}
          src={vehicleData[5].image_url}
          alt={vehicleData[5].main_stretcher[0].name}
          style={{ objectFit: "cover", borderRadius: "10px" }}
        />
        <div>
          <SelectButton
            key={vehicleData[5].main_stretcher[0].name}
            value={vehicleData[5].main_stretcher[0].price}
            handleSelect={handleSelect}
            option={vehicleData[5].main_stretcher[0].name}
            price={vehicleData[5].main_stretcher[0].price}
          />
          <SelectButton
            key={vehicleData[5].main_stretcher[1].name}
            value={vehicleData[5].main_stretcher[1].price}
            handleSelect={handleSelect}
            option={vehicleData[5].main_stretcher[1].name}
            price={vehicleData[5].main_stretcher[1].price}
          />
          <SelectButton
            key={vehicleData[5].main_stretcher[2].name}
            value={vehicleData[5].main_stretcher[2].price}
            handleSelect={handleSelect}
            option={vehicleData[5].main_stretcher[2].name}
            price={vehicleData[5].main_stretcher[2].price}
          />
        </div>
        <div>
          <h5>Selected Stretcher: {selectedStretcher}</h5>
          <h5>Price: ${price}</h5>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>                
            </div>  
      </div>
    );
};

export default MainStretcher;
