<<<<<<< HEAD
"use client";
import React, { useEffect, useState, useRef } from "react";
import { Table, Button } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ContactPage = () => {
  const [ambulanceData, setAmbulanceData] = useState(null);
  const componentRef = useRef();

  useEffect(() => {
    const savedData = localStorage.getItem("ambulanceData");
    if (savedData) {
      setAmbulanceData(JSON.parse(savedData));
    }
  }, []);

  const renderTable = (data) => {
    return (
      <Table striped bordered hover className="responsiveTable mb-3">
        <thead>
          <tr>
            <th className="text-center">Equipment</th>
            <th className="text-center">Brand</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {Array.isArray(value) ? value.join(", ") : value.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const handleDownloadPdf = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      scrollY: -window.scrollY,
      useCORS: true,
    });
    const data = canvas.toDataURL("image/png");

    // Create PDF
    const pdf = new jsPDF({
      orientation: "portrait", // or 'landscape'
      unit: "mm",
      format: "a4", // A4 size
    });

    // Get canvas dimensions
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Calculate image dimensions to fit the PDF page
    const imgWidth = pdfWidth;
    const imgHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    // Add image to PDF
    pdf.addImage(data, "WEBP", 0, 0, imgWidth , imgHeight );
    pdf.save("ambulance_data.pdf");
  };

  if (!ambulanceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="contact-page">
      <div ref={componentRef} style={{ padding: "20px", width: "100%" }}>
        <h1>Your Ambulance</h1>
        <h4>Pyschical Equipment</h4>
        {renderTable(ambulanceData.pyschical)}
        <h4>Medical Equipment</h4>
        {renderTable(ambulanceData.medical)}
        <h4>Total Price: {ambulanceData.totalPrice}$</h4>
      </div>
      <Button onClick={handleDownloadPdf}>Download as PDF</Button>
    </div>
  );
};

export default ContactPage;
=======
import FirmContactForm from '@/components/contact/contactForm'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <FirmContactForm />
    </div>
  )
}

export default Contact
>>>>>>> 59d1e9eb8093d65c90c073dba29c29e4d1ccbfe8
