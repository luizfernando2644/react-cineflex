import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SessionsPage() {
    const { idFilme } = useParams();
    const [sessions, setSessions] = useState(null);
    const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const response = await axios.get(url);
                setSessions(response.data);
            } catch (err) {
                console.error(err.response ? err.response.data : err.message);
            }
        };

        fetchSessions();
    }, [url]);

    if (!sessions) return <div>Carregando...</div>

    return (
        <PageContainer>
            <Titulo>Selecione o Horário</Titulo>
            {sessions.days.map(day => (
                <>
                    <ContainerInformacoes>
                        <DataHorario>{day.weekday}, {day.date}</DataHorario>
                        <Linha />
                        <ContainerHorarios>
                            {day.showtimes.map(showtime => (
                                <Link to={`/seats/${idFilme}`}>
                                    <BotaoHorario key={showtime.id}>
                                        {showtime.name}
                                    </BotaoHorario>
                                </Link>
                            ))}
                        </ContainerHorarios>
                    </ContainerInformacoes>
                </>
            ))}
        </PageContainer>
    );
}

const PageContainer = styled.div`
    height: 130vh;
    padding: 20px;
    background-color: #212226;
    color: white;
    gap: 5px;
`

const ContainerInformacoes = styled.div`
    margin: 10px 0;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    background-color: #2B2D36;
`

const ContainerHorarios = styled.div`
    display: flex;
    justify-content: space-around;  
    width: 100%;
`

const BotaoHorario = styled.button`
    border: 3px solid #EE987F;
    background: none;
    color: #EE987F;
    font-weight: lighter;
`

const Titulo = styled.div`
    text-align: center;
    margin-top: 70px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 19px;
`

const DataHorario = styled.div`
    margin-top: 20px;
    margin-bottom: 5px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const Linha = styled.hr`
    width: 80%;
`