import { Header, MetaData } from "../../components";
import "./formsPage.scss";
import DropDownSection from "./modules/dropdownSection/DropDownSection";

const FormsPage = ({ match }) => {
  return (
    <div className="formsPage">
      <MetaData title="Form | Umbrelchain" />
      <Header />
      <DropDownSection match={match} />
    </div>
  );
};

export default FormsPage;
