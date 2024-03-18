import "./css/bannerStyle.css";
/**
 * Renders a banner component with an image after the header on all pages.
 *
 * @return {JSX.Element} The banner component
 */
const Banner = () => {
  return (
    <div className="banner">
      <img
        src="/src/assets/img/banner.jpg"
        className="img-fluid"
        alt="К весне готовы!"
      ></img>
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
};
export default Banner;
