import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!search) return;

    const fetchUser = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.github.com/users/${search}`
        );

        const data = await response.json();

        if (data.message === "Not Found") {
          setError("User not found");
          setUserData(null);
        } else {
          setUserData(data);
        }
      } catch (err) {
        setError("Something went wrong", err);
        setUserData(null);
      }

      setLoading(false);
    };

    fetchUser();
  }, [search]);

  const handleSearch = () => {
    if (username.trim() === "") return;
    setSearch(username);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      {loading && <h2>Loading...</h2>}

      {error && <h3>{error}</h3>}

      {userData && !loading && (
        <div>
          <img
            style={{
              borderRadius: "50%",
              marginTop: "20px"
            }}
            src={userData.avatar_url}
            alt={userData.login}
            width="150"
          />

          <h2>{userData.login}</h2>

          <p>Name: {userData.name}</p>

          <p>Followers: {userData.followers}</p>

          <p>Following: {userData.following}</p>

          <p>Public Repos: {userData.public_repos}</p>

          <p>Location: {userData.location}</p>

          <a
            href={userData.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;