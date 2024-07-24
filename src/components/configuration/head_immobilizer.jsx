"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const HeadImmobilizer = ({setActive}) => {
    const [selectedImmobilizer, setSelectedImmobilizer] = useState('Ferno');
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
    const handleSelect = (immobilizer) => {
        setSelectedImmobilizer(immobilizer);
        switch (immobilizer) {
            case 'Ferno':
                setPrice(100);
                break;
            case 'Laerdal':
                setPrice(200);
                break;
            case 'Ambu':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Head Immobilizer Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[16].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[16].name} 
                        value={vehicleData[16].price}
                        onClick={() => handleSelect('Ferno')}>Ferno - $100</button>
                <button key={vehicleData[16].name} 
                        value={vehicleData[16].price}
                        onClick={() => handleSelect('Laerdal')}>Laerdal - $200</button>
                <button key={vehicleData[16].name} 
                        value={vehicleData[16].price}
                        onClick={() => handleSelect('Ambu')}>Ambu - $300</button>
            </div>
            <div>
                <h2>Selected Immobilizer: {selectedImmobilizer}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}> Next </button>
        </div>
    );
};

export default HeadImmobilizer;
