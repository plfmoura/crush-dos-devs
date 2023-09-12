'use client'

import Corassao from '@/assets/animations/Corassao';
import Lover from '@/assets/animations/Lover';
import React, { useState } from 'react'

export default function Elaker() {
    const [animation, setAnimation] = useState(false);

    return (
        <div style={{ background: "#333", color: "#fff", height: '100vh', textAlign: 'center', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Lover />
            <Corassao />
            <h1>Ai sim bb</h1>
            <h2>Preencha seus dados para aguardar na fila</h2>
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <label htmlFor="">Bota seu Nome aqui BB</label>
                <input type="text" />
            </div>
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <label htmlFor="">Qual tua idade? sua linda</label>
                <input type="text" />
            </div>
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-evenly' }}>
                <label htmlFor="">Deixa seu ZapZap</label>
                <input type="text" />
            </div>
        </div>
    )
}
