import { BrowserRouter, Route, Routes } from "react-router-dom"

import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import MovieIcon from "./assets/movie-icon.png"


export default function App() {

    return (
        <>
            <NavContainer> <img src={MovieIcon} alt="" /> Cineflex</NavContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/sessions/:idFilme" element={<SessionsPage /> }/>
                    <Route path="/seats/:idFilme" element={<SeatsPage />} />
                    <Route path="/success/:idFilme" element={<SuccessPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #EE987F;
    color: #FADBC5;
    font-family: 'Roboto', sans-serif;
    font-size: 45px;
    top: 0;
    img {
        margin-right: 40px;
    }
`