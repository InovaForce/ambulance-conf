"use strict";
import { useState } from 'react';

const SuctionAspiration = () => {
    const [selectedDevice, setSelectedDevice] = useState('Laerdal');
    const [price, setPrice] = useState(100);

    const handleSelect = (device) => {
        setSelectedDevice(device);
        switch (device) {
            case 'Laerdal':
                setPrice(100);
                break;
            case 'SSCOR':
                setPrice(200);
                break;
            case 'Medela':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Suction Aspiration Selector</h1>
            <div>
                <button onClick={() => handleSelect('Laerdal')}>Laerdal - $100</button>
                <button onClick={() => handleSelect('SSCOR')}>SSCOR - $200</button>
                <button onClick={() => handleSelect('Medela')}>Medela - $300</button>
            </div>
            <div>
                <h2>Selected Device: {selectedDevice}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default SuctionAspiration;
