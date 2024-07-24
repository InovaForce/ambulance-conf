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
    const handleNext= () =>{
        setActive((prev) => prev + 1);
    }

    const handleBack= () =>{
        setActive((prev) => prev - 1);
    }


    return (
        <div>
            <div className={styles.ambulance_type_lablel}><Label title="CHOOSE YOUR AMBULANCE TYPE" /></div>
            
            <div className={styles.ambulance_type_button}>
                <button onClick={() => handleSelectAmbulanceType('Basic Life Support')} style={{ backgroundColor: selectedAmbulanceType === 'Basic Life Support' ? 'lightblue' : 'lightgrey' }}>
                    Basic Life Support
                </button>
                <button onClick={() => handleSelectAmbulanceType('Advanced Life Support')} style={{ backgroundColor: selectedAmbulanceType === 'Advanced Life Support' ? 'lightblue' : 'lightgrey' }}>
                    Advanced Life Support
                </button>
                <button onClick={() => handleSelectAmbulanceType('Intensive Care Unit')} style={{ backgroundColor: selectedAmbulanceType === 'Intensive Care Unit' ? 'lightblue' : 'lightgrey' }}>
                    Intensive Care Unit
                </button>
            </div>
            {selectedAmbulanceType === 'Basic Life Support' && (
                <div  className={styles.ambulance_type_button} style={{ marginTop: '20px' }}>
                    <button onClick={() => handleSelectSubType('Pediatric Ambulance')} style={{ backgroundColor: selectedSubType === 'Pediatric Ambulance' ? 'lightgreen' : 'lightgrey' }}>
                        Pediatric Ambulance
                    </button>
                    <button onClick={() => handleSelectSubType('Neonatal Ambulance')} style={{ backgroundColor: selectedSubType === 'Neonatal Ambulance' ? 'lightgreen' : 'lightgrey'}}>
                        Neonatal Ambulance
                    </button>
                </div>
            )}
            <div style={{ marginTop: '20px' }}>
                <h5>Selected Type: {selectedAmbulanceType}</h5>
                {selectedSubType && <h5>Sub-Type: {selectedSubType}</h5>}
            </div>
            <div className={styles.next_back} style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>                
            </div>  
            
        </div>
    );
};

export default AmbulanceType;
