import { movies } from "../../movies";
import { randomMoviesSet1 } from "../../movies";
import { randomMoviesSet2 } from "../../movies";

export const VideoCarousel = () => {
  return (
    <div className="bg-background">
      <div>
        <div>
          <img
            src={movies[0].poster}
            alt={movies[0].name}
          />
        </div>

        <div>
          <img
            src={movies[1].poster}
            alt={movies[1].name}
          />
        </div>

        <div>
          <img
            src={movies[2].poster}
            alt={movies[2].name}
          />
        </div>
      </div>

      <div>
        {randomMoviesSet1.map((movie, index) => (
          <img
            src={movie.poster}
            alt={movie.name}
            key={`${movie.name}-${index}`}
          />
        ))}
      </div>

      <div>
        {randomMoviesSet2.map((movie, index) => (
          <img
            src={movie.poster}
            alt={movie.name}
            key={`${movie.name}-${index}`}
          />
        ))}
      </div>

      <SmallVideoCarousel movies={randomMoviesSet1} />
      <SmallVideoCarousel movies={randomMoviesSet2} />
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex gap-3">
      {movies.map((movie, index) => (
        <div
          className="w-[30vw] shrink-0"
          key={`${movie.name}-${index}`}
        >
          <img
            src={movie.poster}
            alt={movie.name}
          />
        </div>
      ))}
    </div>
  );
};
