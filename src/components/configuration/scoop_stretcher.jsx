"use client";
import { useState } from 'react';

const ScoopStretcher = ({setActive}) => {
    const [selectedStretcher, setSelectedStretcher] = useState('Ferno');
    const [price, setPrice] = useState(100);

    const handleSelect = (stretcher) => {
        setSelectedStretcher(stretcher);
        switch (stretcher) {
            case 'Ferno':
                setPrice(100);
                break;
            case 'MeBer':
                setPrice(200);
                break;
            case 'Laerdal':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Scoop Stretcher Selector</h1>
            <div>
                <button onClick={() => handleSelect('Ferno')}>Ferno - $100</button>
                <button onClick={() => handleSelect('MeBer')}>MeBer - $200</button>
                <button onClick={() => handleSelect('Laerdal')}>Laerdal - $300</button>
            </div>
            <div>
                <h2>Selected Stretcher: {selectedStretcher}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default ScoopStretcher;
