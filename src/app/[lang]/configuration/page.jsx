"use client"
import MedicalEqiupment from '@/components/medical-eqiupment'
import Progress from '@/components/progress/progress';
import PyschicalEqiupment from '@/components/pyschical-eqiupment'
import SideBar from '@/components/sideBar';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
const initialAmbulance = {
  pyschical: {
    fuelType: "",
    tractionType: "",
    ambulanceType: "",
    vehicleType: "",
    extraFeatures: [],
  },
  medical: {
    mainStretcher: "",
    foldableStretcher: "",
    firstAidKit: "",
    oxygenSystem: "",
    portableOxygenSystem: "",
    defibrillator: "",
    bluetoothTransmission: "",
    portableSuctionUnit: "",
    manualSuctionUnit: "",
    spineBoard: "",
    headImmobilizer: "",
    scoopStretcher: "",
    vacuumMattress: "",
    glucometer: "",
    portableVentilator: "",
    portablePatientMonitor: "",
    suctionAspiration: "",
  },
  totalPrice: 0,
};


const ConfigurationPage = ({ dict}) => {
  const [section, setSection] = useState("pyschical");
  const [step, setStep] = useState(5);
  const [active, setActive] = useState(1);
  const [generally, setGenerally] = useState(() => {
    // Sayfa yüklendiğinde local storage'dan veri al
    const savedData = localStorage.getItem("ambulanceData");
    return savedData ? JSON.parse(savedData) : initialAmbulance;
  });
  

  const {configurationPage,buttons,initAmbulance}=dict;
  const { pyschalEquipment,medicalEquipment } = configurationPage;

  const handleId = (id) => {
    setSection(id);
    if (id === "pyschical" || id=== "medical") {
      setActive(1);
    }
  };

  const handleReset = () => {
    // Local storage'ı temizle ve generally durumunu sıfırla
    localStorage.removeItem("ambulanceData");
    setGenerally(initialAmbulance);
  };

  useEffect(() => {
    const newStep =
      section === "pyschical" ? 5 : section === "medical" ? 17 : 1;
    setStep(newStep);

    console.log("active", active, "step", newStep, "section", section);
  }, [section, active]);

  useEffect(() => {
    // generally durumu değiştiğinde local storage'a kaydet
    localStorage.setItem("ambulanceData", JSON.stringify(generally));
  }, [generally]);

 
  return (
    <Row>
      <Col md={9}>
        <div className="btn-group">
          <button
            id="pyschical"
            className="btn btn-primary"
            onClick={() => handleId("pyschical")}
          >
            {pyschalEquipment.title}
          </button>
          <button
            id="medical"
            className="btn btn-primary"
            onClick={() => handleId("medical")}
          >
            {medicalEquipment.title}
          </button>
        </div>
        <Progress step={step} active={active} setActive={setActive} />
        {section && section === "pyschical" && (
          <PyschicalEqiupment
            setActive={setActive}
            active={active}
            setSection={setSection}
            section={section}
            generally={generally}
            setGenerally={setGenerally}
            dict={pyschalEquipment}
            buttons={buttons}
          />
        )}
        {section && section === "medical" && (
          <MedicalEqiupment
            setActive={setActive}
            active={active}
            setSection={setSection}
            section={section}
            generally={generally}
            setGenerally={setGenerally}
            handleReset={handleReset}
            dict={medicalEquipment}
            buttons={buttons}
          
          />
        )}
      </Col>
      <Col md={3}>
        <SideBar generally={generally} setGenerally={setGenerally} dict={initAmbulance} />
      </Col>
    </Row>
  );
};

export default ConfigurationPage;


