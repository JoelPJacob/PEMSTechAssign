import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

export const getUserPosts = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};
