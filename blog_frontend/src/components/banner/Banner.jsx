import "./banner.css";
import logo from "../../assets/images/top-view-arrangement-natural-material-stationery.jpg";


const Banner = () => {
  return (
    <div className="container_banner">
      <div className="center_banner" style={{marginTop:"-3rem"}}>BLOG</div>
      <img src={logo} alt="cover" className="banner" />
    </div>
  );
};
export default Banner;
