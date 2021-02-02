export const URLtop10 = "https://api.themoviedb.org/3/trending/movie/week?api_key=31b2e23c9c63ec84119f8743b78152f2"
export const URLtop10Tv = "https://api.themoviedb.org/3/trending/tv/week?api_key=31b2e23c9c63ec84119f8743b78152f2"

export const URLsearch = (item) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=31b2e23c9c63ec84119f8743b78152f2&language=en-US&query=${item}&page=1`
}

