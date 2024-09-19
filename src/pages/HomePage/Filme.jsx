export default function Filme({ filme }) {
    return (
        <div>
            <img src={filme.posterURL} alt={filme.title} />
        </div>
    )
}