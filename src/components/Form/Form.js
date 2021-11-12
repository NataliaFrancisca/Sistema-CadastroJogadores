import React , {useState} from "react";
import './Form.css'
        
const Form = (props) => {

    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [idade, setIdade] = useState(0)
    const [nivel, setNivel] = useState(0)
    const [telefone, setTelefone] = useState("")

    const teste = (event) => {
        event.preventDefault();
    
   
   
        const jogador = {
            nome: nome,
            sobrenome: sobrenome,
            idade: idade,
            nivel: nivel,
            telefone: telefone
        }

        props.sendFunction(jogador)

        setNome("");
        setSobrenome("");
        setIdade("");
        setNivel("");
        setTelefone("");

    }

    return(
        <div className="AdicionarJogador" >
            <h2>Adicionar Jogador </h2>
            <form type='post' onSubmit={teste}>
                <div className="Linha">
                    <div className="Coluna">
                        <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                                <input 
                                id="nome" 
                                value={nome}
                                name="nome" 
                                type="text"
                                onChange={event => setNome(event.target.value)}
                                />
                        </div>
                    </div>

                    <div className="Coluna">
                        <div className="form-group">
                            <label htmlFor="sobrenome">Sobrenome</label>
                                <input 
                                id="sobrenome" 
                                value={sobrenome}
                                name="sobrenome" 
                                type="text"
                                onChange={event => setSobrenome(event.target.value)}
                                />
                        </div>
                    </div>
                </div>


                <div className="Linha">
                    <div className="Coluna">
                        <div className="form-group">
                            <label htmlFor="idade">Idade</label>
                                <input 
                                id="idade" 
                                value={idade}
                                name="idade" 
                                type="number"
                                onChange={event => setIdade(event.target.value)}
                                />
                        </div>
                    </div>

                    <div className="Coluna">
                        <div className="form-group">
                            <label htmlFor="nivel">Nível</label>
                                <input 
                                id="nivel" 
                                value={nivel}
                                name="nivel" 
                                type="number"
                                onChange={event => setNivel(event.target.value)}
                                />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="telefone">Telefone</label>
                        <input 
                        id="telefone" 
                        value={telefone}
                        name="telefone" 
                        type="text"
                        onChange={event => setTelefone(event.target.value)}
                        />
                </div>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
        
export default Form;