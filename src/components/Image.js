import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image({ data }) {
  return (
    <>
      <article className="card">
        <LazyLoadImage
          id="images"
          effect="blur"
          src={data.urls.regular}
          alt={data.user.name}
          loading="lazy"
        />
        <div className="details">
          <LazyLoadImage
            className="profile-img"
            src={data.user.profile_image.large}
            alt={data.user.name}
            loading="lazy"
          />

          <ul className="user-details">
            <li className="user-name">{data.user.name}</li>
            <li>{data.user.bio}</li>
          </ul>
        </div>
        <div className="insta">
          <a href={`https://www.instagram.com/${data.user.instagram_username}`}>
            Instagram
          </a>
        </div>
        <button className="insta-btn">
          <a href={`https://www.instagram.com/${data.user.instagram_username}`}>
            Instagram
          </a>
        </button>
      </article>
    </>
  );
}

export default Image;
