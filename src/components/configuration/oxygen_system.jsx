"use client";
import { useState } from 'react';

const OxygenSystem = ({setActive}) => {
    const [selectedSystem, setSelectedSystem] = useState('Intersurgical');
    const [price, setPrice] = useState(100);

    const handleSelect = (system) => {
        setSelectedSystem(system);
        switch (system) {
            case 'Intersurgical':
                setPrice(100);
                break;
            case 'Dräger':
                setPrice(200);
                break;
            case 'Air Liquide':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Central Oxygen System Selector</h1>
            <div>
                <button onClick={() => handleSelect('Intersurgical')}>Intersurgical - $100</button>
                <button onClick={() => handleSelect('Dräger')}>Dräger - $200</button>
                <button onClick={() => handleSelect('Air Liquide')}>Air Liquide - $300</button>
            </div>
            <div>
                <h2>Selected System: {selectedSystem}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default OxygenSystem;
