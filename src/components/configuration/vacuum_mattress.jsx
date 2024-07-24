"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const VacuumMattress = ({setActive}) => {
    const [selectedMattress, setSelectedMattress] = useState('Hartwell');
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

    const handleSelect = (mattress) => {
        setSelectedMattress(mattress);
        switch (mattress) {
            case 'Hartwell':
                setPrice(100);
                break;
            case 'RedVac':
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
            <h1>Vacuum Mattress Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[17].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button  key={vehicleData[17].vacuum_mattress[0].name} 
                        value={vehicleData[17].vacuum_mattress[0].price}
                        onClick={() => handleSelect('Hartwell')}>{vehicleData[17].vacuum_mattress[0].name} - {vehicleData[17].vacuum_mattress[0].price}</button>
                <button key={vehicleData[17].vacuum_mattress[1].name} 
                        value={vehicleData[17].vacuum_mattress[1].price}
                        onClick={() => handleSelect('RedVac')}>{vehicleData[17].vacuum_mattress[1].name} - {vehicleData[17].vacuum_mattress[1].price}</button>
                <button key={vehicleData[17].vacuum_mattress[2].name}
                        value={vehicleData[17].vacuum_mattress[2].price}
                        onClick={() => handleSelect('Ferno')}>{vehicleData[17].vacuum_mattress[2].name} - {vehicleData[17].vacuum_mattress[2].price}</button>
            </div>
            <div>
                <h2>Selected Mattress: {selectedMattress}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}> Next </button>
        </div>
    );
};

export default VacuumMattress;
