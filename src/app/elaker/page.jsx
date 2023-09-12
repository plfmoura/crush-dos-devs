'use client'

import Corassao from '@/assets/animations/Corassao';
import Lover from '@/assets/animations/Lover';
import React, { useState } from 'react'
import styles from './elaker.module.css'

export default function Elaker() {
    const [animation, setAnimation] = useState(false);
    const [end, setEnd] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Enviado');
        setEnd(true);
    }

    return (
        <main className={styles.elaker_container}>
            <Lover />
            <Corassao />
            {
                end ?
                    <>
                        <h2>Com amor, #SEUCRUSH</h2>
                        <h5>Leia a BULA</h5>
                        <h6>BULA: Todos os erros de português são intencionais!!!</h6>
                    </>
                    :
                    <>
                        <h1>Aí sim bb</h1>
                        <h2>Preencha seus dados, né vida!</h2>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <label htmlFor="">Bota seu Nome aqui BB</label>
                                <input type="text" placeholder='AMOR DA MINHA VIDA'/>
                            </div>
                            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <label htmlFor="">ZAP pra confirmação desse evento</label>
                                <input type="text" placeholder='(21)9SEUNUMERO-VIDA'/>
                            </div>
                            <button type="submit">Enviar para Pedro</button>
                        </form>
                    </>
            }
        </main>
    )
}
