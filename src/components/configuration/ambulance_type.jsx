"use client";
import { useState } from 'react';
import Label from '../label';
import styles from '@/styles/components/configuration/ambulance_type.module.scss';

const AmbulanceType = ({setActive}) => {
    const [selectedAmbulanceType, setSelectedAmbulanceType] = useState('');
    const [selectedSubType, setSelectedSubType] = useState('');

    const handleSelectAmbulanceType = (type) => {
        setSelectedAmbulanceType(type);
        setSelectedSubType('');
    };

    const handleSelectSubType = (subtype) => {
        setSelectedSubType(subtype);
        setActive((prev) => prev + 1);
    };


    return (
        <div>
            <Label title="CHOOSE YOUR AMBULANCE TYPE" />
            <div className={styles.ambulance_type}>
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
                <h4>Selected Type: {selectedAmbulanceType}</h4>
                {selectedSubType && <h5>Sub-Type: {selectedSubType}</h5>}
            </div>
            
        </div>
    );
};

export default AmbulanceType;
