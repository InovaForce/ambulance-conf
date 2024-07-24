import React from 'react'
import styles from '@/styles/components/label.module.scss'

const Label = ({title}) => {
  return (
    <div className={styles.label}>
         <h1 className={styles.title}>{ title}</h1>      
    </div>
  )
}

export default Label
