import Link from "next/link";
export default function Movie({ title, id, poster_path, release_dates }) {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
        <div>
            <h1>{title}</h1>
            <h2>
                {release_dates}
            </h2>
            <Link href={`/${id}`}>
                <img src={imagePath + poster_path} alt="" width={800}></img>
            </Link>
        </div>
    )
}