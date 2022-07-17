import logo from "./logo.svg";
import "./App.css";
import GithubImg from "./gitcom.png";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((userResponse) => {
        setUserData(userResponse);
      });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(userData);

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Github user</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              required
              value={search}
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>

      <div className="py-5">
        {!userData && (
          <img
            src={GithubImg}
            className="responsive rounded-circle"
            alt=""
            height="200px"
          />
        )}
        {userData && (
          <div>
            <img
              src={userData.avatar_url}
              className="responsive rounded-circle"
              alt=""
              height="200px"
            />

            <h1 classname="pt-5">
              <a href="https://github.com/eduardotks" target="_new">
                {userData.name}
              </a>
            </h1>
            <h3>{userData.location}</h3>
            <p>
              <a href={userData.blog} target="_new" className="text-info">
                Site
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
