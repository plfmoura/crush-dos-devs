'use client'

import Oibb from '@/components/Oibb';
import styles from './page.module.css'
import { useState } from 'react';
import Vcker from '@/components/Vcker';

export default function Home() {
  const [initial, setInitial] = useState(true);
  
  const handleGataDeuPlay = () => {
    setInitial(false);
  }

  return (
    <main className={styles.main}>
      <Oibb start={() => setInitial(false)} controller={!initial} />
      {
        !initial && <Vcker kero={() => handleGataDeuPlay()} />
      }
    </main>
  )
}
