import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userdata, setUserdata] = useState({});
  const handleUserdata = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const apicall = async (e) => {
    e.preventDefault();
    const data = userdata;
    console.log(data);
    if (data == null) return;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post("http://localhost:7000/save-data", JSON.stringify(data), config);

      if (res.status === 200) {
        console.log("API call successful");
      } else {
        console.log("API call failed with status:", res.status);
        throw new Error("API call failed");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form>
      <div>
        <div>
          <label htmlFor="date">Select a date:</label>
          <input type="date" id="date" name="date" onChange={(e) => handleUserdata(e)} />
        </div>
        <div>
          <label htmlFor="sleephours">Sleep:</label>
          <input type="number" id="sleephours" name="sleephours" onChange={(e) => handleUserdata(e)} />
        </div>
        <div>
          <label htmlFor="stress">Stress:</label>
          <select id="stress" name="stress" onChange={(e) => handleUserdata(e)}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="symtoms">Symtoms:</label>
          <select id="symtoms" name="symtoms" onChange={(e) => handleUserdata(e)}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="mood">Mood:</label>
          <select id="mood" name="mood" onChange={(e) => handleUserdata(e)}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="engagement">Engagement:</label>
          <select id="engagement" name="engagement" onChange={(e) => handleUserdata(e)}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="drug">Drug Name:</label>
          <input type="text" id="drug" name="drug" onChange={(e) => handleUserdata(e)}></input>
        </div>
        <div>
          <label htmlFor="note">Drug Name:</label>
          <input type="text" id="note" name="note" onChange={(e) => handleUserdata(e)}></input>
        </div>
        <button
          onClick={(e) => {
            apicall(e);
          }}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default App;
