"use client";
import Image from 'next/image';
import { useState } from 'react';


const FuelTypeSelector = ({setActive}) => {
    const [selectedFuelType, setSelectedFuelType] = useState('');

    const handleSelectFuelType = (type) => {
        setSelectedFuelType(type);
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>CHOOSE YOUR FUEL TYPE</h1>
            <Image
              src="/images/fuel_type.jpg"
              width={800}
              height={500}
              alt="fuel_type"
            />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <div>
            <Image src="/images/fuel_type/gasoline.jpg"
             width={300}
            height={300}/>
                <button onClick={() => handleSelectFuelType('Gasoline')} style={{ padding: '10px', fontSize: '16px', backgroundColor: selectedFuelType === 'Gasoline' ? 'green' : 'grey', color: 'white', border: 'none', borderRadius: '5px' }}>
                    GASOLINE
                </button>
            </div>
            <div className="fuelTypeImg" >
            <Image  src="/images/fuel_type/diesel.jpg"
             width={300}
            height={300}
            />
                <button onClick={() => handleSelectFuelType('Diesel')} style={{ padding: '10px', fontSize: '16px', backgroundColor: selectedFuelType === 'Diesel' ? 'blue' : 'grey', color: 'white', border: 'none', borderRadius: '5px' }}>
                    DIESEL
                </button>
             </div>
            </div>
            {selectedFuelType && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h2>Selected Fuel Type: {selectedFuelType}</h2>
                </div>
            )}
        </div>
    );
};

export default FuelTypeSelector;
