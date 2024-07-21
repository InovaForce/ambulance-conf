"use client";
import { useState } from 'react';

const FirstAidKit = ({setActive}) => {
    const [selectedKit, setSelectedKit] = useState('Johnson & Johnson');
    const [price, setPrice] = useState(100);

    const handleSelect = (kit) => {
        setSelectedKit(kit);
        switch (kit) {
            case 'Johnson & Johnson':
                setPrice(100);
                break;
            case 'First Aid Only':
                setPrice(200);
                break;
            case 'Beiersdorf':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>First Aid Kit Selector</h1>
            <div>
                <button onClick={() => handleSelect('Johnson & Johnson')}>Johnson & Johnson - $100</button>
                <button onClick={() => handleSelect('First Aid Only')}>First Aid Only - $200</button>
                <button onClick={() => handleSelect('Beiersdorf')}>Beiersdorf - $300</button>
            </div>
            <div>
                <h2>Selected Kit: {selectedKit}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default FirstAidKit;
