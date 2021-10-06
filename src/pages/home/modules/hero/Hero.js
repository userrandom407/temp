// import { FiArrowDown } from "react-icons/fi";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container container">
        {/* <h1 className="hero__header header1">
          Carry out your <span className="second">blockchain</span> transactions
        </h1>
        <h4 className="hero__subHeader">
          Let's bring a revolution to your wallet related issues
        </h4>
        <p className="hero__paragraph">
          Pro-level control to manage your cryptocurrency in one beautiful
          application
        </p> */}
        <h1 className="hero__header header1">
          Revolution to your decentralized and centralized{" "}
          <span className="second">cryptocurrency</span> finance related
          issues.
        </h1>
        {/* <div className="hero__scrollDown">
          <div className="hero__scrollDownContainer">
            <FiArrowDown />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
