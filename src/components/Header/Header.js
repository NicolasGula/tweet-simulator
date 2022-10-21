import TwitterLogo from "../../assets/img/twitter-logo.png";

import "./Header.scss";

const Header = ({ title }) => {
  return (
    <div className="header">
      <img src={TwitterLogo} alt="logo" />
      <h1>{title.toUpperCase()}</h1>
    </div>
  );
};

export default Header;
