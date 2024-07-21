"use client";
import { useState } from 'react';

const Glucometer = ({setActive}) => {
    const [selectedGlucometer, setSelectedGlucometer] = useState('Accu-Chek');
    const [price, setPrice] = useState(100);

    const handleSelect = (glucometer) => {
        setSelectedGlucometer(glucometer);
        switch (glucometer) {
            case 'Accu-Chek':
                setPrice(100);
                break;
            case 'OneTouch':
                setPrice(200);
                break;
            case 'Contour':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Glucometer Selector</h1>
            <div>
                <button onClick={() => handleSelect('Accu-Chek')}>Accu-Chek - $100</button>
                <button onClick={() => handleSelect('OneTouch')}>OneTouch - $200</button>
                <button onClick={() => handleSelect('Contour')}>Contour - $300</button>
            </div>
            <div>
                <h2>Selected Glucometer: {selectedGlucometer}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default Glucometer;
