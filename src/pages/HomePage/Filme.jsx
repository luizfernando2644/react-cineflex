import styled from "styled-components"

export default function Filme({ filme }) {
    return (
        <div>
            <img src={filme.posterURL} alt={filme.title} />
            <TituloFilme>{filme.title}</TituloFilme>
        </div>
    )
}

const TituloFilme = styled.div`
    font-size: 15px;
    font-weight: bold;
`