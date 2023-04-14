
import Navigation from '../components/Navbar';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import CreateContainer from "../components/CreateContainer";
import ListContainer from '../components/ListContainer';

function Containers() {
  return (
    <>
    <Navigation/>

    <div className='col-12 mt-5'>
        <div className="col-10 m-auto">
            <CreateContainer/>
        </div>
        <div className='col-10 m-auto mt-5 container-list'>
<ListContainer/>
        </div>
    </div>

    </>
  );
}

export default Containers;