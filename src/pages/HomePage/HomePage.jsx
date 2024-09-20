import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react";
import Filme from "./Filme"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function HomePage() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        requisicao.then(res => {
            setFilmes(res.data);
        });
        requisicao.catch(err => {
            console.log(err.response.data);
        });
    }, []);

    return (
        <PageContainer>
            <p>Em Cartaz</p>
            <ListContainer>
                <MovieContainer>
                    {filmes.map((filme) => <Filme key={filme.id} filme={filme} />)}
                </MovieContainer>
            </ListContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    height: 310vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -1;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 24px;
    text-align: center;
    color: #293845;
    background-color: #212226;
    margin-top: 30px;
    padding-top: 70px;
    p {
        color: white;
    }
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin: 10px;
    img {
        width: 150px;
        height: 225px;
        border-radius: 10px;
    }
`