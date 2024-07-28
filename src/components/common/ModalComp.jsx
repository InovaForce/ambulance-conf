import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '@/styles/components/configuration/modalComp.module.scss';

function ModalComp(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modulhg"
    >
      <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              How am I use this tool?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{overflow: 'scroll-y'}}>
            <div>
              <h2 className={styles.title}>Ambulance Configuration Tool</h2>
              <h3><u>Overview:</u></h3>
              <p>This tool provides a user-friendly interface for customizing and configuring ambulances according to specific medical and operational needs. Users can choose from various options to equip the ambulance with the necessary medical equipment and features.</p>
              <h3><u>How to Use:</u></h3>
              <h4>1. Choose Vehicle Type:</h4>
              <p>Select from different types of ambulance vehicles, such as van type or box type. This choice determines the base model of your ambulance.</p>
              <h4>2. Select Ambulance Type:</h4>
              <p>Choose the required type of ambulance service—Basic Life Support, Advanced Life Support, or Intensive Care. Depending on the choice, additional options for pediatric or neonatal configurations are available.</p>
              <h4>3. Add Extra Features:</h4>
              <p>Add additional features to the ambulance, such as defibrillators, monitors for vital signs, medication and injection sets, portable ventilators, and suction units. Each feature can be added or removed with a simple click.</p>
              <h4>4. Finalize Configuration:</h4>
              <p>Review your choices, which are dynamically updated and displayed as you select different options. Adjust your selections as necessary before final submission.</p>
              <h4>5. Submit or Contact:</h4>
              <p>Once the configuration is complete, you will receive a detailed summary and cost estimate. Alternatively, use the contact option to discuss further customization or advice with a specialist.</p>
              <h3><u>Key Features:</u></h3>
              <h4>Interactive Selections:</h4>
              <p>Clickable buttons for each option provide intuitive setup and customization.</p>
              <h4>Dynamic Updates:</h4>
              <p>The interface updates in real-time as you make selections, reflecting the current configuration of the ambulance.</p>
              <h4>Comprehensive Customization:</h4>
              <p>Customize the ambulance from the base model to advanced medical equipment to meet specific needs.</p>
              <p>This tool is designed to simplify the process of ambulance customization, ensuring that all necessary equipment and configurations are considered, helping medical service providers effectively prepare their vehicles.</p>
              <div style={{width: '100%',display: 'flex',justifyContent: 'center'}}>
              <Button style={{width: '100%',margin:"auto"}} className='text-center outline-danger' onClick={props.onHide}>Close</Button>
              </div>
              
            </div>
           
          </Modal.Body>
    
    </Modal>
  );
}

export default ModalComp;

