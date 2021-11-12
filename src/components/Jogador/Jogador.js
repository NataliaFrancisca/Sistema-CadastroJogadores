import React from "react";

import './Jogador.css'

const Jogador = (props) => {
    console.log(props.dataJogador)

    const {nome, sobrenome, idade, nivel, telefone} = props.dataJogador
    return(
        <>
            <div className="container-jogador">
               <ul>
                    <li>  
                        <label>Nome:</label> 
                        <p>{nome} {sobrenome} </p>
                    </li>
    
                    <li>  
                        <label>Idade:</label>
                        <p>{idade}</p>
                    </li>

                    <li>  
                        <label>Telefone:</label>
                        <p>{telefone}</p>
                    </li>

                    <li>  
                        <label>Nível:</label>
 
                        <div className={`nivel-bar level-${nivel}`}>
                            <div className="circle">1</div>
                            <div className="circle">2</div>
                            <div className="circle">3</div>
                            <div className="circle">4</div>
                            <div className="circle">5</div>
                        </div>
                    </li>
               </ul>

            </div>
            
        </>
    )
}

export default Jogador;