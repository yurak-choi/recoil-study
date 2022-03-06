import {atom, selector, selectorFamily} from 'recoil';
import axios from 'axios';

export const currentUserIDState = atom({
  key: 'currentUserID',
  default: 1,
});

export const getUsers = selector({
  key: 'users',
  get: async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  },
});

export const getUser = selectorFamily({
  key: 'user',
  get: (userId) => async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.data;
  },
});

export const getCurrentUser = selector({
  key: 'currentUser',
  get: ({get}) => get(getUser(get(currentUserIDState))),
});
