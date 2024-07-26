import { movies } from "../../movies";
import { randomMoviesSet1 } from "../../movies";
import { randomMoviesSet2 } from "../../movies";

export const VideoCarousel = () => {
  return (
    <div className="bg-background pb-8">
      <div className="overflow-clip h-[300vh] mt-[-100vh]">
        <div className=" h-screen sticky top-0 flex items-center">
          <div className=" relative left-1/2 -translate-x-1/2 flex gap-5 mb-5">
            <div className="w-[60vw] aspect-video shrink-0 overflow-clip rounded-2xl">
              <img
                className="w-full h-full object-cover"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </div>

            <div className="w-[60vw] aspect-video shrink-0 overflow-clip rounded-2xl">
              <img
                src={movies[1].poster}
                alt={movies[1].name}
              />
            </div>

            <div className="w-[60vw] aspect-video shrink-0 overflow-clip rounded-2xl">
              <img
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--duration:70s]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className=" animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3 ">
        {movies.map((movie, index) => (
          <div
            className=" aspect-video w-[23vw] shrink-0"
            key={`${movie.name}-${index}`}
          >
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
