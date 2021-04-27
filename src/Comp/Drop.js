import React from "react";
import { Dropdown } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

function Drop() {
  const [state, setState] = useState(["A", "B", "C", "D", "E"]);

  const remove = (i) => {
    const newArr = state.filter((f) => f !== i);
    setState(newArr);
    console.log(newArr);

    const array2 = [];

    let p = state.filter((x) => !newArr.includes(x));
    console.log(p);
    array2.push(p);
    console.log(array2);
  };

  const submit = () => {};

  return (
    <div>
      <div className="drop">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown 1
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {state.map((i) => (
              <Dropdown.Item value={state[i]} onClick={() => remove(i)}>
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
              <Dropdown.Item value={state[i]} onClick={() => remove(i)}>
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
              <Dropdown.Item value={state[i]} onClick={() => remove(i)}>
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
