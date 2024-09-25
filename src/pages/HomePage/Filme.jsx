import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Filme({ filme }) {
    return (
        <div>
            <Link to={`/sessions/${filme.id}`}>
                <ImagemFilme src={filme.posterURL} alt={filme.title} />
            </Link>
        </div>
    )
}

const ImagemFilme = styled.img`
    padding: 6px;
    width: 150px;
    height: 200px;
    border-radius: 10px;
    cursor: pointer;
`