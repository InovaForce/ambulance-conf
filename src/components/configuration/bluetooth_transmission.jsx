"use client";
import { useState } from 'react';

const BluetoothTransmissionSelector = () => {
    const [selectedSystem, setSelectedSystem] = useState('Philips');
    const [price, setPrice] = useState(100);

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
            <div>
                <button onClick={() => handleSelect('Philips')}>Philips - $100</button>
                <button onClick={() => handleSelect('GE Healthcare')}>GE Healthcare - $200</button>
                <button onClick={() => handleSelect('Welch Allyn')}>Welch Allyn - $300</button>
            </div>
            <div>
                <h2>Selected System: {selectedSystem}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default BluetoothTransmissionSelector;
