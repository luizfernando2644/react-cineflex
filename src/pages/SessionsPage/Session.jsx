import { Link } from "react-router-dom";
import styled from "styled-components";
import Calendar from "../../assets/calendar-icon.png";

export default function Session({ sessoes, day }) {
    return (
        <MovieInfos>
            <Day>
                <img src={Calendar} alt="" />
                <p>{day.weekday}, {day.date}</p>
            </Day>
            <hr />
            <ButtonsContainer>
                {day.showtimes.map((h) => (
                    <Link to={`/seats/${sessoes.id}`}>
                        <button>{h.name}</button>
                    </Link>
                ))}
            </ButtonsContainer>
        </MovieInfos>
    )
}

const MovieInfos = styled.div`
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #2b2d36;
    margin: 10px 0;
    hr {
        width: 90%;
        background-color: red;
    }
`

const Day = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: white;
    }

    img {
        height: 40px;
        width: 40px;
        margin-right: 5px;
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    button {
        background: none;
        border: 3px solid #EE987F;
        color: #EE987F;
    }
`