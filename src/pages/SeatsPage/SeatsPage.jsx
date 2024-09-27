import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Seat from "./Seat";
import styled from "styled-components";
import MovieIcon from "../../assets/movie-icon.png";
import Calendar from "../../assets/calendar-icon.png";
import UserIcon from "../../assets/user-icon.png"

export default function SeatsPage() {
    const { idFilme } = useParams();
    const [session, setSession] = useState([]);
    const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idFilme}/seats`;

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setSession(res.data);
            })
            .catch(err => {
                console.log(err.response.data);
            });
    }, []);

    if (session.length === 0) return <div>Carregando...</div>;

    console.log(session.movie);

    return (
        <PageContainer>
            <h1>Selecione o(s) assento(s)</h1>
            <ContainerButtons>
                {session.seats.map(seat => (
                    <Seat key={seat.id} name={seat.name} isAvailable={seat.isAvailable} />
                ))}
            </ContainerButtons>
            <hr />
            <SeatsInfo>
                <Selected>
                    <div>ㅤ</div>
                    <p>Disponível</p>
                </Selected>
                <Disponible>
                    <div>ㅤ</div>
                    <p>Selecionado</p>
                </Disponible>
                <Indisponible>
                    <img src={UserIcon} alt="" />
                    <p>Indisponível</p>
                </Indisponible>
            </SeatsInfo>
            <SelectedMovie>
                <MovieContainer>
                    <Movie>
                        <img src={MovieIcon} alt="" />
                        <h1>{session.movie.title}</h1>
                    </Movie>
                    <MovieInfo>
                        <img src={Calendar} alt="" />
                        <p>{session.day.date} às {session.name}</p>
                    </MovieInfo>
                </MovieContainer>
                <img src={session.movie.posterURL} alt="" />
            </SelectedMovie>
            <img src="" alt="" />
        </PageContainer>
    );
}

const PageContainer = styled.div`
    height: 100vh;
    padding: 10px;
    background-color: #212226;
    h1 {
        font-size: 30px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        text-align: center;
        color: white;
    }
`

const ContainerButtons = styled.div`
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 5px;
    justify-items: center;
`

const SeatsInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 30px;
`

const Selected = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        width: 30px;
        height: 30px;
        margin-bottom: 5px;
        border-radius: 20px;
        background-color: #EE897F;
    }
    p {
        color: #7f8f9e;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`

const Disponible = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        width: 30px;
        height: 30px;
        margin-bottom: 5px;
        border-radius: 20px;
        background-color: #9DB899;
    }
    p {
        color: #7f8f9e;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`

const Indisponible = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        margin-bottom: 5px;
        height: 30px;
    }
    p {
        color: #7f8f9e;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`

const SelectedMovie = styled.div`
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #EE987F;
    img {
        height: 150px;
        border-radius: 8px;
    }
`

const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Movie = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    h1 {
        color: #212226;
        font-size: 19px;
        font-weight: bold;
    }
    img {
        height: 40px;
        margin-right: 5px;
    }
`

const MovieInfo = styled.div`
    display: flex;
    align-items: center;
    p {
        color: #212226;
        font-size: 19px;
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    img {
        height: 40px;
        margin-right: 5px;
    }    
`