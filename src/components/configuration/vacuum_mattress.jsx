"use client";
import { useState } from 'react';

const VacuumMattress = ({setActive}) => {
    const [selectedMattress, setSelectedMattress] = useState('Hartwell');
    const [price, setPrice] = useState(100);

    const handleSelect = (mattress) => {
        setSelectedMattress(mattress);
        switch (mattress) {
            case 'Hartwell':
                setPrice(100);
                break;
            case 'RedVac':
                setPrice(200);
                break;
            case 'Ferno':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>Vacuum Mattress Selector</h1>
            <div>
                <button onClick={() => handleSelect('Hartwell')}>Hartwell - $100</button>
                <button onClick={() => handleSelect('RedVac')}>RedVac - $200</button>
                <button onClick={() => handleSelect('Ferno')}>Ferno - $300</button>
            </div>
            <div>
                <h2>Selected Mattress: {selectedMattress}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default VacuumMattress;
