const url = `https://api.themoviedb.org/3/movie/popular?api_key=${
  import.meta.env.VITE_APP_TMBD_KEY
}&language=en-US&page=`;
// const movieUrl = (id) => {
//   return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;
// };

export const getMoviesRequest = async (page = 1) => {
  const pageResponse = await fetch(`${url}` + `${page}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const response = await pageResponse.json();
  return response.results;
};

export const getMovieDetails = async (id) => {
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_APP_TMBD_KEY
    }&language=en-US`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  const response = await movieResponse.json();
  return response;
};
