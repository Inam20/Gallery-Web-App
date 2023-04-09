import React, { createContext, useState } from "react";
import GetImages from "./GetImages";
import Heading from "./Heading";
import useAxios from "./hooks/useAxios";

export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=dog&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
  );
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };
  return (
    <>
      <ImageContext.Provider value={value}>
        <Heading />
        <GetImages />
      </ImageContext.Provider>
    </>
  );
}

export default App;
