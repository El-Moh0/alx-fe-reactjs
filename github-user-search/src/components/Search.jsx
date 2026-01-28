import React, { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    searchUsers(1);
  };

  const searchUsers = async (pageNumber) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchAdvancedUsers({ username, location, minRepos, page: pageNumber });
      if (data.items.length === 0) {
        setError("No users found with the specified criteria");
        setUsers([]);
      } else {
        setUsers(data.items);
        setTotalCount(data.totalCount);
      }
    } catch (err) {
      setError("Error fetching users. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    searchUsers(nextPage);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded shadow-sm"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded shadow-sm"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded shadow-sm"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-4 border rounded shadow-sm"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">{user.login}</h3>
                {user.location && <p>Location: {user.location}</p>}
                <p>Repositories: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
          {users.length < totalCount && (
            <button
              onClick={handleLoadMore}
              className="w-full mt-4 bg-gray-200 p-2 rounded hover:bg-gray-300 transition"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
