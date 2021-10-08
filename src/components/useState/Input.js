import { useState } from "react";

function Input() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  function fnameHandler(e) {
    setName({ ...name, firstName: e.target.value });
  }
  function lnameHandler(e) {
    setName({ ...name, lastName: e.target.value });
  }
  return (
    <div>
      <input type="text" value={name.firstName} onChange={fnameHandler}></input>
      <input type="text" value={name.lastName} onChange={lnameHandler}></input>
      <h5>FirstName : {name.firstName}</h5>
      <h5>LastName : {name.lastName}</h5>
      <p>{JSON.stringify(name)}</p>
    </div>
  );
}

export default Input;
