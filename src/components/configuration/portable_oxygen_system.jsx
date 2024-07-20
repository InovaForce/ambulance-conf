"use client";
import { useState } from 'react';

const PortableOxygenSystem = () => {
    const [selectedSystem, setSelectedSystem] = useState('Philips Respironics');
    const [price, setPrice] = useState(100);

    const handleSelect = (system) => {
        setSelectedSystem(system);
        switch (system) {
            case 'Philips Respironics':
                setPrice(100);
                break;
            case 'Invacare':
                setPrice(200);
                break;
            case 'CAIRE Inc.':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Portable Oxygen System Selector</h1>
            <div>
                <button onClick={() => handleSelect('Philips Respironics')}>Philips Respironics - $100</button>
                <button onClick={() => handleSelect('Invacare')}>Invacare - $200</button>
                <button onClick={() => handleSelect('CAIRE Inc.')}>CAIRE Inc. - $300</button>
            </div>
            <div>
                <h2>Selected System: {selectedSystem}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default PortableOxygenSystem;
