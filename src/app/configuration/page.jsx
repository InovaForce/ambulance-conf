
"use client"

import MedicalEqiupment from '@/components/medical-eqiupment'
import PyschicalEqiupment from '@/components/pyschical-eqiupment'
import React, { useEffect, useState } from 'react'
import styles from './conf_page.module.scss'

const ConfigurationPage = ({section, setActive, active, setSection, generally, setGenerally,handleReset}) => {
  

  const [type, setType] = useState("")

  
  useEffect(() => {
    setType(section)  
  }, [section]);
  
console.log("section", section, "type", type);

  return (
    <div className={styles.configuration}>
      {type && type === "pyschical" && (
        <PyschicalEqiupment setActive={setActive} active={active} setSection={setSection} section={section} generally={generally} setGenerally={setGenerally} />
      )}
      {type && type === "medical" && (
        <MedicalEqiupment setActive={setActive} active={active} setSection={setSection} section={section} generally={generally} setGenerally={setGenerally} handleReset={handleReset}/>
      )}
    </div>
  );
}

export default ConfigurationPage;
