'use client'

import React, { useState } from 'react'
import styles from './vcker.module.css'
import { useRouter } from 'next/navigation';

export default function Vcker({ count, setCount }) {
  const router = useRouter();

  const [offX, setOffX] = useState(0);
  const [offY, setOffY] = useState(0);

  const handleClick = (e) => {
    setCount(count + 1);
    console.log(count)
    if(count === 0){
      setOffX(-50);
      setOffY(-400);
    }else if(count === 1){
      setOffX(100);
      setOffY(100);
    }else if(count === 2){
      setOffX(200);
      setOffY(-500);
    }else {
      setOffX(0);
      setOffY(0);
    }
  }

  const handleLindaKer = () => {
    setCount(4);
    setTimeout(() => {
      router.push('/elaker', { scroll: false })
    }, [1000])
  }

  return (
    <div className={styles.btns_container}>
      { count !== 4 && <button style={
        { background: 'red', 
        position: 'relative', 
        zIndex: 899, 
        left: offX, 
        top: offY,
        transform: count === 1 ? "scale(0.6)" : count === 2 ? "scale(0.4)" : count === 3 && "scale(0.7)"  
        }} onClick={(e) => handleClick('nn kero')}>Nem rola</button>}
      <button style={
        { background: 'green', 
        position: 'relative', 
        zIndex: 999, 
        padding: count == 4 && "2rem 4rem", 
        fontSize: count == 4 && "2rem", 
        fontWeight: count == 4 && "bold" 
        }} onClick={() => handleLindaKer()}>Bora vida</button>
    </div>
  )
}
