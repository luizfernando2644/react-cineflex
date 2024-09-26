import styled from "styled-components";

export default function Seat({ name, isAvailable }) {
    return (
        <>
            <SeatOption isAvailable={isAvailable}>
                {name}
            </SeatOption>
        </>
    );
}

const SeatOption = styled.button`
    width: 1px;
    height: 20px;
    padding: 15px;
    border-radius: 20px;
    font-size: 15px;
    background-color: ${({ isAvailable }) => (isAvailable ? "#9DB899" : "#EE897F")};
    color: white;
`