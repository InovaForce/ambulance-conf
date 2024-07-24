"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const PortableVentilator = ({setActive}) => {
    const [selectedVentilator, setSelectedVentilator] = useState('Hamilton');
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
    const handleSelect = (ventilator) => {
        setSelectedVentilator(ventilator);
        switch (ventilator) {
            case 'Hamilton':
                setPrice(100);
                break;
            case 'Medtronic':
                setPrice(200);
                break;
            case 'Philips':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Portable Ventilator Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[19].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[19].name} 
                        value={vehicleData[19].price}
                        onClick={() => handleSelect('Hamilton')}>Hamilton - $100</button>
                <button key={vehicleData[19].name} 
                        value={vehicleData[19].price}
                        onClick={() => handleSelect('Medtronic')}>Medtronic - $200</button>
                <button key={vehicleData[19].name} 
                        value={vehicleData[19].price}
                        onClick={() => handleSelect('Philips')}>Philips - $300</button>
            </div>
            <div>
                <h2>Selected Ventilator: {selectedVentilator}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}> Next </button>
        </div>
    );
};

export default PortableVentilator;
