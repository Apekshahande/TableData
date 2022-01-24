import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState("");
  const [iddata, setIdData] = useState([]);

  useEffect(() => {
    async function getIdData(id) {
      const res = await axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((resp) => {
          if (resp.data.id == id) {
            setIdData(resp.data);
            // console.log(resp.data.id)
          } else {
            setData(resp.data);
          }
        })
        .catch((err) => {
          {
            num !== iddata.id && num !== ""
              ? alert("Enter currect id :-" + "\n" + err)
              : "";
          }
          // console.log(err);
        });

      // console.log("get Data by id get called");
    }

    getIdData(num);
  }, [num]);

  return (
    <>
      <div className="inputbox">
        <input
          value={num}
          placeholder="Enter id"
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <table>
        {/* <thead> */}
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
        {/* </thead> */}
        {num !== "" && num == iddata.id ? (
          // <tbody>
          <tr>
            <td>{iddata.id}</td>
            <td>{iddata.name}</td>
            <td>{iddata.username}</td>
            <td>{iddata.email}</td>
          </tr>
        ) : (
          // </tbody>
          <>
            {data.map((val, ind) => {
              //  console.log(val)
              return (
                // <tbody key={ind}>
                <tr key={ind}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.username}</td>
                  <td>{val.email}</td>
                </tr>
                // </tbody>
              );
            })}
          </>
        )}
      </table>
    </>
  );
};
export default Table;
