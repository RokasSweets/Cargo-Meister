import { useContext } from "react";
import { useState } from "react";
import { Global } from "./Global";
import "../styles/Home.css";

function CreateBoxes() {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');
  const [flammable2, setFlammable] = useState('yes');
  const [expirydate2, setExpirydate] = useState('no')



  const { setCreateBoxes, flammable, expirydate } = useContext(Global);

  const add = (_) => {
    setCreateBoxes({
      name,
      weight,
      flammable2,
      expirydate2,

    });

  };

  return (
    <div className="">
      <div className="card">
        <div className="card-header">
          <h2>Create Box</h2>
        </div>
        <div className="card-body">
        <div className="mb-3">
            <label className="form-label">Box name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Weight</label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        <div className="mb-3">
                    <label className="form-label">Is it flammable?</label>
                    <select className="form-select" value={flammable2} onChange={e => setFlammable(e.target.value)}>
                        {
                            flammable.map(c => <option key={c.flammable} value={c.flammable2}>{c.fireTitle}</option>)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Does it have expiry date?</label>
                    <select className="form-select" value={expirydate2} onChange={e => setExpirydate(e.target.value)}>
                        {
                            expirydate.map(c => <option key={c.expirydate} value={c.expirydate}>{c.timeTitle}</option>)
                        }
                    </select>
                </div>
          <button className="btn btn-primary" onClick={add}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default CreateBoxes;