"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const Glucometer = ({setActive}) => {
    const [selectedGlucometer, setSelectedGlucometer] = useState('Accu-Chek');
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
    const handleSelect = (glucometer) => {
        setSelectedGlucometer(glucometer);
        switch (glucometer) {
            case 'Accu-Chek':
                setPrice(100);
                break;
            case 'OneTouch':
                setPrice(200);
                break;
            case 'Contour':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Glucometer Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[18].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[18].glucometer[0].name} 
                        value={vehicleData[18].glucometer[0].price}
                        onClick={() => handleSelect('Accu-Chek')}>{vehicleData[18].glucometer[0].name} - {vehicleData[18].glucometer[0].price}</button>
                <button key={vehicleData[18].glucometer[1].name} 
                        value={vehicleData[18].glucometer[1].price}
                        onClick={() => handleSelect('OneTouch')}>{vehicleData[18].glucometer[1].name} - {vehicleData[18].glucometer[1].price}</button>
                <button key={vehicleData[18].glucometer[2].name}
                        value={vehicleData[18].glucometer[2].price}
                        onClick={() => handleSelect('Contour')}>{vehicleData[18].glucometer[2].name} - {vehicleData[18].glucometer[2].price}</button>
            </div>
            <div>
                <h2>Selected Glucometer: {selectedGlucometer}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}> Next </button>
        </div>
    );
};

export default Glucometer;
