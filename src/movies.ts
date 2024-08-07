export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster: "/images/Blackwalker.mp4",
    name: "Airplane",
  },
  {
    poster: "/images/Blackwalkertwo.mp4",
    name: "Family man",
  },
  {
    poster: "/images/Bluewalker.mp4",
    name: "Laboratory",
  },
  { poster: "/images/Greenwalker.mp4", name: "Napoleon" },
  {
    poster: "/images/Johnnie Walker.mp4",
    name: "Person in Darkness",
  },
  {
    poster: "/images/Johnnie.mp4",
    name: "Scary Building",
  },
  { poster: "/images/Redwalker.mp4", name: "Red label" },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
