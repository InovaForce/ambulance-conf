"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const FirstAidKit = ({setActive}) => {
    const [selectedKit, setSelectedKit] = useState('Johnson & Johnson');
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
    const handleSelect = (kit) => {
        setSelectedKit(kit);
        switch (kit) {
            case 'Johnson & Johnson':
                setPrice(100);
                break;
            case 'First Aid Only':
                setPrice(200);
                break;
            case 'Beiersdorf':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
 
    };

    return (
        <div>
            <h1>First Aid Kit Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[7].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[7].first_aid_kit[0].name}
                        value={vehicleData[7].first_aid_kit[0].price}
                        onClick={() => handleSelect('Johnson & Johnson')}>{vehicleData[7].first_aid_kit[0].name}-{vehicleData[7].first_aid_kit[0].price}</button>
                <button key={vehicleData[7].first_aid_kit[1].name} 
                        value={vehicleData[7].first_aid_kit[1].price}
                        onClick={() => handleSelect('First Aid Only')}>{vehicleData[7].first_aid_kit[1].name} -{vehicleData[7].first_aid_kit[1].price}</button>
                <button key={vehicleData[7].first_aid_kit[2].name} 
                        value={vehicleData[7].first_aid_kit[2].price}
                        onClick={() => handleSelect('Beiersdorf')}>{vehicleData[7].first_aid_kit[2].name} - {vehicleData[7].first_aid_kit[2].price}</button>
            </div>
            <div>
                <h2>Selected Kit: {selectedKit}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
           <button onClick={handleNext}> Next </button>

        </div>
    );
};

export default FirstAidKit;
