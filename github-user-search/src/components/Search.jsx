import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e, nextPage = 1) => {
    e?.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = await searchUsers({
        query,
        location,
        minRepos,
        page: nextPage,
      });

      setUsers(nextPage === 1 ? data.items : [...users, ...data.items]);
      setPage(nextPage);
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>

      <form
        onSubmit={(e) => handleSearch(e, 1)}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        <input
          className="border p-2 rounded"
          placeholder="Username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <input
          className="border p-2 rounded"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          className="border p-2 rounded"
          placeholder="Min repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 flex gap-4 items-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {users.length > 0 && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={() => handleSearch(null, page + 1)}
            className="border px-4 py-2 rounded hover:bg-gray-100"
          >
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
