"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';
import NextBackButton from '../progress/next_back_button';

const BluetoothTransmissionSelector = ({ setActive, totalPrice, setTotalPrice }) => {
    const [selectedSystem, setSelectedSystem] = useState('Philips');
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

    if (!vehicleData) {
        return <div>Yükleniyor...</div>;
    }

    const handleSelect = (system) => {
        setSelectedSystem(system);
        switch (system) {
            case 'Philips':
                setPrice(100);
                break;
            case 'GE Healthcare':
                setPrice(200);
                break;
            case 'Welch Allyn':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }

    };
    
    
    return (
        <div>
            <h1>Bluetooth Transmission System Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[12].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[12].bluetooth_transmission[0].name}
                        value={vehicleData[12].bluetooth_transmission[0].price}
                        onClick={() => handleSelect('Philips')}>{vehicleData[12].bluetooth_transmission[0].name} - {vehicleData[12].bluetooth_transmission[0].price}</button>
                <button key={vehicleData[12].bluetooth_transmission[1].name}
                        value={vehicleData[12].bluetooth_transmission[1].price}
                        onClick={() => handleSelect('GE Healthcare')}>{vehicleData[12].bluetooth_transmission[1].name} - {vehicleData[12].bluetooth_transmission[1].price}</button>
                <button key={vehicleData[12].bluetooth_transmission[2].name}
                        value={vehicleData[12].bluetooth_transmission[2].price}
                        onClick={() => handleSelect('Welch Allyn')}>{vehicleData[12].bluetooth_transmission[2].name}- {vehicleData[12].bluetooth_transmission[2].price}</button>
            </div>
            <div>
                <h2>Selected System: {selectedSystem}</h2>
                <h2>Price: ${price}</h2>
            </div>
            
            <NextBackButton setActive={setActive} price={price} setTotalPrice={setTotalPrice} />
            
        </div>
        
    );
};

export default BluetoothTransmissionSelector;
