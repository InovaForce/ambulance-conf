"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const PortablePatientMonitor= ({setActive}) => {
    const [selectedStretcher, setSelectedStretcher] = useState('GE Healthcare');
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

    const handleSelect = (stretcher) => {
        setSelectedStretcher(stretcher);
        switch (stretcher) {
            case 'GE Healthcare':
                setPrice(100);
                break;
            case 'Philips':
                setPrice(200);
                break;
            case 'Mindray':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive(0);
    };

    return (
        <div>
            <h1>Portable Patient Monitor</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[20].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[20].name} 
                        value={vehicleData[20].price}
                        onClick={() => handleSelect('GE Healthcare')}>GE Healthcare - $100</button>
                <button key={vehicleData[20].name} 
                        value={vehicleData[20].price}
                        onClick={() => handleSelect('Philips')}>Philips - $200</button>
                <button key={vehicleData[20].name} 
                        value={vehicleData[20].price}onClick={() => handleSelect('Mindray')}>Mindray - $300</button>
            </div>
            <div>
                <h2>Selected Stretcher: {selectedStretcher}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}> Next </button>
        </div>
    );
};

export default PortablePatientMonitor;
