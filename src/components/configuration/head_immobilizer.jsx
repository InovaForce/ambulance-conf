"use client";
import { useState } from 'react';

const HeadImmobilizer = ({setActive}) => {
    const [selectedImmobilizer, setSelectedImmobilizer] = useState('Ferno');
    const [price, setPrice] = useState(100);

    const handleSelect = (immobilizer) => {
        setSelectedImmobilizer(immobilizer);
        switch (immobilizer) {
            case 'Ferno':
                setPrice(100);
                break;
            case 'Laerdal':
                setPrice(200);
                break;
            case 'Ambu':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Head Immobilizer Selector</h1>
            <div>
                <button onClick={() => handleSelect('Ferno')}>Ferno - $100</button>
                <button onClick={() => handleSelect('Laerdal')}>Laerdal - $200</button>
                <button onClick={() => handleSelect('Ambu')}>Ambu - $300</button>
            </div>
            <div>
                <h2>Selected Immobilizer: {selectedImmobilizer}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default HeadImmobilizer;
