"use client";
import Progress from "@/components/progress/progress";
import React, { useEffect, useState } from "react";
import ConfigurationPage from "./page";
import { Col, Row } from "react-bootstrap";
import SideBar from "@/components/sideBar";
import  "@/app/configuration/layout.scss";

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

const LayoutConfiguartion = () => {
  const [section, setSection] = useState("pyschical");
  const [step, setStep] = useState(5);
  const [active, setActive] = useState(1);
  const [generally, setGenerally] = useState(() => {
    // Sayfa yüklendiğinde local storage'dan veri al
    const savedData = localStorage.getItem("ambulanceData");
    return savedData ? JSON.parse(savedData) : initialAmbulance;
  });

  const handleId = (id) => {
    setSection(id);
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
    <>
      <Row className="flex-grow-1" style={{ height: "100vh" }}>
        <Col md={9}>
          <div className="btn-group">
            <button
              id="pyschical"
              className="btn btn-primary"
              onClick={() => handleId("pyschical")}
            >
              Pyschal Equipment
            </button>
            <button
              id="medical"
              className="btn btn-primary"
              onClick={() => handleId("medical")}
            >
              Medical Equipment
            </button>

          </div>
          <Progress step={step} active={active} setActive={setActive} />

          <ConfigurationPage
            setSection={setSection}
            section={section}
            setActive={setActive}
            active={active}
            generally={generally}
            setGenerally={setGenerally}
            handleReset={handleReset}
          />
        </Col>
        <Col md={3}>
          <SideBar generally={generally} />
        </Col>
      </Row>
    </>
  );
};

export default LayoutConfiguartion;
