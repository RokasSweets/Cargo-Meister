import Navigation from '../components/Navbar';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import ListBoxes from '../components/ListBoxes';
import CreateBoxes from '../components/CreateBoxes';

function Containers() {
  return (
    <>
    <Navigation/>

    <div className='col-12 mt-5'>
        <div className="col-10 m-auto">
            <CreateBoxes/>
        </div>
        <div className='col-10 m-auto mt-5 container-list'>
<ListBoxes/>
        </div>
    </div>

    </>
  );
}

export default Containers;