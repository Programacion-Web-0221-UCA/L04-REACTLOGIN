const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1";

export const useServices = {
  login: async (username, password) => {
    try {
      console.log({ username, password });
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
      };

      const response = await fetch(`${BASE_URL}/auth/signin`, config);

      console.log({ response });
      if (response.ok) {
        const data = await response.json();
        return data; // token y role
      }
    } catch (error) {
      console.error(error);
      return {};
    }
  },

  verifyToken: async (token) => {
    try {
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(`${BASE_URL}/auth/whoami`, config);
      if (response.ok) {
        const data = await response.json();
        return data; // username y role
      }
    } catch (error) {
      return {};
    }
  },
};
