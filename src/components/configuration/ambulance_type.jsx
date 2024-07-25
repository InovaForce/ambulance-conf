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
                <button onClick={() => handleSelectAmbulanceType('Basic Life Support')} style={{ backgroundColor: selectedAmbulanceType === 'Basic Life Support' ? '#fbf79e' : 'grey', borderRadius: "5px",border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)"}}>
                    Basic Life Support
                </button>
                <button onClick={() => handleSelectAmbulanceType('Advanced Life Support')} style={{ backgroundColor: selectedAmbulanceType === 'Advanced Life Support' ? '#fbf79e' : 'grey',borderRadius: "5px", border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)" }}>
                    Advanced Life Support
                </button>
                <button onClick={() => handleSelectAmbulanceType('Intensive Care Unit')} style={{ backgroundColor: selectedAmbulanceType === 'Intensive Care Unit' ? '#fbf79e' : 'grey',borderRadius: "5px", border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)" }}>
                    Intensive Care Unit
                </button>
            </div>
            {selectedAmbulanceType === 'Basic Life Support' && (
                <div  className={styles.ambulance_type_button} style={{ marginTop: '20px' }}>
                    <button onClick={() => handleSelectSubType('Pediatric Ambulance')} style={{ backgroundColor: selectedSubType === 'Pediatric Ambulance' ? '#fbf79e' : 'grey',borderRadius: "5px", border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)" }}>
                        Pediatric Ambulance
                    </button>
                    <button onClick={() => handleSelectSubType('Neonatal Ambulance')} style={{ backgroundColor: selectedSubType === 'Neonatal Ambulance' ? '#fbf79e' : 'grey',borderRadius: "5px", border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)"}}>
                        Neonatal Ambulance
                    </button>
                </div>
            )}          
            <div className={styles.next_back} style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>                
            </div>  
            
        </div>
    );
};

export default AmbulanceType;
