"use client";
import { useState } from 'react';

const FuelTypeSelector = () => {
    const [selectedFuelType, setSelectedFuelType] = useState('');

    const handleSelectFuelType = (type) => {
        setSelectedFuelType(type);
    };

    return (
        <div>
            <h1>CHOOSE YOUR FUEL TYPE</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button onClick={() => handleSelectFuelType('Gasoline')} style={{ padding: '10px', fontSize: '16px', backgroundColor: selectedFuelType === 'Gasoline' ? 'green' : 'grey', color: 'white', border: 'none', borderRadius: '5px' }}>
                    GASOLINE
                </button>
                <button onClick={() => handleSelectFuelType('Diesel')} style={{ padding: '10px', fontSize: '16px', backgroundColor: selectedFuelType === 'Diesel' ? 'blue' : 'grey', color: 'white', border: 'none', borderRadius: '5px' }}>
                    DIESEL
                </button>
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
