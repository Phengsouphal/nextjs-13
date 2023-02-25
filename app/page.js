import Movie from "./components/Movie";

export default async function Home() {
  const data = await fetch(
    `${process.env.BASE_URL}movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <main>
      <h1 className=" text-yellow-300">Hello Next 13</h1>
      <div className=" grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => {
          return (
            <Movie
              title={movie.title}
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              release_dates={movie.release_date}
            />
          );
        })} </div>
    </main>
  );
}
