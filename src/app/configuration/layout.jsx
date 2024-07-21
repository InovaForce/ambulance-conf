"use client";
import Progress from "@/components/progress/progress";
import React, { useEffect, useState } from "react";
import ConfigurationPage from "./page";

const LayoutConfiguartion = () => {
  const [section, setSection] = useState("pyschical");
  const [step, setStep] = useState(5);
  const [active, setActive] = useState(1);

  const handleId = (id) => {
    setSection(id);
  };

  useEffect(() => {
    const newStep =
      section === "pyschical" ? 5 : section === "medical" ? 17 : 1;
    setStep(newStep);

    console.log("active", active, "step", newStep, "section", section);
  }, [section, active]);

  return (
    <>
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
      />
    </>
  );
};

export default LayoutConfiguartion;
