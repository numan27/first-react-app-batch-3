import { useState } from "react";
import { GenericButton } from "../components/GenericButton";
// import Header from "../components/Header";

const Home = () => {
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  console.log("Name Input value: ", name);
  console.log("Count value: ", count);

  return (
    <div className="min-vh-100 flex-column d-flex align-items-center justify-content-center">
      {/* <Header/> */}
      <h1>Home Page Content</h1>

      <h3>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, eum.
      </h3>

      <br />
      <br />
      <div>
        <label htmlFor="">Name</label>
        <input
          onChange={handleName}
          value={name}
          type="text"
          placeholder="Enter Name"
        />
      </div>

      <br />
      <br />

      <h2>{count}</h2>

      <button onClick={handleIncrement}>Add</button>

      <div className="mt-5">
        <GenericButton  buttonText="" />
      </div>
    </div>
  );
};

export default Home;
