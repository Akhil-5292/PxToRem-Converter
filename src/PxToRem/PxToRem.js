// import "./styles.css";
import React, { useState } from 'react'
import style from './PxToRem.module.css'
export default function PxToRem() {
  const convertToRem = (px) => px / 16;
  const convertToPx = (rem)=>rem*16
  const [px,setPx]=useState(16)
  const[rem,setRem]=useState(convertToRem(px))

  const handleChange=(e)=>{
    setPx(e.target.value)
    setRem(convertToRem(e.target.value))
  }
 const handleRem=(e)=>{
   setRem(e.target.value)
   setPx(convertToPx(e.target.value))
 }
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
     <input className={style.input} value={px} onChange={handleChange}/>px 
     <input className={style.input} value={rem} onChange={handleRem}/>rem
    </div>
    </div>
  );
}
