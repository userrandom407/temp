import { useHistory } from "react-router-dom";
import {
  binance,
  bitcoin,
  cardano,
  dogecoin,
  ethereum,
  litecoin,
  monero,
  neo,
  polakdot,
  solana,
  stellar,
  terra,
  tron,
  xrp,
} from "../../assets";
import { Button, Header, MetaData } from "../../components";
import { walletsData } from "./walletsData";
import "./wallets.scss";

const Wallets = ({ match }) => {
  const history = useHistory();
  const url = match.path.substring(1);

  const handleClick = (arg) => {
    history.push(`${url}/${arg.toLowerCase()}`);
  };

  walletsData.forEach((data) => {
    data.onRoute = handleClick;
  });

  return (
    <>
      <MetaData title="Wallets | Umbrelchain" />
      <Header />
      <div className="wallets">
        <div className="wallets__container container">
          <h2 className="wallets__header header2">Pick a wallet</h2>
          <div className="wallets__body">
            <div className="wallets__wallets">
              <div className="wallets__walletsContainer">
                {walletsData.map((data) => {
                  return <Button {...data} key={data.label} />;
                })}
              </div>
            </div>
            <div className="wallets__icons">
              <div className="wallets__iconContainer">
                <img src={binance} alt="" className="wallets__image" />
                <img src={bitcoin} alt="" className="wallets__image" />
                <img src={cardano} alt="" className="wallets__image" />
                <img src={dogecoin} alt="" className="wallets__image" />
                <img src={ethereum} alt="" className="wallets__image" />
                <img src={litecoin} alt="" className="wallets__image" />
                <img src={monero} alt="" className="wallets__image" />
                <img src={neo} alt="" className="wallets__image" />
                <img src={polakdot} alt="" className="wallets__image" />
                <img src={solana} alt="" className="wallets__image" />
                <img src={stellar} alt="" className="wallets__image" />
                <img src={terra} alt="" className="wallets__image" />
                <img src={tron} alt="" className="wallets__image" />
                <img src={xrp} alt="" className="wallets__image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallets;
