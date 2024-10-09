import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const handleError = (error) => {

  if (error.response.status === 500) {
    return 'Internal Server Error: Something went wrong on the server.';
  }
  return 'An error occurred. Please try again later.';
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
