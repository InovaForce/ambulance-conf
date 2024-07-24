"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const SuctionAspiration = ({setActive}) => {
    const [selectedDevice, setSelectedDevice] = useState('Laerdal');
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

    const handleSelect = (device) => {
        setSelectedDevice(device);
        switch (device) {
            case 'Laerdal':
                setPrice(100);
                break;
            case 'SSCOR':
                setPrice(200);
                break;
            case 'Medela':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Suction Aspiration Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[10].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[10].name} 
                        value={vehicleData[10].price}
                        onClick={() => handleSelect('Laerdal')}>Laerdal - $100</button>
                <button key={vehicleData[10].name} 
                        value={vehicleData[10].price}
                        onClick={() => handleSelect('SSCOR')}>SSCOR - $200</button>
                <button key={vehicleData[10].name} 
                        value={vehicleData[10].price}
                        onClick={() => handleSelect('Medela')}>Medela - $300</button>
            </div>
            <div>
                <h2>Selected Device: {selectedDevice}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}>Next </button>
        </div>
    );
};

export default SuctionAspiration;
