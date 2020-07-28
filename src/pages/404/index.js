import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import Button from '../../components/Button';

function Pagina404(){
    return (
        <PageDefault>
            <>
            <h1>404 - Página não encontrada</h1>
            <p>Já que está por aqui que tal adquirir mais conhecimentos? Vídeos recomendados durante a semana de Imersão React da Alura.</p>
            </>
            <div style={{marginLeft:"-5%", marginRight:"-5%", marginBottom:"5%"}}> 
                <Carousel
                    ignoreFirstVideo
                    category={dadosIniciais.categorias[3]}
                />
            </div>


            <Button as={Link} className="ButtonLink" to="/">
                Voltar para Home
            </Button>
        </PageDefault>
    )
}

export default Pagina404;