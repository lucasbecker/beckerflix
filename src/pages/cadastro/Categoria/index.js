import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000000',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handlerChange(evento) {
    setValor(
      evento.target.getAttribute('name'),
      evento.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://beckerflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1> Cadastro de Categoria:</h1>

      <form onSubmit={
                function handleSubmit(evento) {
                  evento.preventDefault();
                  setCategorias([
                    ...categorias,
                    valores,
                  ]);
                  setValores(valoresIniciais);
                }
            }
      >

        <FormField
          label="Nome da Categoria"
          name="nome"
          type="text"
          value={valores.nome}
          onChange={handlerChange}
        />

        <FormField
          label="Descrição da Categoria"
          name="descricao"
          type="textarea"
          value={valores.descricao}
          onChange={handlerChange}
        />

        <FormField
          label="Cor"
          name="cor"
          type="color"
          value={valores.cor}
          onChange={handlerChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
            {' '}
            -
            {categoria.descricao}
            {' '}
            -
            {categoria.cor}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
