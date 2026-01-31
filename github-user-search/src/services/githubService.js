import axios from "axios";

export const fetchUserData = (username) => {
  return axios.get(`https://api.github.com/users/${username}`);
};

export const searchUsers = ({ query, location, minRepos, page = 1 }) => {
  let searchQuery = query;

  if (location) searchQuery += `+location:${location}`;
  if (minRepos) searchQuery += `+repos:>=${minRepos}`;

  return axios.get(
    `https://api.github.com/search/users?q=${searchQuery}&per_page=10&page=${page}`
  );
};
