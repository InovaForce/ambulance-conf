"use client";
import { useState } from 'react';

const TractionTypeSelector = ({setActive}) => {
    const [selectedTractionType, setSelectedTractionType] = useState('');

    const handleSelectTractionType = (type) => {
        setSelectedTractionType(type);
        setActive((prev) => prev + 1);
    };

    return (
        <div>
            <h1>CHOOSE TRACTION TYPE</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button onClick={() => handleSelectTractionType('4X4')} style={{ padding: '10px', fontSize: '16px', backgroundColor: selectedTractionType === '4X4' ? 'yellow' : 'grey', color: 'black', border: 'none', borderRadius: '5px' }}>
                    4X4
                </button>
                <button onClick={() => handleSelectTractionType('4X2')} style={{ padding: '10px', fontSize: '16px', backgroundColor: selectedTractionType === '4X2' ? 'yellow' : 'grey', color: 'black', border: 'none', borderRadius: '5px' }}>
                    4X2
                </button>
            </div>
            {selectedTractionType && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h2>Selected Traction Type: {selectedTractionType}</h2>
                </div>
            )}
        </div>
    );
};

export default TractionTypeSelector;
