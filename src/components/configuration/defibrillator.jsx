"use client";
import { useState } from 'react';

const Defibrillator = ({setActive}) => {
    const [selectedDefibrillator, setSelectedDefibrillator] = useState('Zoll');
    const [price, setPrice] = useState(100);

    const handleSelect = (defibrillator) => {
        setSelectedDefibrillator(defibrillator);
        switch (defibrillator) {
            case 'Zoll':
                setPrice(100);
                break;
            case 'Philips':
                setPrice(200);
                break;
            case 'Physio-Control':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Defibrillator Selector</h1>
            <div>
                <button onClick={() => handleSelect('Zoll')}>Zoll - $100</button>
                <button onClick={() => handleSelect('Philips')}>Philips - $200</button>
                <button onClick={() => handleSelect('Physio-Control')}>Physio-Control - $300</button>
            </div>
            <div>
                <h2>Selected Defibrillator: {selectedDefibrillator}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default Defibrillator;
