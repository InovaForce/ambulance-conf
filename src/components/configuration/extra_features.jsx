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
        <div >
            <Label title="CHOOSE EXTRA FEATURES" />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '45px', height: '200px',width: '800px', marginTop: '40px' }}>
               
                <button onClick={() => handleSelectFeature('Monitor & Vital Signs')} style={{ backgroundColor: selectedFeatures.includes('Monitor & Vital Signs') ? '#fbf79e' : 'lightgrey', padding: '30px 20px', border: 'none', borderRadius: '5px' ,boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'}}>
                    Monitor & Vital Signs
                </button>
                <button onClick={() => handleSelectFeature('Medication and Injection Sets')} style={{ backgroundColor: selectedFeatures.includes('Medication and Injection Sets') ? '#fbf79e' : 'lightgrey', padding: '30px 20px', border: 'none', borderRadius: '5px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                    Medication and Injection Sets
                </button>
                <button onClick={() => handleSelectFeature('Portable Ventilator')} style={{ backgroundColor: selectedFeatures.includes('Portable Ventilator') ? '#fbf79e' : 'lightgrey', padding: '30px 20px', border: 'none', borderRadius: '5px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                    Portable Ventilator
                </button>
                <button onClick={() => handleSelectFeature('Suction Unit')} style={{ backgroundColor: selectedFeatures.includes('Suction Unit') ? '#fbf79e' : 'lightgrey', padding: '30px 20px', border: 'none', borderRadius: '5px', gap: '35px !important' ,boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'}}>
                    Suction Unit
                </button>
                <button onClick={() => handleSelectFeature('Defibrillator')} style={{ backgroundColor: selectedFeatures.includes('Defibrillator') ? '#fbf79e' : 'lightgrey', padding: '30px 20px', border: 'none', borderRadius: '5px',boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
                    Defibrillator
                </button>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <h5>Selected Features:</h5>
                <ul>
                    {selectedFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button className='btn' style={{ color: 'red',  border: '2px solid red', padding: '10px 20px', borderRadius: '5px', display: 'flex', margin: '10px auto', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}} onClick={handleSection}>FINISH</button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <button className="back" onClick={handleBack}> Back </button>
                <button className="next" onClick={handleNext}> Next </button>                
            </div>  
       
           
        </div>
        
    );
};

export default ExtraFeaturesSelector;
