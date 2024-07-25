"use client";
import { useEffect, useState } from "react";
import { getAllInformation } from "@/services/api";
import Image from "next/image";
import SelectButton from "../select-button";
import Label from "../label";

const SpineBoard = ({ setActive, generally, setGenerally }) => {
  const [selectedBoard, setSelectedBoard] = useState("");
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

  const handleNext = () => {
    setActive((prev) => prev + 1);
  };

  const handleBack = () => {
    setActive((prev) => prev - 1);
  };

  if (!vehicleData) {
    return <div>Yükleniyor...</div>;
  }

  const handleSelect = (board) => {
    // Yeni seçilen board'ın fiyatını al
    let newPrice = 0;
    switch (board) {
      case "Ferno":
        newPrice = parseFloat(
          vehicleData[15].spine_board[0].price.replace("$", "")
        );
        break;
      case "Laerdal":
        newPrice = parseFloat(
          vehicleData[15].spine_board[1].price.replace("$", "")
        );
        break;
      case "Spineboard":
        newPrice = parseFloat(
          vehicleData[15].spine_board[2].price.replace("$", "")
        );
        break;
      default:
        newPrice = 0;
    }

    // Eğer bir board daha önce seçilmişse, eski board'ın fiyatını çıkart
    let oldPrice = 0;
    if (
      generally.medical.spineBoard &&
      generally.medical.spineBoard !== board
    ) {
      switch (generally.medical.spineBoard) {
        case "Ferno":
          oldPrice = parseFloat(
            vehicleData[15].spine_board[0].price.replace("$", "")
          );
          break;
        case "Laerdal":
          oldPrice = parseFloat(
            vehicleData[15].spine_board[1].price.replace("$", "")
          );
          break;
        case "Spineboard":
          oldPrice = parseFloat(
            vehicleData[15].spine_board[2].price.replace("$", "")
          );
          break;
        default:
          oldPrice = 0;
      }
    }

    // `selectedBoard`'ı güncelle
    setSelectedBoard(board);
    setPrice(newPrice);

    // `totalPrice` hesapla ve güncelle
    setGenerally((prev) => ({
      ...prev,
      totalPrice: prev.totalPrice - oldPrice + newPrice,
      medical: {
        ...prev.medical,
        spineBoard: board,
      },
    }));
  };

  return (
    <div>
      <Label title="Spine Board Selector"/>
      <Image
        width={300}
        height={250}
        src={vehicleData[15].image_url}
        alt={vehicleData[15].spine_board[0].name}
        style={{ objectFit: "cover",display: "block", margin: "0 auto" }}
      />
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" , justifyContent: "space-evenly"}}>
        <SelectButton
          key={vehicleData[15].spine_board[0].name}
          value={vehicleData[15].spine_board[0].price}
          handleSelect={handleSelect}
          option={vehicleData[15].spine_board[0].name}
          price={vehicleData[15].spine_board[0].price}
        />
        <SelectButton
          key={vehicleData[15].spine_board[1].name}
          value={vehicleData[15].spine_board[1].price}
          handleSelect={handleSelect}
          option={vehicleData[15].spine_board[1].name}
          price={vehicleData[15].spine_board[1].price}
        />
        <SelectButton
          key={vehicleData[15].spine_board[2].name}
          value={vehicleData[15].spine_board[2].price}
          handleSelect={handleSelect}
          option={vehicleData[15].spine_board[2].name}
          price={vehicleData[15].spine_board[2].price}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
            <button className="back" onClick={handleBack}> Back </button>
            <button className="next" onClick={handleNext}> Next </button>                
          </div>  
    </div>
  );
};

export default SpineBoard;
