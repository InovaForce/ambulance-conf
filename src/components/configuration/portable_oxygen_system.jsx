"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const PortableOxygenSystem = ({setActive}) => {
    const [selectedSystem, setSelectedSystem] = useState('Philips Respironics');
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
            case 'Philips Respironics':
                setPrice(100);
                break;
            case 'Invacare':
                setPrice(200);
                break;
            case 'CAIRE Inc.':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Portable Oxygen System Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[9].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button  key={vehicleData[9].name} 
                        value={vehicleData[9].price}
                        onClick={() => handleSelect('Philips Respironics')}>Philips Respironics - $100</button>
                <button  key={vehicleData[9].name} 
                        value={vehicleData[9].price}
                        onClick={() => handleSelect('Invacare')}>Invacare - $200</button>
                <button  key={vehicleData[9].name} 
                        value={vehicleData[9].price}
                        onClick={() => handleSelect('CAIRE Inc.')}>CAIRE Inc. - $300</button>
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

export default PortableOxygenSystem;
