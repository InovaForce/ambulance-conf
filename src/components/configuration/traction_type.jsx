"use client";
import { useState } from 'react';
import Label from '../label';
import styles from '@/styles/components/configuration/traction_type.module.scss';
import { AiOutlineHtml5 } from 'react-icons/ai';
const TractionTypeSelector = ({setActive}) => {
    const [selectedTractionType, setSelectedTractionType] = useState('');
    const handleSelectTractionType = (type) => {
        setSelectedTractionType(type);
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
              fontWeight: "600", backgroundColor: selectedTractionType === '4X4' ? '#fbf79e' : 'grey', color: 'black',border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)", borderRadius: '5px' }}>
                    4x4
                </button>
                <button className={styles.btn_4X2} onClick={() => handleSelectTractionType('4X2')} style={{ padding: '100px 100px',fontSize: "22px",
              fontWeight: "600",backgroundColor: selectedTractionType === '4X2' ? '#fbf79e' : 'grey', color: 'black',border: " 2px solid #cdca8d",
              boxShadow: "0px 1px 1x rgba(0, 0, 0, 0.25)",borderRadius: '5px' }}>
                    4x2
                </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>
            </div>
        </div>
    );
};
export default TractionTypeSelector;