"use client";
import { useState } from 'react';

const MainStretcher = () => {
    const [selectedStretcher, setSelectedStretcher] = useState('Stryker');
    const [price, setPrice] = useState(100);

    const handleSelect = (stretcher) => {
        setSelectedStretcher(stretcher);
        switch (stretcher) {
            case 'Stryker':
                setPrice(100);
                break;
            case 'Ferno':
                setPrice(200);
                break;
            case 'Spencer':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Stretcher Selector</h1>
            <div>
                <button onClick={() => handleSelect('Stryker')}>Stryker - $100</button>
                <button onClick={() => handleSelect('Ferno')}>Ferno - $200</button>
                <button onClick={() => handleSelect('Spencer')}>Spencer - $300</button>
            </div>
            <div>
                <h2>Selected Stretcher: {selectedStretcher}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default MainStretcher;
