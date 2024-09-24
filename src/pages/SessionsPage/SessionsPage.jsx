import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Session from "./Session";

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
        <div>
            <div><h1>Selecione o Horário</h1></div>
            <div>
                <div>
                    {sessoes.days.map((day) => (
                        <Session key={day.id} sessoes={sessoes} day={day}/>
                    ))}
                </div>
            </div>
        </div>
    )
}