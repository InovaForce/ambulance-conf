import React from 'react'

const SelectButton = ({key,value,option,price,handleSelect}) => {
  return (
    <button
    key={key}
    value={value}
    onClick={()=>handleSelect(option)}
    >{option}{" - "}{price}</button>
  )
}

export default SelectButton