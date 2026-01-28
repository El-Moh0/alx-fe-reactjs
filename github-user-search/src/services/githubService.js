import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com";

/**
 * Fetch GitHub users with advanced search criteria
 * @param {Object} params - Search parameters
 * @param {string} params.username - GitHub username
 * @param {string} params.location - User location
 * @param {number} params.minRepos - Minimum public repositories
 * @param {number} params.page - Page number for pagination
 */
export const fetchAdvancedUsers = async ({ username, location, minRepos, page = 1 }) => {
  // Build the query string for the Search API
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  // === THIS LINE USES THE SEARCH API URL ===
  const searchUrl = `${BASE_URL}/search/users?q=${encodeURIComponent(query.trim())}`;

  // Make API request to search users
  const response = await axios.get(searchUrl, {
    params: {
      per_page: 10,
      page: page,
    },
    headers: {
      Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });

  // Fetch detailed info for each user (optional)
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const details = await axios.get(`${BASE_URL}/users/${user.login}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
        },
      });
      return details.data;
    })
  );

  return {
    items: detailedUsers,
    totalCount: response.data.total_count,
  };
};
