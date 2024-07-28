import React from 'react'
import ContactPage from './page'
import { getDictionary } from '@/services/dictionaries';

const LayoutContact = async({children,params}) => {
    const { lang } = params;

  const dict = await getDictionary(lang);
    
  return (
    <><ContactPage dict={dict}/></>
  )
}

export default LayoutContact