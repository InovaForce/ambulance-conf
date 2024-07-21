"use client";
import { useState } from 'react';

const PortablePatientMonitor= ({setActive}) => {
    const [selectedStretcher, setSelectedStretcher] = useState('GE Healthcare');
    const [price, setPrice] = useState(100);

    const handleSelect = (stretcher) => {
        setSelectedStretcher(stretcher);
        switch (stretcher) {
            case 'GE Healthcare':
                setPrice(100);
                break;
            case 'Philips':
                setPrice(200);
                break;
            case 'Mindray':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive(0);
    };

    return (
        <div>
            <h1>Portable Patient Monitor</h1>
            <div>
                <button onClick={() => handleSelect('GE Healthcare')}>GE Healthcare - $100</button>
                <button onClick={() => handleSelect('Philips')}>Philips - $200</button>
                <button onClick={() => handleSelect('Mindray')}>Mindray - $300</button>
            </div>
            <div>
                <h2>Selected Stretcher: {selectedStretcher}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default PortablePatientMonitor;
