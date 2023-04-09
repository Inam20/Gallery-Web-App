import { useContext } from "react";
import { ImageContext } from "./App";
import Image from "./Image";
import skeleton from "./skeleton";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="second-heading">Results for {searchImage || "Dogs"}</h1>
      <section className="main">
        <div className="img">
          {isLoading ? (
            <skeleton item={10} />
          ) : (
            response.map((data, key) => <Image key={key} data={data} />)
          )}
        </div>
      </section>
    </>
  );
};

export default Images;
