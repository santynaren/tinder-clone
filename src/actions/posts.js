import * as api from '../api';

export const getCards = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: 'DATA ' });
  } catch (err) {}
};
