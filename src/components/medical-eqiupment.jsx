import React from "react";
import MainStretcher from "./configuration/main_strecher";
import FoldableStretcherSelector from "./configuration/foldable_stretcher";
import FirstAidKit from "./configuration/first_aid_kit";
import OxygenSystem from "./configuration/oxygen_system";
import PortableOxygenSystem from "./configuration/portable_oxygen_system";
import Defibrillator from "./configuration/defibrillator";
import BluetoothTransmissionSelector from "./configuration/bluetooth_transmission";
import PortableSuctionUnitSelector from "./configuration/portable_suction-unit";
import ManualSuctionUnit from "./configuration/manual_suction_unit";
import SpineBoard from "./configuration/spine_board";
import HeadImmobilizer from "./configuration/head_immobilizer";
import ScoopStretcher from "./configuration/scoop_stretcher";
import VacuumMattress from "./configuration/vacuum_mattress";
import Glucometer from "./configuration/glucometer";
import PortableVentilator from "./configuration/portable_ventilator";
import PortablePatientMonitor from "./configuration/portable_patient_monior";
import SuctionAspiration from "./configuration/suction_aspiration";

const MedicalEqiupment = ({ setActive, active, setSection, section }) => {
    console.log("active-medical", active);
  return (
    <>
      {active === 1 && section==="medical"  && <MainStretcher setActive={setActive} />}
      {active === 2 && section==="medical" && <FoldableStretcherSelector setActive={setActive} />}
      {active === 3 && section==="medical" && <FirstAidKit setActive={setActive} />}
      {active === 4 && section==="medical" && <OxygenSystem setActive={setActive} />}
      {active === 5 && section==="medical" && <PortableOxygenSystem setActive={setActive} />}
      {active === 6 && section==="medical" && <SuctionAspiration setActive={setActive} />}
      {active === 7 && section==="medical" && <Defibrillator setActive={setActive} />}
      {active === 8 && section==="medical" && <BluetoothTransmissionSelector setActive={setActive} />}
      {active === 9 && section==="medical" && <PortableSuctionUnitSelector setActive={setActive} />}
      {active === 10 && section==="medical" && <ManualSuctionUnit setActive={setActive} />}
      {active === 11 && section==="medical" && <SpineBoard setActive={setActive} />}
      {active === 12 && section==="medical" && <HeadImmobilizer setActive={setActive} />}
      {active === 13 && section==="medical" && <ScoopStretcher setActive={setActive} />}
      {active === 14 && section==="medical" && <VacuumMattress setActive={setActive} />}
      {active === 15 && section==="medical" && <Glucometer setActive={setActive} />}
      {active === 16 && section==="medical" && <PortableVentilator setActive={setActive} />}
      {active === 17 && section==="medical" && <PortablePatientMonitor setActive={setActive} />}
    </>
  );
};

export default MedicalEqiupment;
