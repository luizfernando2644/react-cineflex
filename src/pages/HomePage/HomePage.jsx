import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Filme from "./Filme"

export default function HomePage() {
    const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const requisicao = axios.get(url);
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        requisicao.then(res => {
            setFilmes(res.data);
        });

        requisicao.catch(err => {
            console.log(err.res.data);
        })
    }, []);

    if (filmes.length === 0) return <div>Carregando...</div>

    return (
        <PageContainer>
            <TituloFilme><h1>Em Cartaz</h1></TituloFilme>
            <MoviesContainer>
                {filmes.map((filme) => <Filme key={filme.id} filme={filme}/>)}
            </MoviesContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212226;
`

const TituloFilme = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
    }
`

const MoviesContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`