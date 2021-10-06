import { FaRegTimesCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Button } from "../../../../components";
import "./modalBody.scss";

const ModalBody = ({ closeFunc }) => {
  const history = useHistory();

  return (
    <div className="modalBody">
      <div className="modalBody__container">
        <div className="modalBody__head">
          <h3 className="modalBody__header">Select your option</h3>
          <div className="modalBody__icon" onClick={closeFunc}>
            <FaRegTimesCircle />
          </div>
        </div>
        <div className="modalBody__options">
          <div className="modalBody__btnDiv">
            <Button
              onClick={() => history.push("/rectification")}
              label="Rectification"
            />
          </div>
          <div className="modalBody__btnDiv">
            <Button
              onClick={() => history.push("/stabilize")}
              label="Stablize/Synchronize"
            />
          </div>
          <div className="modalBody__btnDiv">
            <Button
              onClick={() => history.push("/recovery")}
              label="Recovery"
            />
          </div>
          <p className="modalBody__note">
            N.B: An account verification will have to take place to continue
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
