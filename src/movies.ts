export type Movie = {
  poster: string;
  name: string;
};

export const movies = [
  {
    poster:
      "https://res.cloudinary.com/dyf0wsiaf/video/upload/v1724065774/ghbjnxrjh5ly2gx1qccr.mp4",
    name: "Black walker",
  },
  {
    poster:
      "https://res.cloudinary.com/dyf0wsiaf/video/upload/v1724065793/k6zrfs91y2aqmnpkckzn.mp4",
    name: "Black walker",
  },
  {
    poster:
      "https://res.cloudinary.com/dyf0wsiaf/video/upload/v1724065664/th4oewnn06ubimr6wvil.mp4",
    name: "Blue walker",
  },
  {
    poster:
      "https://res.cloudinary.com/dyf0wsiaf/video/upload/v1724065798/onuegyzptver27oa9rdk.mp4",
    name: "Green walker",
  },

  {
    poster:
      "https://res.cloudinary.com/dyf0wsiaf/video/upload/v1724065734/hi60ttwmpqjp1afhtuxy.mp4",
    name: "Johnnie",
  },
  {
    poster:
      "https://res.cloudinary.com/dyf0wsiaf/video/upload/v1724065779/t5c3cyl3duqrbhcztpzs.mp4",
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
