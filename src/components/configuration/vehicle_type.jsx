"use client";
import { useState } from 'react';

const VehicleTypeSelector = () => {
    const [selectedVehicleType, setSelectedVehicleType] = useState('');

    const handleSelectVehicleType = (type) => {
        setSelectedVehicleType(type);
    };

    return (
        <div>
            <h1>CHOOSE VEHICLE TYPE</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button onClick={() => handleSelectVehicleType('Van Type')} style={{ backgroundColor: selectedVehicleType === 'Van Type' ? 'blue' : 'grey', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Van Type
                </button>
                <button onClick={() => handleSelectVehicleType('Box Type')} style={{ backgroundColor: selectedVehicleType === 'Box Type' ? 'blue' : 'grey', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Box Type
                </button>
            </div>
            {selectedVehicleType && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h2>Selected Vehicle Type: {selectedVehicleType}</h2>
                </div>
            )}
        </div>
    );
};

export default VehicleTypeSelector;
