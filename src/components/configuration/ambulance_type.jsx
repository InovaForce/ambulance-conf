"use client";
import { useState } from 'react';
import ImageGallery from '../ImageGallery';

const AmbulanceType = () => {
    const [selectedAmbulanceType, setSelectedAmbulanceType] = useState('');
    const [selectedSubType, setSelectedSubType] = useState('');

    const handleSelectAmbulanceType = (type) => {
        setSelectedAmbulanceType(type);
        setSelectedSubType('');
    };

    const handleSelectSubType = (subtype) => {
        setSelectedSubType(subtype);
    };

    return (
        <div>
            <h1>CHOOSE AMBULANCE TYPE</h1>
            <span><ImageGallery/></span>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <button onClick={() => handleSelectAmbulanceType('Basic Life Support')} style={{ backgroundColor: selectedAmbulanceType === 'Basic Life Support' ? 'lightblue' : 'grey' }}>
                    Basic Life Support
                </button>
                <button onClick={() => handleSelectAmbulanceType('Advanced Life Support')} style={{ backgroundColor: selectedAmbulanceType === 'Advanced Life Support' ? 'lightblue' : 'grey' }}>
                    Advanced Life Support
                </button>
                <button onClick={() => handleSelectAmbulanceType('Intensive Care Unit')} style={{ backgroundColor: selectedAmbulanceType === 'Intensive Care Unit' ? 'lightblue' : 'grey' }}>
                    Intensive Care Unit
                </button>
            </div>
            {selectedAmbulanceType === 'Basic Life Support' && (
                <div style={{ marginTop: '20px' }}>
                    <button onClick={() => handleSelectSubType('Pediatric Ambulance')} style={{ backgroundColor: selectedSubType === 'Pediatric Ambulance' ? 'lightgreen' : 'grey' }}>
                        Pediatric Ambulance
                    </button>
                    <button onClick={() => handleSelectSubType('Neonatal Ambulance')} style={{ backgroundColor: selectedSubType === 'Neonatal Ambulance' ? 'lightgreen' : 'grey' }}>
                        Neonatal Ambulance
                    </button>
                </div>
            )}
            <div style={{ marginTop: '20px' }}>
                <h2>Selected Type: {selectedAmbulanceType}</h2>
                {selectedSubType && <h3>Sub-Type: {selectedSubType}</h3>}
            </div>
        </div>
    );
};

export default AmbulanceType;
