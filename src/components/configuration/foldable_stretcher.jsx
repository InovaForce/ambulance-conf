"use client";
import { useState } from 'react';

const FoldableStretcherSelector = ({setActive}) => {
    const [selectedStretcher, setSelectedStretcher] = useState('Stryker');
    const [price, setPrice] = useState(100);

    const handleSelect = (stretcher) => {
        setSelectedStretcher(stretcher);
        switch (stretcher) {
            case 'Stryker':
                setPrice(100);
                break;
            case 'Junkin':
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
            <h1>Foldable Stretcher Selector</h1>
            <div>
                <button onClick={() => handleSelect('Stryker')}>Stryker - $100</button>
                <button onClick={() => handleSelect('Junkin')}>Junkin - $200</button>
                <button onClick={() => handleSelect('Ferno')}>Ferno - $300</button>
            </div>
            <div>
                <h2>Selected Stretcher: {selectedStretcher}</h2>
                <h2>Price: ${price}</h2>
            </div>
        </div>
    );
};

export default FoldableStretcherSelector;
