"use client";
import { useState } from 'react';

const SpineBoard = () => {
    const [selectedBoard, setSelectedBoard] = useState('Ferno');
    const [price, setPrice] = useState(100);

    const handleSelect = (board) => {
        setSelectedBoard(board);
        switch (board) {
            case 'Ferno':
                setPrice(100);
                break;
            case 'Laerdal':
                setPrice(200);
                break;
            case 'Spineboard':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Spine Board Selector</h1>
            <div>
                <button onClick={() => handleSelect('Ferno')}>Ferno - $100</button>
                <button onClick={() => handleSelect('Laerdal')}>Laerdal - $200</button>
                <button onClick={() => handleSelect('Spineboard')}>Spineboard - $300</button>
            </div>
            <div>
                <h2>Selected Board: {selectedBoard}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default SpineBoard;
