export default function Session({ sessoes, day }) {
    return (
        <div>
            <p>{day.weekday}, {day.date}</p>
            <hr />
            {day.showtimes.map((h) => (
                <button>{h.name}</button>
            ))}
        </div>
    )
}