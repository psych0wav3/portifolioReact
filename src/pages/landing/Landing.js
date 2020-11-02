import React from 'react'
import landing from '../../assets/landing.png'
import './landing.css'

const Landing = () => {
    return(
        <div className="container">
            <div className="text-content">
                <p>Bem Vindo!</p>
                <p>Obrigado por se interessar pelo meu trabalho</p>
                <a href="/main" className="p">Entrar</a>
            </div>
            <img src={landing} alt="Landing" />
        </div>
    )
}

export default Landing