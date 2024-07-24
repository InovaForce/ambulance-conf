"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const PortableSuctionUnitSelector = ({setActive}) => {
    const [selectedUnit, setSelectedUnit] = useState('Laerdal');
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

    const handleNext= () =>{
        setActive((prev) => prev + 1);
    }

    const handleBack= () =>{
        setActive((prev) => prev - 1);
    }
    if (!vehicleData) {
        return <div>Yükleniyor...</div>;
    }
    const handleSelect = (unit) => {
        setSelectedUnit(unit);
        switch (unit) {
            case 'Laerdal':
                setPrice(100);
                break;
            case 'SSCOR':
                setPrice(200);
                break;
            case 'DeVilbiss':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Portable Suction Unit Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[13].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[13].portable_suction_unit[0].name} 
                        value={vehicleData[13].portable_suction_unit[0].price}
                        onClick={() => handleSelect('Laerdal')}>{vehicleData[13].portable_suction_unit[0].name} - {vehicleData[13].portable_suction_unit[0].price}</button>
                <button key={vehicleData[13].portable_suction_unit[1].name} 
                        value={vehicleData[13].portable_suction_unit[1].price}
                        onClick={() => handleSelect('SSCOR')}>{vehicleData[13].portable_suction_unit[1].name} - {vehicleData[13].portable_suction_unit[1].price}</button>
                <button key={vehicleData[13].portable_suction_unit[2].name}
                        value={vehicleData[13].portable_suction_unit[2].price}
                        onClick={() => handleSelect('DeVilbiss')}>{vehicleData[13].portable_suction_unit[2].name} - {vehicleData[13].portable_suction_unit[2].price}</button>
            </div>
            <div>
                <h2>Selected Unit: {selectedUnit}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}>Next </button>
        </div>
    );
};

export default PortableSuctionUnitSelector;
