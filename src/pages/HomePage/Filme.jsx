import { Link } from "react-router-dom";

export default function Filme({ filme }) {
    return (
        <div>
            <Link to={`/sessions/${filme.id}`}><img src={filme.posterURL} alt={filme.title} /></Link>
        </div>
    )
}