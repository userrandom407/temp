import { MetaData } from "../../components";
import "./error.scss";

const Error = () => {
  return (
    <>
      <MetaData title="404 | Not Found" />
      <div
        style={{
          padding: "25px 10px",
          color: "black",
          fontFamily: "sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "3rem",
            fontWeight: "400",
          }}
        >
          404
        </h2>
        <h4 style={{ textAlign: "center" }}>
          The resource you are looking for does not exist
        </h4>
      </div>
    </>
  );
};

export default Error;
