
import React from "react";
import FuelTypeSelector from "./configuration/fuel-type";
import TractionTypeSelector from "./configuration/traction_type";
import AmbulanceType from "./configuration/ambulance_type";
import VehicleTypeSelector from "./configuration/vehicle_type";
import ExtraFeaturesSelector from "./configuration/extra_features";

const PyschicalEqiupment = ({ setActive, active, setSection, section }) => {
  return (
    <>
      {active === 1 && section==="pyschical"  && <FuelTypeSelector setActive={setActive} />}
      {active === 2 && section==="pyschical" && <TractionTypeSelector setActive={setActive} />}
      {active === 3 && section==="pyschical" && <AmbulanceType setActive={setActive} />}
      {active === 4 && section==="pyschical" && <VehicleTypeSelector setActive={setActive} />}
      {active === 5 && section==="pyschical" && <ExtraFeaturesSelector setActive={setActive} setSection={setSection} />}
    </>
  );
};

export default PyschicalEqiupment;
