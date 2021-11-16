import React, {useState} from "react";

import Form from "../UI/Form/Form";
import Jogador from "../Jogador/Jogador"
import './Jogadores.css'

const Jogadores = () => {

    const userTeste = {
        id: 1,
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

    const removePlayer = (player) => {
        console.log('função deletar baby')

        let players = listaJogadores;
        setListaJogadores(players.filter(item => item.id !== player.id))
    }

    return(
        <div className="container-jogadores">
           
            <Form sendFunction={sendDate} />

            {listaJogadores.map((item, index) => 
                <Jogador 
                    key={index} 
                    dataJogador={item} 
                    removePlayer={() => removePlayer(item)}
                />
            )}

        </div>
    )
}

export default Jogadores;