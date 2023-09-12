'use client'

import React, { useState } from 'react'
import styles from './vcker.module.css'
import { useRouter } from 'next/navigation';

export default function Vcker() {
  const router = useRouter();

  const [offX, setOffX] = useState(0);
  const [offY, setOffY] = useState(0);

  const handleClick = (e) => {
    const numeroAleatorioX = Math.random() * 2 - 1;
    const numeroNoIntervalo = numeroAleatorioX * 100;
    const numeroAleatorioY = Math.random() * 701 - 500

    setOffX(numeroNoIntervalo);
    setOffY(numeroAleatorioY);
  }

  const handleLindaKer = () => {
    router.push('/elaker', { scroll: false })
  }

  return (
    <div className={styles.btns_container}>
      <button style={{ background: 'red', position: 'relative', zIndex: 899, left: offX, top: offY }} onClick={(e) => handleClick('nn kero')}>Nem rola</button>
      <button style={{ background: 'green', position: 'relative', zIndex: 999 }} onClick={() => handleLindaKer()}>Rola tudo</button>
    </div>
  )
}
