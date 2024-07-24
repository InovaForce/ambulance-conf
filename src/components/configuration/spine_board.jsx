"use client";
import { useEffect, useState } from 'react';
import { getAllInformation } from '@/services/api';
import Image from 'next/image';


const SpineBoard = ({setActive}) => {
    const [selectedBoard, setSelectedBoard] = useState('Ferno');
    const [price, setPrice] = useState(100);
    const [vehicleData, setVehicleData] = useState(null);

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

    const handleNext= () =>{
        setActive((prev) => prev + 1);
    }

    const handleBack= () =>{
        setActive((prev) => prev - 1);
    }
    if (!vehicleData) {
        return <div>Yükleniyor...</div>;
    }
    const handleSelect = (board) => {
        setSelectedBoard(board);
        switch (board) {
            case 'Ferno':
                setPrice(100);
                break;
            case 'Laerdal':
                setPrice(200);
                break;
            case 'Spineboard':
                setPrice(300);
                break;
            default:
                setPrice(0);
        }
    };

    return (
        <div>
            <h1>Spine Board Selector</h1>
            <Image
                    width={300}
                    height={200} 
                        src={vehicleData[15].image_url}
                        alt={vehicleData} 
                        style={{ objectFit: 'cover', borderRadius: '10px' }} 
                    />
            <div>
                <button key={vehicleData[15].spine_board[0].name} 
                        value={vehicleData[15].spine_board[0].price} 
                        onClick={() => handleSelect('Ferno')}>{vehicleData[15].spine_board[0].name}  - {vehicleData[15].spine_board[0].price}</button>
                <button key={vehicleData[15].spine_board[1].name}  
                        value={vehicleData[15].spine_board[1].price}
                        onClick={() => handleSelect('Laerdal')}>{vehicleData[15].spine_board[1].name}  - {vehicleData[15].spine_board[1].price}</button>
                <button key={vehicleData[15].spine_board[2].name}  
                        value={vehicleData[15].spine_board[2].price}
                        onClick={() => handleSelect('Spineboard')}>{vehicleData[15].spine_board[2].name}  - {vehicleData[15].spine_board[2].price}</button>
            </div>
            <div>
                <h2>Selected Board: {selectedBoard}</h2>
                <h2>Price: ${price}</h2>
            </div>
            <button onClick={handleBack}> Back </button>
            <button onClick={handleNext}> Next </button>
        </div>
    );
};

export default SpineBoard;
