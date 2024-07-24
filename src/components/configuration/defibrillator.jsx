"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const Defibrillator = ({setActive}) => {
    const [selectedDefibrillator, setSelectedDefibrillator] = useState('Zoll');
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

    const handleSelect = (defibrillator) => {
        setSelectedDefibrillator(defibrillator);
        switch (defibrillator) {
            case 'Zoll':
                setPrice(100);
                break;
            case 'Philips':
                setPrice(200);
                break;
            case 'Physio-Control':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Defibrillator Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[11].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[11].defibrillator[0].name} 
                        value={vehicleData[11].defibrillator[0].price}
                        onClick={() => handleSelect('Zoll')}>{vehicleData[11].defibrillator[0].name}  - {vehicleData[11].defibrillator[0].price}</button>
                <button key={vehicleData[11].defibrillator[1].name} 
                        value={vehicleData[11].defibrillator[1].price}
                        onClick={() => handleSelect('Philips')}>{vehicleData[11].defibrillator[1].name}  - {vehicleData[11].defibrillator[1].price}</button>
                <button key={vehicleData[11].defibrillator[2].name} 
                        value={vehicleData[11].defibrillator[2].price}
                        onClick={() => handleSelect('Physio-Control')}>{vehicleData[11].defibrillator[2].name}  - {vehicleData[11].defibrillator[2].price}</button>
            </div>
            <div>
                <h2>Selected Defibrillator: {selectedDefibrillator}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}>Next </button>
        </div>
    );
};

export default Defibrillator;
