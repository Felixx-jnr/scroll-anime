export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster:
      "https://felixx-projects.s3.eu-north-1.amazonaws.com/Johnnie/Johnnie+Walker++-+CINEMATIC+WHISKY+COMMERCIAL+(1080p).mp4",
    name: "Black walker",
  },
  {
    poster:
      "https://felixx-projects.s3.eu-north-1.amazonaws.com/Johnnie/Johnnie+Walker+-+Red+Label+_+CINEMATIC+WHISKY+COMMERCIAL+(1080p).mp4",
    name: "Black walker",
  },
  {
    poster:
      "https://felixx-projects.s3.eu-north-1.amazonaws.com/Johnnie/Johnnie+Walker+Black+Cask+Commercial+(2026)+(1080p60fps).mp4",
    name: "Blue walker",
  },
  {
    poster:
      "https://felixx-projects.s3.eu-north-1.amazonaws.com/Johnnie/Johnnie+Walker+Black+Label+(1080p).mp4",
    name: "Green walker",
  },

  {
    poster:
      "https://felixx-projects.s3.eu-north-1.amazonaws.com/Johnnie/Johnnie+Walker+Black+Label+Commercial+(2026)+(1080p60fps).mp4",
    name: "Johnnie",
  },
  {
    poster:
      "https://felixx-projects.s3.eu-north-1.amazonaws.com/Johnnie/Whisky+Johnnie+Walker+Red+Label+commercial+(1080p).mp4",
    name: "Red Walker",
  },
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
