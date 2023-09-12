import Lottie from 'lottie-react'
import React, { useState } from 'react'
import lover from './lover.json'

export default function Lover() {
  const [animation, setAnimation] = useState(true);
  return (

    <>
      {
        animation &&
        <Lottie
          animationData={lover}
          loop={true}
          style={{ width: 150}}
        />
      }
    </>
  )
}
