"use client";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "@/styles/components/modalComp.scss";
import ModalComp from "../modalComp";
import Image from "next/image";
import { useRouter } from "next/navigation";

function ModalButton({ dict }) {
  const [modalShow, setModalShow] = useState(false);
  const btn1 = useRef(null);
  const btn2 = useRef(null);
  const router=useRouter();

  const handleStart = () => {
  router.push('en/configuration')
  };

  return (
    <div className="modalDiv">
      <ModalComp
        dict={dict}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="helpButton">
        <Button
          ref={btn1}
          //  className={`${styles.helpButton1} ${styles.helpButton} btn-primary`}
          onClick={() => setModalShow(true)}
        >
          Help
        </Button>

        <Button
          ref={btn2}
          //   className={`${styles.helpButton2} ${styles.helpButton} btn-primary`}
          onClick={handleStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default ModalButton;
