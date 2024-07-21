"use client";
import { useState } from 'react';

const PortableVentilator = ({setActive}) => {
    const [selectedVentilator, setSelectedVentilator] = useState('Hamilton');
    const [price, setPrice] = useState(100);

    const handleSelect = (ventilator) => {
        setSelectedVentilator(ventilator);
        switch (ventilator) {
            case 'Hamilton':
                setPrice(100);
                break;
            case 'Medtronic':
                setPrice(200);
                break;
            case 'Philips':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Portable Ventilator Selector</h1>
            <div>
                <button onClick={() => handleSelect('Hamilton')}>Hamilton - $100</button>
                <button onClick={() => handleSelect('Medtronic')}>Medtronic - $200</button>
                <button onClick={() => handleSelect('Philips')}>Philips - $300</button>
            </div>
            <div>
                <h2>Selected Ventilator: {selectedVentilator}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default PortableVentilator;
