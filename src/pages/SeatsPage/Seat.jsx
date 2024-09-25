export default function Seat({ name, isAvailable }) {
    return (
        <div className={`seat ${isAvailable ? "available" : "unavailable"}`}>
            {name}
        </div>
    );
}
