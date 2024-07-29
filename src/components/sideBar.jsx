'use client'
import styles from "@/styles/components/sideBar.module.scss";
import { useEffect, useState } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SideBar = ({handleRemove, setGenerally,generally,dict }) => {
  const [vehicleData, setVehicleData] = useState(null);

  const { pyschical, medical } = dict;

  useEffect (()=>{

  },[generally])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllInformation();
        setVehicleData(data);
      } catch (error) {
        console.error("Araç verilerini alırken hata oluştu:", error);
      }
    };
    fetchData();
  }, []);
 
  

  const renderSection = (section, sectionName) => {
    return (
      <div>
        <p className="border-bottom mt-3">{sectionName}</p>
        {Object.keys(section).map((key, index) => {
          const value = section[key];
          if (Array.isArray(value) && value.length > 0) {
            return (
              <div key={index}>
                <h3>{key}:</h3>
                {value.map((item, i) => (
                  <h4 key={i}>
                    <AiOutlineCaretRight />
                    {item}
                  </h4>
                ))}
              </div>
            );
          } else if (value && typeof value === 'string') {
            return (
              <div key={index}>
                <h3>{key}:</h3>
                <h4>{value}</h4>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  };

  return (
    <div className={styles.sideBar}>
      <h2>{dict.yourAmbulance}</h2>
      <div className="ps-2  text-start">
        <p className=" border-bottom mt-3">{dict.vehicleProperties}</p>

        {generally.pyschical.fuelType ? (
          <div>
            <h3>{pyschical.fuelType} <AiOutlineCloseCircle  onClick={() => handleRemove('pyschical', 'fuelType')} className={`${styles.hvr} hvr ms-4 text-black fs-4`}/></h3>
            <h4>{generally.pyschical.fuelType}</h4>
          </div>
        ) : null}

        {generally.pyschical.tractionType ? (
          <>
            <h3>{pyschical.tractionType}</h3>
            <h4>{generally.pyschical.tractionType}</h4>
          </>
        ) : null}

        {generally.pyschical.ambulanceType ? (
          <>
            <h3>{pyschical.ambulanceType}</h3>
            <h4>{generally.pyschical.ambulanceType}</h4>
          </>
        ) : null}

        {generally.pyschical.vehicleType ? (
          <>
            <h3>{pyschical.vehicleType}</h3>
            <h4>{generally.pyschical.vehicleType}</h4>
          </>
        ) : null}

        {generally.pyschical.extraFeatures.length>0 ? (
          <div>
            <h3>{pyschical.extraFeatures}</h3>

            {generally.pyschical.extraFeatures.map((feature, index) => (
              <h4 key={index}>
                <AiOutlineCaretRight />
                {feature}
              </h4>
            ))}
          </div>
        ) : null}

        {generally.medical.mainStretcher ? (
          <>
            <h3>{medical.mainStretcher}</h3>
            <h4>{generally.medical.mainStretcher}</h4>
          </>
        ) : null}

        {generally.medical.foldableStretcher ? (
          <>
            <h3>{medical.foldableStretcher}</h3>
            <h4>{generally.medical.foldableStretcher}</h4>
          </>
        ) : null}

        {generally.medical.firstAidKit ? (
          <>
            <h3>{medical.firstAidKit}</h3>
            <h4>{generally.medical.firstAidKit}</h4>
          </>
        ) : null}

        {generally.medical.oxygenSystem ? (
          <>
            <h3>{medical.oxygenSystem}</h3>
            <h4>{generally.medical.oxygenSystem}</h4>
          </>
        ) : null}

        {generally.medical.portableOxygenSystem ? (
          <>
            <h3>{medical.portableOxygenSystem}</h3>
            <h4>{generally.medical.portableOxygenSystem}</h4>
          </>
        ) : null}

        {generally.medical.defibrillator ? (
          <>
            <h3>{medical.defibrillator}</h3>
            <h4> {generally.medical.defibrillator}</h4>
          </>
        ) : null}

        {generally.medical.bluetoothTransmission ? (
          <>
            <h3>{medical.bluetoothTransmission}</h3>
            <h4>{generally.medical.bluetoothTransmission}</h4>
          </>
        ) : null}

        {generally.medical.portableSuctionUnit ? (
          <>
            <h3>{medical.portableSuctionUnit}</h3>
            <h4>{generally.medical.portableSuctionUnit}</h4>
          </>
        ) : null}

        {generally.medical.manualSuctionUnit ? (
          <>
            <h3>{medical.manualSuctionUnit}</h3>
            <h4>{generally.medical.manualSuctionUnit}</h4>
          </>
        ) : null}

        {generally.medical.spineBoard ? (
          <>
            <h3>{medical.spineBoard}</h3>
            <h4>{generally.medical.spineBoard}</h4>
          </>
        ) : null}

        {generally.medical.headImmobilizer ? (
          <>
            <h3>{medical.headImmobilizer}</h3>
            <h4>{generally.medical.headImmobilizer}</h4>
          </>
        ) : null}

        {generally.medical.scoopStretcher ? (
          <>
            <h3>{medical.scoopStretcher}</h3>
            <h4>{generally.medical.scoopStretcher}</h4>
          </>
        ) : null}

        {generally.medical.vacuumMattress ? (
          <>
            <h3>{medical.vacuumMattress}</h3>
            <h4>{generally.medical.vacuumMattress}</h4>
          </>
        ) : null}

        {generally.medical.glucometer ? (
          <>
            <h3>{medical.glucometer}</h3>
            <h4>{generally.medical.glucometer}</h4>
          </>
        ) : null}

        {generally.medical.portableVentilator ? (
          <>
            <h3>{medical.portableVentilator}</h3>
            <h4>{generally.medical.portableVentilator}</h4>
          </>
        ) : null}

        {generally.medical.portablePatientMonitor ? (
          <>
            <h3>{medical.portablePatientMonitor}</h3>
            <h4>{generally.medical.portablePatientMonitor}</h4>
          </>
        ) : null}

        {generally.medical.suctionAspiration ? (
          <>
            <h3>{medical.suctionAspiration}</h3>
            <h4>{generally.medical.suctionAspiration}</h4>
          </>
        ) : null}

        <h2 className={styles.total}>{dict.totalPrice}{":"}{generally.totalPrice}$</h2>
      </div>
    </div>
  );
};

export default SideBar;
