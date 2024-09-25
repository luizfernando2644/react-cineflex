import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Session from "./Session";
import MovieIcon from "../../assets/movie-icon.png"

export default function SessionsPage() {
    const { idFilme } = useParams();
    const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
    const requisicao = axios.get(url);
    const [sessoes, setSessoes] = useState([]);

    useEffect(() => {
        requisicao.then(res => {
            setSessoes(res.data);
        });

        requisicao.catch(err => {
            console.log(err.res.data)
        });
    }, []);

    if (sessoes.length === 0) return <div>Carregando... </div>

    return (
        <PageContainer>
            <h1>Selecione o Horário</h1>
            <ScheduleContainer>
                <>
                    {sessoes.days.map((day) => (
                        <Session key={day.id} sessoes={sessoes} day={day} />
                    ))}
                </>
            </ScheduleContainer>

            <SelectedMovie>
                <Movie>
                    <SiteIcon src={MovieIcon} alt="" />
                    <MovieTitle>{sessoes.title}</MovieTitle>
                </Movie>
                <MoviePoster src={sessoes.posterURL} alt="" />
            </SelectedMovie>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    padding: 10px;
    background-color: #212226;
    h1 {
        font-size: 30px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: center;
        color: white;
    }
`

const ScheduleContainer = styled.div`
    margin: 20px 0;
`

const SelectedMovie = styled.div`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EE987F;
`

const Movie = styled.div`
    display: flex;
    align-items: center;
`

const SiteIcon = styled.img`
    height: 40px;
    margin-right: 8px;
`

const MovieTitle = styled.h1`
    font-size: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bolder;
    color: #212226;
`

const MoviePoster = styled.img`
    height: 150px;
    border-radius: 8px;
`