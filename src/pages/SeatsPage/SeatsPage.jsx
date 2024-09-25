import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Seat from "./Seat";

export default function SeatsPage() {
    const { idFilme } = useParams();
    const [session, setSession] = useState(null);
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

    if (!session) return <div>Carregando...</div>;

    return (
        <div>
            <h1>Selecione o(s) assento(s)</h1>
            <div>
                {session.seats.map(seat => (
                    <Seat key={seat.id} name={seat.name} isAvailable={seat.isAvailable} />
                ))}
            </div>
        </div>
    );
}
