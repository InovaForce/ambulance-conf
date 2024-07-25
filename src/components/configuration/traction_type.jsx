"use client";
import { useState } from 'react';
import Label from '../label';
import styles from '@/styles/components/configuration/traction_type.module.scss';
import { AiOutlineHtml5 } from 'react-icons/ai';
const TractionTypeSelector = ({setActive}) => {
    const [selectedTractionType, setSelectedTractionType] = useState('');
    const handleSelectTractionType = (type) => {
        setSelectedTractionType(type);
        setActive((prev) => prev + 1);
    };
    const handleNext= () =>{
        setActive((prev) => prev + 1);
    }
    const handleBack= () =>{
        setActive((prev) => prev - 1);
    }
    return (
        <div className={styles.traction_type}>
            <Label title="CHOOSE YOUR TRACTION TYPE "/>
            <div className={styles.btn_traction_type}>
                <button className={styles.btn_4X4} onClick={() => handleSelectTractionType('4X4')} style={{ padding: '100px 100px', fontSize: "22px",
              fontWeight: "600", backgroundColor: selectedTractionType === '4X4' ? 'yellow' : 'grey', color: 'black', border: 'none', borderRadius: '5px' }}>
                    4x4
                </button>
                <button className={styles.btn_4X2} onClick={() => handleSelectTractionType('4X2')} style={{ padding: '100px 100px',fontSize: "22px",
              fontWeight: "600",backgroundColor: selectedTractionType === '4X2' ? 'yellow' : 'grey', color: 'black', border: 'none', borderRadius: '5px' }}>
                    4x2
                </button>
            </div>
            {selectedTractionType && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <h5>Selected Traction Type: {selectedTractionType}</h5>
                </div>
            )}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>
            </div>
        </div>
    );
};
export default TractionTypeSelector;