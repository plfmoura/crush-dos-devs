'use client'

import React, { useState } from 'react'
import styles from './vcker.module.css'
import { useRouter } from 'next/navigation';

export default function Vcker({ count, setCount }) {
  const router = useRouter();

  const [offX, setOffX] = useState(0);
  const [offY, setOffY] = useState(0);

  const handleClick = (e) => {
    const numeroAleatorioX = Math.random() * 2 - 1;
    const numeroNoIntervalo = numeroAleatorioX * 100;
    const numeroAleatorioY = Math.random() * 701 - 500

    setOffX(numeroNoIntervalo);
    setOffY(numeroAleatorioY);
    setCount(count + 1);
  }

  const handleLindaKer = () => {
    setCount(4);
    setTimeout(() => {
      router.push('/elaker', { scroll: false })
    }, [1000])
  }

  return (
    <div className={styles.btns_container}>
      { count !== 4 && <button style={{ background: 'red', position: 'relative', zIndex: 899, left: offX, top: offY }} onClick={(e) => handleClick('nn kero')}>Nem rola</button>}
      <button style={{ background: 'green', position: 'relative', zIndex: 999, padding: count == 4 && "2rem 4rem", fontSize: count == 4 && "2rem", fontWeight: count == 4 && "bold" }} onClick={() => handleLindaKer()}>Rola tudo</button>
    </div>
  )
}
