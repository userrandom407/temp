import { AiFillCloseCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Button } from "../../../../../../components";
import "./modalBody.scss";

const ModalBody = ({ closeFunc }) => {
  const history = useHistory();

  const handlePush = () => {
    history.push("/forms");
  };

  return (
    <div className="modalBody">
      <div className="modalBody__container">
        <h3 className="modalBody__header">
          Available <span className="orange">Wallets</span>
        </h3>
        <div className="modalBody__wallets">
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
          <Button label="Atomic Wallet" onClick={handlePush} />
        </div>
        <div className="modalBody__closeIcon" onClick={closeFunc}>
          <AiFillCloseCircle />
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
