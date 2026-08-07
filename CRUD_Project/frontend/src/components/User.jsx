import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("/api")
      .then((result) => setusers(result.data))
      .catch((e) => console.log("error : ", e));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        setusers(users.filter((user) => user._id !== id));
      })
      .catch((err) => console.log("Error : ", err));
  };

  return (
    <div className="container-fluid min-vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center p-2 p-sm-4">
      <div
        className="w-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-3 p-sm-4 shadow-lg"
        style={{ maxWidth: "800px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="m-0 fw-bold text-light">User List</h4>
          <Link
            to="/create"
            className="btn btn-success btn-sm px-3 py-2 d-flex align-items-center gap-1 fw-semibold shadow-sm"
          >
            + Create User
          </Link>
        </div>

        <div className="w-100 overflow-hidden">
          <table className="table table-dark table-hover table-sm align-middle mb-0 style-table">
            <thead className="table-active text-uppercase small text-muted">
              <tr>
                <th style={{ width: "25%" }}> &nbsp; Name</th>
                <th style={{ width: "40%" }}>Email</th>
                <th style={{ width: "15%" }}>Age</th>
                <th style={{ width: "20%" }} className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td
                    className="fw-semibold text-light text-truncate"
                    style={{ maxWidth: "100px" }}
                  >
                    &nbsp; {user.name}
                  </td>
                  <td className="text-info-emphasis text-break">
                    {user.email}
                  </td>
                  <td>
                    <span className="badge bg-secondary bg-opacity-50 text-light px-2 py-1 rounded-pill small">
                      {user.age} yrs
                    </span>
                  </td>
                  <td>
                    <div className="d-flex justify-content-center gap-1">
                      <Link to={`/update/${user._id}`}>
                        <button
                          className="btn btn-outline-warning btn-sm"
                          title="Edit"
                        >
                          ⚙️
                        </button>
                      </Link>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        title="Delete"
                        onClick={() => handleDelete(user._id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;
