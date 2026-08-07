import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/create", {
        name,
        email,
        age,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((e) => console.log("Error : ", e));
  };

  return (
    <div className="container-fluid min-vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center p-2 p-sm-4">
      <div
        className="w-100 bg-secondary bg-opacity-10 border border-secondary border-opacity-25 rounded-4 p-3 p-sm-4 shadow-lg"
        style={{ maxWidth: "550px" }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4 border-bottom border-secondary border-opacity-25 pb-3">
          <h4 className="m-0 fw-bold text-light">Create User</h4>
          <Link
            to="/"
            className="btn btn-outline-secondary btn-sm px-3 py-1 text-light shadow-sm"
          >
            ← Back
          </Link>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-light small fw-semibold">
              NAME
            </label>
            <input
              type="text"
              className="form-control bg-dark text-light border-secondary border-opacity-50 shadow-none"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light small fw-semibold">
              EMAIL
            </label>
            <input
              type="email"
              className="form-control bg-dark text-light border-secondary border-opacity-50 shadow-none"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label text-light small fw-semibold">
              AGE
            </label>
            <input
              type="number"
              className="form-control bg-dark text-light border-secondary border-opacity-50 shadow-none"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 fw-semibold shadow-sm py-2"
          >
            💾 Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
