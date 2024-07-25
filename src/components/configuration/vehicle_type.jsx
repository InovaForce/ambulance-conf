"use client";
import { useState, useEffect } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';
import Label from '../label';
import styles from '@/styles/components/configuration/vehicle_type.module.scss';

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
            <Label title="CHOOSE YOUR VEHICLE TYPE" />

            <div style={{ display: 'flex', justifyContent: 'center', gap: '25px' }}>
                {vehicleData[3].vehicle_type.map((type, i) => (
                    <div 
                        key={type} 
                        style={{
                            border: selectedVehicleType === type ? "2px solid blue" : "none",
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    > 
                        
                        <Image
                            width={400}
                            height={300} 
                            src={type === 'Box Type' ? vehicleData[3].image_url.box_type : vehicleData[3].image_url.van_type}
                            alt={type} 
                            style={{ objectFit: 'cover', borderRadius: '10px' }} 
                        />
                        <button
                            onClick={() => handleSelectVehicleType(type)}
                            style={{
                                backgroundColor: selectedVehicleType === type ? 'blue' : 'grey',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                marginTop: '10px'
                            }}
                        >
                            {type}
                        </button>
                    </div>

                ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>                
            </div>  
        </div>
    );
    };
export default VehicleTypeSelector;