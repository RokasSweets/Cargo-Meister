import { useContext } from "react";
import { useState } from "react";
import { Global } from "./Global";
import "../styles/Home.css";

function CreateContainer() {
  const [size, setSize] = useState('1');

  const { setCreateContainer, sizes } = useContext(Global);

  const add = (_) => {
    setCreateContainer({
      size,

    });
    setSize('S');
  };

  return (
    <div className="">
      <div className="card">
        <div className="card-header">
          <h2>Create Container</h2>
        </div>
        <div className="card-body">
        <div className="mb-3">
                    <label className="form-label">Container Size</label>
                    <select className="form-select" value={size} onChange={e => setSize(e.target.value)}>
                        {
                            sizes.map(c => <option key={c.size} value={c.size}>{c.typeTitle}</option>)
                        }
                    </select>
                </div>
          <button className="btn btn-primary" onClick={add}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CreateContainer;