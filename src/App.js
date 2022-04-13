import "./App.css";
import {useState} from "react";

const App = () => {
  const [Show, setShow]=useState(false)
  const handleShow = () => setShow(false);

  let User = [
    {
      Id: "01",
      Name: "Heney",
      Number: "7094337921",
    },
    {
      Id: "02",
      Name: "Dyson",
      Number: "9094337924",
    },
    {
      Id: "03",
      Name: "Felix",
      Number: "8094337929",
    },
  ];
const userDetail=()=>{
  setShow(true)
}
const userClose=()=>{
  setShow(false)
}
  return (
    <>
      <div className="App">
        <p>Learn in react MOBX</p>
        <div>
          <p>This is User Details </p>
          {

            Show && (
              <table className="User">        
              <thead>
                <tr>
                  <td>User Id</td>
                  <td>User Name</td>
                  <td>User Number</td>
                </tr>
              </thead>
              <tbody>
                {User.map((User) => {
                  return (
                    <>
                      <tr>
                        <td>{User.Id}</td>
                        <td>{User.Name}</td>
                        <td>{User.Number}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            )
          }
        </div>
      </div>
      <button onClick={userDetail}>Show User</button>
      <button onClick={userClose}>Close User</button>

    </>
  );
};

export default App;
