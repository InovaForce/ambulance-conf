"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const BluetoothTransmissionSelector = ({setActive}) => {
    const [selectedSystem, setSelectedSystem] = useState('Philips');
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

    const handleSelect = (system) => {
        setSelectedSystem(system);
        switch (system) {
            case 'Philips':
                setPrice(100);
                break;
            case 'GE Healthcare':
                setPrice(200);
                break;
            case 'Welch Allyn':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }

    };

    return (
        <div>
            <h1>Bluetooth Transmission System Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[12].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[12].name} 
                        value={vehicleData[12].price}
                        onClick={() => handleSelect('Philips')}>Philips - $100</button>
                <button key={vehicleData[12].name} 
                        value={vehicleData[12].price}
                        onClick={() => handleSelect('GE Healthcare')}>GE Healthcare - $200</button>
                <button key={vehicleData[12].name} 
                        value={vehicleData[12].price}
                        onClick={() => handleSelect('Welch Allyn')}>Welch Allyn - $300</button>
            </div>
            <div>
                <h2>Selected System: {selectedSystem}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}>Next </button>
        </div>
    );
};

export default BluetoothTransmissionSelector;
