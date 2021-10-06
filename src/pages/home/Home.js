import { Header, MetaData } from "../../components";
import "./home.scss";
import Hero from "./modules/hero/Hero";
import Info from "./modules/info/Info";

const Home = () => {
  return (
    <div className="home">
      <MetaData title="Home | Umbrelchain" />
      <Header />
      <Hero />
      <Info />
    </div>
  );
};

export default Home;
