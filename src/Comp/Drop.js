import React from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

function Drop() {
  const [state, setState] = useState(["A", "B", "C", "D", "E"]);
  const [state2, setState2] = useState([]);

  const remove = (i) => {
    const newArr = state.filter((f) => f !== i);
    setState(newArr);
    // console.log(newArr);

   

    const p = state.filter((x) => !newArr.includes(x));
    // console.log(p);
    state2.push(...p);
    // console.log(array2);
  };

  const submit = () => {
      if(state2.length <3){
          alert("select item from dropdown")
      } else {
      console.log(`removed items ${state2}`)
      const rem = document.createElement("h1");
      rem.setAttribute("className", "drop2");
      rem.innerHTML=state2;
      document.body.appendChild(rem)
}
    };
     
  return (
    <div>
      <div className="drop">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown 1
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {state.map((i) => (
              <Dropdown.Item  onClick={() => remove(i)}>
                {i}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="drop">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown 2
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {state.map((i) => (
              <Dropdown.Item  onClick={() => remove(i)}>
                {i}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="drop">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown 3
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {state.map((i) => (
              <Dropdown.Item  onClick={() => remove(i)}>
                {i}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <h1>{state}</h1>

      <button onClick={() => submit()}>submit</button>
    </div>
  );
}

export default Drop;
