import { useRef } from "react";
import {
  clipboard,
  error,
  exchange,
  lock,
  pairing,
  wallet,
} from "../../../../assets";
import { Button, Modal } from "../../../../components";
import "./info.scss";
import ModalBody from "./ModalBody";

const Info = () => {
  const modalRef = useRef();

  return (
    <div className="homeInfo">
      <div className="homeInfo__container container">
        <div className="homeInfo__cards">
          <div className="homeInfo__card">
            <div className="homeInfo__cardImageDiv">
              <img src={error} className="homeInfo__cardImg" alt="" />
            </div>
            <h3 className="homeInfo__cardHeader">Transaction Bug or Error</h3>
            <p className="homeInfo__cardParagraph">
              Error made by following incomplete procedures, thereby, making the
              transaction pending or rejected
            </p>
            <div className="homeInfo__cardBtn">
              <Button
                onClick={() => modalRef.current.openModal()}
                white
                label="Get Started"
                btn
              />
            </div>
          </div>
          <div className="homeInfo__card">
            <div className="homeInfo__cardImageDiv">
              <img src={lock} className="homeInfo__cardImg" alt="" />
            </div>
            <h3 className="homeInfo__cardHeader">Staking</h3>
            <p className="homeInfo__cardParagraph">
              Locking up your crypto on a particular liquidity poll to earn
              actual accumulated value in APR or APY range
            </p>
            <div className="homeInfo__cardBtn">
              <Button
                onClick={() => modalRef.current.openModal()}
                white
                label="Get Started"
                btn
              />
            </div>
          </div>
          <div className="homeInfo__card">
            <div className="homeInfo__cardImageDiv">
              <img src={pairing} className="homeInfo__cardImg" alt="" />
            </div>
            <h3 className="homeInfo__cardHeader">Swapping / Bridging</h3>
            <p className="homeInfo__cardParagraph">
              This is the process whereby different cross-chains are paired for
              yield farming, liquidation, pooling and staking.
            </p>
            <div className="homeInfo__cardBtn">
              <Button
                onClick={() => modalRef.current.openModal()}
                white
                label="Get Started"
                btn
              />
            </div>
          </div>
          <div className="homeInfo__card">
            <div className="homeInfo__cardImageDiv">
              <img src={clipboard} className="homeInfo__cardImg" alt="" />
            </div>
            <h3 className="homeInfo__cardHeader">Whitelist KYC</h3>
            <p className="homeInfo__cardParagraph">
              This is the procedure whereby a protocol is in control of his
              community while using a friendly form for financial investors
            </p>
            <div className="homeInfo__cardBtn">
              <Button
                onClick={() => modalRef.current.openModal()}
                white
                label="Get Started"
                btn
              />
            </div>
          </div>
          <div className="homeInfo__card">
            <div className="homeInfo__cardImageDiv">
              <img src={exchange} className="homeInfo__cardImg" alt="" />
            </div>
            <h3 className="homeInfo__cardHeader">Cannot Exchange Crypto</h3>
            <p className="homeInfo__cardParagraph">
              This issue is for those that have problem exchanging their crypto
              currencies.
            </p>
            <div className="homeInfo__cardBtn">
              <Button
                onClick={() => modalRef.current.openModal()}
                white
                label="Get Started"
                btn
              />
            </div>
          </div>
          <div className="homeInfo__card">
            <div className="homeInfo__cardImageDiv">
              <img src={wallet} className="homeInfo__cardImg" alt="" />
            </div>
            <h3 className="homeInfo__cardHeader">Lost Access to Wallet</h3>
            <p className="homeInfo__cardParagraph">
              The issues relating to inability to access wallets can be resolved
              here.
            </p>
            <div className="homeInfo__cardBtn">
              <Button
                onClick={() => modalRef.current.openModal()}
                white
                label="Get Started"
                btn
              />
            </div>
          </div>
        </div>
        <Modal ref={modalRef}>
          <ModalBody closeFunc={() => modalRef.current.closeModal()} />
        </Modal>
      </div>
    </div>
  );
};

export default Info;
