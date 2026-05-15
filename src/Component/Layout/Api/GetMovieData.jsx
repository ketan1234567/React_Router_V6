// api/GetMovieData.jsx

export const GetMovieData = async () => {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?s=batman&apikey=1f7827b5"
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};