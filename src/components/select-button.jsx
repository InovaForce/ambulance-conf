import React from 'react'
import styles from "@/styles/components/configuration/select-button.module.scss";
const SelectButton = ({key,value,option,price,handleSelect}) => {
  return (
    <button
    className={styles.selectButton}
    key={key}
    value={value}
    onClick={()=>handleSelect(option)}
    >{option}{" - "}{price}</button>
  )
}

export default SelectButton