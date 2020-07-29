import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000'
    }

    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);

    function setValor(chave, valor){
        setValores({
            ...valores,
            [chave]: valor
        })
    }

    function handlerChange(evento){
        setValor(
            evento.target.getAttribute('name'), 
            evento.target.value
        );
    };

    return (
        <PageDefault>
            <h1> Cadastro de Categoria:</h1>
            
            <form onSubmit={
                function handleSubmit(evento){
                    evento.preventDefault();
                    setCategorias([
                        ...categorias,
                        valores
                    ]);
                    setValores(valoresIniciais);
                }
            }>

                <FormField
                    label="Nome da Categoria:" 
                    name="nome"
                    type="text"
                    value={valores.nome}
                    onChange={handlerChange}
                />

                <FormField
                    label="Descrição da Categoria:" 
                    name="descricao"
                    type="textarea"
                    value={valores.descricao}
                    onChange={handlerChange}
                />

                <FormField
                    label="Cor da Categoria:" 
                    name="cor"
                    type="color"
                    value={valores.cor}
                    onChange={handlerChange}
                />
                
                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria.nome}${indice}`}>
                            {categoria.nome} - {categoria.descricao} - {categoria.cor}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;