import React from 'react'
import styles from '@/styles/components/homeComp.module.scss'
const HomeComp = () => {
  return (
    <div className={styles.container}>
          <h2 className={styles.title}>Ambulance Configuration Tool</h2>
          <h3><u>Overview:</u></h3>
          This tool provides a user-friendly interface for customizing and configuring ambulances according to specific medical and operational needs. Users can choose from various options to equip the ambulance with the necessary medical equipment and features.
          <h3><u>How to Use:</u></h3>
          <h4>1. Choose Vehicle Type:</h4>
            Select from different types of ambulance vehicles, such as van type or box type. This choice determines the base model of your ambulance.
          <h4>2. Select Ambulance Type:</h4>
            Choose the required type of ambulance service—Basic Life Support, Advanced Life Support, or Intensive Care. Depending on the choice, additional options for pediatric or neonatal configurations are available.
          <h4>3. Add Extra Features:</h4>
            Add additional features to the ambulance, such as defibrillators, monitors for vital signs, medication and injection sets, portable ventilators, and suction units. Each feature can be added or removed with a simple click.
          <h4>4. Finalize Configuration:</h4>
            Review your choices, which are dynamically updated and displayed as you select different options. Adjust your selections as necessary before final submission.
          <h4>5. Submit or Contact:</h4>
            Once the configuration is complete, you will receive a detailed summary and cost estimate. Alternatively, use the contact option to discuss further customization or advice with a specialist.
          <h3><u>Key Features:</u></h3>
          <h4>Interactive Selections:</h4> Clickable buttons for each option provide intuitive setup and customization.
          <h4>Dynamic Updates:</h4> The interface updates in real-time as you make selections, reflecting the current configuration of the ambulance.
          <h4>Comprehensive Customization:</h4> Customize the ambulance from the base model to advanced medical equipment to meet specific needs.
          This tool is designed to simplify the process of ambulance customization, ensuring that all necessary equipment and configurations are considered, helping medical service providers effectively prepare their vehicles.
      
    </div>
  )
}

export default HomeComp

