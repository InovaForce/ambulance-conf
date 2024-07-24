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
            <div className={styles.vehicle_type} style={{ display: 'flex', justifyContent: 'center', gap: '20px' ,flexDirection:'row'}}>
                {vehicleData[3].vehicle_type.map((type,i) => (
                    <div style={selectedVehicleType===type ? {border:"4px solid rgb(62,59,133)"} : null}> <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h5>Seçilen Araç Tipi: {type}</h5>
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
                           backgroundColor: selectedVehicleType === type ? '#fbf79e' : 'lightgrey',
                           color:"rgb(27,25,23",
                           padding: '10px 20px',
                           border: '2px solid rgb(205,202,141)',
                           borderRadius: '5px',
                           display: 'flex',
                           margin: '10px auto',
                           boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                       }}
                   >
                       {type}

                   </button></div>
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