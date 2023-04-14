import { useContext } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Global } from "./Global";

function ListContainer() {
    const { containerlist, setDeleteContainer } = useContext(Global);

console.log(containerlist);
  return (
    <div className="card">
        <div className="card-header">
            <h2>Container list</h2>
        </div>
        <div className="card-body">
        {
                        containerlist?.map(c => (<li key={c.id} className="list-group-item">
                            <div className="container">
                                <div className="row">
                                    
                                    <div className="mt-3">
                                        <p>Unique ID:{c.uniqueid}</p>
                                    </div>
                                    <div>
                                        <div>Size:{c.size} </div>
                                    </div>
                                    <div>
                                        <i>Boxes inside:{c.inside}</i>
                                    </div>
                                    <div className="mb-3">
                                        <button type="button" className="btn btn-danger" onClick={() => setDeleteContainer(c)}>Delete</button>
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

export default ListContainer;