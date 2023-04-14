import { useContext } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Global } from "./Global";

function ListBoxes() {
    const { boxeslist, setDeleteBoxes } = useContext(Global);

console.log(boxeslist);
  return (
    <div className="card">
        <div className="card-header">
            <h2>Boxes list</h2>
        </div>
        <div className="card-body">
        {
                        boxeslist?.map(c => (<li key={c.id} className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    
                                    <div className="mt-3">
                                        <p>ID:{c.id}</p>
                                    </div>
                                    <div>
                                        <div>Name: {c.name} </div>
                                    </div>
                                    <div>
                                        <i>Weight:{c.weight} kg</i>
                                    </div>
                                    <div>
                                        <div>Flammable?: {c.flammable} </div>
                                    </div>
                                    <div>
                                        <div>Expiry date: {c.expirydate} </div>
                                    </div>
                                    <div className="mb-3">
                                        <button type="button" className="btn btn-danger" onClick={() => setDeleteBoxes(c)}>Delete</button>
                                    </div>
                                    <div className="line m-auto">

                                    </div>
                                </div>
                            </div>
                        </li>))
                    }
        </div>
    </div>
);
}

export default ListBoxes;