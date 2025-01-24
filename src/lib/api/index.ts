const API_KEY = process.env.API_KEY
export const getSingleMovie = async (movieId: number): Promise<any> => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
      );
      if (!res.ok) throw new Error("Failed to fetch movie data");
      return await res.json();
    } catch (error) {
      console.error("Error fetching movie:", error);
      return null;
    }
  };