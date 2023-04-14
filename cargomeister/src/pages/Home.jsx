import logo from "../img/Cargo-Ships.jpg";
import Navigation from '../components/Navbar';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import CreateContainer from "../components/CreateContainer";

function Home() {
  return (
    <>
    <Navigation/>

    <div className='home col-12'>
        <h1>CARGO-MEISTER</h1>
        <p>Bestest cargo system in ze world!</p>
        <img src={logo} alt="logo" />
    </div>
    </>
  );
}

export default Home;
