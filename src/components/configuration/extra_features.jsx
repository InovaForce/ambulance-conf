"use client";
import { useState } from 'react';
import Label from '../label';

const ExtraFeaturesSelector = ({setActive, setSection}) => {
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const handleSelectFeature = (feature) => {
        if (selectedFeatures.includes(feature)) {
            setSelectedFeatures(selectedFeatures.filter(item => item !== feature));
        } else {
            setSelectedFeatures([...selectedFeatures, feature]);
        }
    };

    const handleSection = () => {
        setActive(0);
        setSection("medical");
    };
    const handleNext= () =>{
        setActive((prev) => prev + 1);
    }

    const handleBack= () =>{
        setActive((prev) => prev - 1);
    }
   
    return (
        <div>
            <Label title="CHOOSE EXTRA FEATURES" />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <button onClick={() => handleSelectFeature('Defibrillator')} style={{ backgroundColor: selectedFeatures.includes('Defibrillator') ? 'lightgreen' : 'grey', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Defibrillator
                </button>
                <button onClick={() => handleSelectFeature('Monitor & Vital Signs')} style={{ backgroundColor: selectedFeatures.includes('Monitor & Vital Signs') ? 'lightgreen' : 'grey', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Monitor & Vital Signs
                </button>
                <button onClick={() => handleSelectFeature('Medication and Injection Sets')} style={{ backgroundColor: selectedFeatures.includes('Medication and Injection Sets') ? 'lightgreen' : 'grey', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Medication and Injection Sets
                </button>
                <button onClick={() => handleSelectFeature('Portable Ventilator')} style={{ backgroundColor: selectedFeatures.includes('Portable Ventilator') ? 'lightgreen' : 'grey', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Portable Ventilator
                </button>
                <button onClick={() => handleSelectFeature('Suction Unit')} style={{ backgroundColor: selectedFeatures.includes('Suction Unit') ? 'lightgreen' : 'grey', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>
                    Suction Unit
                </button>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <h5>Selected Features:</h5>
                <ul>
                    {selectedFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button className='btn' onClick={handleSection}>FINISH</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>                
            </div>  
       
           
        </div>
        
    );
};

export default ExtraFeaturesSelector;
