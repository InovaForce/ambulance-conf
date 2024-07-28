
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import styles from '@/styles/components/homeComp.module.scss';
import ModalComp from './common/ModalComp';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

function Home () {
    const [modalShow, setModalShow] = useState(false);
    const btn1 = useRef(null);
    const btn2 = useRef(null);
    const router = useRouter();

   const handleStart = () => {
    router.push('/configuration');
  };

    return (
    <div className={styles.container}>
      <div className={styles.Button}>       
        <ModalComp
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
          <Button
          ref={btn1}
          className={`${styles.helpButton1} ${styles.helpButton} btn-primary`}
          onClick={() => setModalShow(true)}
        >
          Help
        </Button>
        <Button
          ref={btn2}
          className={`${styles.helpButton2} ${styles.helpButton} btn-primary`}
          onClick={() => setModalShow(true)}
        >
          Help
      </Button>

     </div>

      </div>  
    );
  }
  export default Home;