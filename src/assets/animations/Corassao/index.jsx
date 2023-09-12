import Lottie from 'lottie-react'
import React, { useState } from 'react'
import corassao from './heart.json'

export default function Corassao() {
  const [animation, setAnimation] = useState(true);
  return (

    <>
      {
        animation &&
        <Lottie
          animationData={corassao}
          loop={true}
          style={{ width: 1000 }}
          onLoopComplete={() => setAnimation(false)}
        />
      }
    </>
  )
}
