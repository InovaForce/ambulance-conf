'use client'
import styles from "@/styles/components/sideBar.module.scss";
import { useEffect } from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
const SideBar = ({ generally }) => {

  useEffect (()=>{

  },[generally])
  return (
    <div className={styles.sideBar}>
      <h2>Your Ambulance</h2>
      <div className="ps-2  text-start">
        <p className=" border-bottom mt-3">Arac ve Ozellikleri</p>

        {generally.pyschical.fuelType ? (
          <div>
            <h3>FuelType:</h3>
            <h4>{generally.pyschical.fuelType}</h4>
          </div>
        ) : null}

        {generally.pyschical.tractionType ? (
          <>
            <h3>TractionType:</h3>
            <h4>{generally.pyschical.tractionType}</h4>
          </>
        ) : null}

        {generally.pyschical.ambulanceType ? (
          <>
            <h3>AmbulanceType:</h3>
            <h4>{generally.pyschical.ambulanceType}</h4>
          </>
        ) : null}

        {generally.pyschical.vehicleType ? (
          <>
            <h3>VehicleType:</h3>
            <h4>{generally.pyschical.vehicleType}</h4>
          </>
        ) : null}

        {generally.pyschical.extraFeatures.length > 0 ? (
          <div>
            <h3>Features</h3>

            {generally.pyschical.extraFeatures.map((feature, index) => (
              <h4 key={index}><AiOutlineCaretRight />{feature}</h4>
            ))}
          </div>
        ) : null}

        {generally.medical.mainStretcher ? (
          <>
            <h3>MainStretcher:</h3>
            <h4>{generally.medical.mainStretcher}</h4>
          </>
        ) : null}

        {generally.medical.foldableStretcher ? (
          <>
            <h3>FoldableStretcher:</h3>
            <h4>{generally.medical.foldableStretcher}</h4>
          </>
        ) : null}

        {generally.medical.firstAidKit ? (
          <>
            <h3>FirstAidKit:</h3>
            <h4>{generally.medical.firstAidKit}</h4>
          </>
        ) : null}

        {generally.medical.oxygenSystem ? (
          <>
            <h3>OxygenSystem:</h3>
            <h4>{generally.medical.oxygenSystem}</h4>
          </>
        ) : null}

        {generally.medical.portableOxygenSystem ? (
          <>
            <h3>PortableOxygenSystem:</h3>
            <h4>{generally.medical.portableOxygenSystem}</h4>
          </>
        ) : null}

        {generally.medical.defibrillator ? (
          <>
            <h3>Defibrillator:</h3>
            <h4> {generally.medical.defibrillator}</h4>
          </>
        ) : null}

        {generally.medical.bluetoothTransmission ? (
          <>
            <h3>BluetoothTransmission:</h3>
            <h4>{generally.medical.bluetoothTransmission}</h4>
          </>
        ) : null}

        {generally.medical.portableSuctionUnit ? (
          <>
            <h3>PortableSuctionUnit:</h3>
            <h4>{generally.medical.portableSuctionUnit}</h4>
          </>
        ) : null}

        {generally.medical.manualSuctionUnit ? (
          <>
            <h3>ManualSuctionUnit:</h3>
            <h4>{generally.medical.manualSuctionUnit}</h4>
          </>
        ) : null}

        {generally.medical.spineBoard ? (
          <>
            <h3>SpineBoard:</h3>
            <h4>{generally.medical.spineBoard}</h4>
          </>
        ) : null}

        {generally.medical.headImmobilizer ? (
          <>
            <h3>HeadImmobilizer:</h3>
            <h4>{generally.medical.headImmobilizer}</h4>
          </>
        ) : null}

        {generally.medical.scoopStretcher ? (
          <>
            <h3>ScoopStretcher:</h3>
            <h4>{generally.medical.scoopStretcher}</h4>
          </>
        ) : null}

        {generally.medical.vacuumMattress ? (
          <>
            <h3>VacuumMattress:</h3>
            <h4>{generally.medical.vacuumMattress}</h4>
          </>
        ) : null}

        {generally.medical.glucometer ? (
          <>
            <h3>Glucometer:</h3>
            <h4>{generally.medical.glucometer}</h4>
          </>
        ) : null}

        {generally.medical.portableVentilator ? (
          <>
            <h3>PortableVentilator:</h3>
            <h4>{generally.medical.portableVentilator}</h4>
          </>
        ) : null}

        {generally.medical.portablePatientMonitor ? (
          <>
            <h3>PortablePatientMonitor:</h3>
            <h4>{generally.medical.portablePatientMonitor}</h4>
          </>
        ) : null}

        {generally.medical.suctionAspiration ? (
          <>
            <h3>SuctionAspiration:</h3>
            <h4>{generally.medical.suctionAspiration}</h4>
          </>
        ) : null}

        <h2 className={styles.total}>Total Price :{generally.totalPrice}</h2>
      </div>
    </div>
  );
};

export default SideBar;
