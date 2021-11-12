import React, {useState} from "react";

import Form from "../Form/Form";
import Jogador from "../Jogador/Jogador"
import './Jogadores.css'

const Jogadores = () => {

    const userTeste = {
        nome: "Teste",
        sobrenome: "Minitest",
        idade: 12,
        nivel: 5,
        telefone: "1111111"
    }

    const [listaJogadores, setListaJogadores] = useState([userTeste]);

    const sendDate = (tes) => {
        setListaJogadores(usuariosAtuais => [...usuariosAtuais, tes])
    }

    return(
        <div className="container-jogadores">
           
            <Form sendFunction={sendDate} />

            {listaJogadores.map((item, index) => 
                <Jogador key={index} dataJogador={item}/>
            )}

        </div>
    )
}

export default Jogadores;