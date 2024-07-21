import React from 'react'
const HomeComp = () => {
  return (
    <div>
      <div className="text-3xl font-bold underline">
          <h2>Ambulance Configuration Tool</h2>
          <h3>Overview:</h3>
          This tool provides a user-friendly interface for customizing and configuring ambulances according to specific medical and operational needs. Users can choose from various options to equip the ambulance with the necessary medical equipment and features.
          <h3>How to Use:</h3>
          1. <h4>Choose Vehicle Type:</h4>
            - Select from different types of ambulance vehicles, such as van type or box type. This choice determines the base model of your ambulance.
          2. <h4>Select Ambulance Type:</h4>
            - Choose the required type of ambulance service—Basic Life Support, Advanced Life Support, or Intensive Care. Depending on the choice, additional options for pediatric or neonatal configurations are available.
          3. <h4>Add Extra Features:</h4>
            - Add additional features to the ambulance, such as defibrillators, monitors for vital signs, medication and injection sets, portable ventilators, and suction units. Each feature can be added or removed with a simple click.
          4. <h4>Finalize Configuration:</h4>
            - Review your choices, which are dynamically updated and displayed as you select different options. Adjust your selections as necessary before final submission.
          5. <h4>Submit or Contact:</h4>
            - Once the configuration is complete, you will receive a detailed summary and cost estimate. Alternatively, use the contact option to discuss further customization or advice with a specialist.
          <h2>Key Features:</h2>
          - <h4>Interactive Selections:</h4> Clickable buttons for each option provide intuitive setup and customization.
          - <h4>Dynamic Updates:</h4> The interface updates in real-time as you make selections, reflecting the current configuration of the ambulance.
          - <h4>Comprehensive Customization:</h4> Customize the ambulance from the base model to advanced medical equipment to meet specific needs.
          This tool is designed to simplify the process of ambulance customization, ensuring that all necessary equipment and configurations are considered, helping medical service providers effectively prepare their vehicles.
      </div>
    </div>
  )
}
export default HomeComp