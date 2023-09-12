'use client'

import React, { useEffect, useState } from 'react'
import styles from './oibb.module.css'

const CHAVECO = [
  "Se a terra é redonda... Por que não rola algo entre nós?",
  "Você caiu do céu bb? sua cara ta toda quebrada bb",
  "Você trabalha na obra?! e esse reboco ai no teu rosto bb",
  "Não sou uma camera, mas meu foco é vose bb",
  "Tenho um xampu pra tirar teu ex da tua cabeça! euserve bb",
  "Gata teu pai é astronauta?! tu parece um ET sua linda",
  "Vose é piolho?! pq tu nau sai da minha cabessa",
  "Gata você com essi pandeiro e eu com meu berimbau é capoeira a noite intera"
]
export default function Oibb({start, controller}) {
  const [chaveco, setChaveco] = useState(CHAVECO[0]);

  useEffect(() => {
    let interval = setTimeout(() => {
    let i = Math.floor(Math.random() * CHAVECO.length);
      setChaveco(CHAVECO[i])
    }, [5000]);

    return () => {
      clearInterval(interval);
    };
  }, [chaveco]);
  
  return (
    <article className={styles.oibb_container}>
      <span className={styles.frase_chaveco}>{ chaveco }</span>
      <img className={styles.oi_bb_image} src="https://i.imgur.com/tbPTuLu.png" alt="oi bb mim dá uma chanci" />
      {!controller && <button onClick={start} className={styles.play_btn}>Aperta aqui BB</button>}
    </article>
  )
}
