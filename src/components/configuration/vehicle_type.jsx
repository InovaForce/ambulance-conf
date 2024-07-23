"use client";
import { useState, useEffect } from 'react';

import { getAllInformation } from '@/services/api';
import Image from 'next/image';

const VehicleTypeSelector = ({ setActive }) => {
    const [selectedVehicleType, setSelectedVehicleType] = useState('');
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

    const handleSelectVehicleType = (type) => {
        setSelectedVehicleType(type);
       
    };

    const handleNext= () =>{
        setActive((prev) => prev + 1);
    }

    const handleBack= () =>{
        setActive((prev) => prev - 1);
    }
    if (!vehicleData) {
        return <div>Yükleniyor...</div>;
    }

    return (
        <div>
            <h1>ARAÇ TİPİNİ SEÇİN</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' ,flexDirection:'column'}}>
                {vehicleData[3].vehicle_type.map((type,i) => (
                    <div style={selectedVehicleType===type ? {border:"2px solid green"} : null}> <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h2>Seçilen Araç Tipi: {type}</h2>
                    <Image
                    width={300}
                    height={200} 
                        src={type === 'Box Type' ? vehicleData[3].image_url.box_type : vehicleData[3].image_url.van_type}
                        alt={type} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
                </div>
                   <button
                       key={type}
                       onClick={() => handleSelectVehicleType(type)}
                       style={{
                           backgroundColor: selectedVehicleType === type ? 'blue' : 'grey',
                           color: 'white',
                           padding: '10px 20px',
                           border: 'none',
                           borderRadius: '5px'
                       }}
                   >
                       {type}

                   </button></div>
                ))}
            </div>
            <button onClick={handleBack}> Back </button>
           <button onClick={handleNext}>Next </button>

       
        </div>
    );
};

export default VehicleTypeSelector;