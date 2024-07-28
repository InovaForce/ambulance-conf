
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
//import  "@/styles/components/homeComp.scss"
import ModalComp from './common/ModalComp';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import "../styles/deneme.scss";
function Home () {
    const [modalShow, setModalShow] = useState(false);
    const btn1 = useRef(null);
    const btn2 = useRef(null);
    const router = useRouter();

   const handleStart = () => {
    router.push('/configuration');
  };

 

    return (
    <div >
          
        <ModalComp
          show={modalShow}
          onHide={() => setModalShow(false)}
    
        />
         <div className="helpButton">  
          <Button
          ref={btn1}
          className="btn outline-warning"
          onClick={() => setModalShow(true)}
        >
          Help
        </Button>
        <Button
          ref={btn2}
          className=""
          onClick={handleStart}
        >
          Start
      </Button>

     </div>

      </div>  
    );
  }
  export default Home;