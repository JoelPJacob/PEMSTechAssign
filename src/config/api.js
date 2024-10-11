import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const handleError = (error) => {
  if (error.response) {
    // Check if the response exists and has a status
    if (error.response.status === 500) {
      return 'Internal Server Error: Something went wrong on the server.';
    }
    return `Error: ${error.response.statusText}`;
  } else if (error.request) {
    // The request was made but no response was received
    return 'No response received: Please check your network connection.';
  } else {
    // Something else triggered the error
    return `Error: ${error.message}`;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    throw new Error(errorMessage);
  }
};

export const getUserPosts = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
    return response.data;
  } catch (error) {
    const errorMessage = handleError(error);
    throw new Error(errorMessage);
  }
};
