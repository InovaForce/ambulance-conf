"use client"
import React, { useEffect } from 'react'

const Footer = () => {
    useEffect(() => {
        const copyrightDate = document.querySelector(".copyright-date");
        let date = new Date();
        copyrightDate.innerText = date.getFullYear();
      }, []);
  return (
    <footer className="footer">
      <span className="copyright">
         &copy;
        <span className="copyright-date"></span>
        <span className="copyright-link">
           Made by InovaForce. All rights reserved.
        </span>
      </span>
    </footer>
  )
}

export default Footer
