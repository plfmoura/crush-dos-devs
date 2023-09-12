'use client'

import Oibb from '@/components/Oibb';
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import Vcker from '@/components/Vcker';

import faro_initial from '../../public/initial.jpg'
import faro_not from '../../public/not.jpg'
import faro_final from '../../public/final.jpg'
import faro_lonely from '../../public/lonely.jpg'
import faro_sad from '../../public/sad.png'

export default function Home() {
  const [initial, setInitial] = useState(true);
  const [count, setCount] = useState(0);
  const [bg_image, setBg_image] = useState(faro_initial);
  
  const handleGataDeuPlay = () => {
    setInitial(false);
  }

  useEffect(() => {
    if(count === 1){
      setBg_image(faro_not);
    }else if(count === 2){
      setBg_image(faro_sad);
    }else if(count === 3){
      setBg_image(faro_lonely);
    }else if(count === 4){
      setBg_image(faro_final);
    } else {
      null;
    }
  }, [count])

  return (
    <main className={styles.main}>
      <Oibb start={() => setInitial(false)} controller={!initial} bg_image={bg_image}/>
      {
        !initial && <Vcker count={count} setCount={setCount} kero={() => handleGataDeuPlay()} />
      }
    </main>
  )
}
