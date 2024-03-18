import "./css/preloaderStyle.css";
/**
 * Renders a preloader component when the page is loading.
 *
 * @return {JSX.Element} The preloader component.
 */
const Preloader = () => {
    return (
        <div className="preloader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
}

export default Preloader;