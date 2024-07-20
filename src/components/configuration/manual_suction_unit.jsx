"use client";
import { useState } from 'react';

const ManualSuctionUnit = () => {
    const [selectedUnit, setSelectedUnit] = useState('Laerdal');
    const [price, setPrice] = useState(100);

    const handleSelect = (unit) => {
        setSelectedUnit(unit);
        switch (unit) {
            case 'Laerdal':
                setPrice(100);
                break;
            case 'SSCOR':
                setPrice(200);
                break;
            case 'DeVilbiss':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Manual Suction Unit Selector</h1>
            <div>
                <button onClick={() => handleSelect('Laerdal')}>Laerdal - $100</button>
                <button onClick={() => handleSelect('SSCOR')}>SSCOR - $200</button>
                <button onClick={() => handleSelect('DeVilbiss')}>DeVilbiss - $300</button>
            </div>
            <div>
                <h2>Selected Unit: {selectedUnit}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default ManualSuctionUnit;
