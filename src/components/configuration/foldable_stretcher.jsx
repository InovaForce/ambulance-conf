"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const FoldableStretcherSelector = ({setActive}) => {
    const [selectedStretcher, setSelectedStretcher] = useState('Stryker');
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
            case 'Stryker':
                setPrice(100);
                break;
            case 'Junkin':
                setPrice(200);
                break;
            case 'Ferno':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Foldable Stretcher Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[6].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                       
                <button key={vehicleData[6].name} 
                        value={vehicleData[6].price}
                        onClick={() => handleSelect('Stryker')}>Stryker - $100</button>
                <button key={vehicleData[6].name} 
                        value={vehicleData[6].price}
                        onClick={() => handleSelect('Junkin')}>Junkin - $200</button>
                <button key={vehicleData[6].name} 
                        value={vehicleData[6].price}
                        onClick={() => handleSelect('Ferno')}>Ferno - $300</button>
            </div>
            <div>
                <h2>Selected Stretcher: {selectedStretcher}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
           <button onClick={handleNext}>Next </button>

        </div>
    );
};

export default FoldableStretcherSelector;
