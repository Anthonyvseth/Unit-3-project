import ApiClient from './ApiClient';

export const __GetProfile = async (account_id) => {
  try {
    console.log('get profile acct id: ', account_id);
    const res = await ApiClient.get(`/accounts/${account_id}`);
    console.log('acct data: ', res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __RegisterUser = async (formData) => {
  try {
    const res = await ApiClient.post('/accounts/register', formData);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __CheckSession = async () => {
  try {
    const res = await ApiClient.get('/accounts/refresh/session');
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __LoginUser = async (userData) => {
  try {
    const res = await ApiClient.post('/accounts/login', userData);
    localStorage.setItem('account_id', res.data.id);
    console.log('Logged in');
    return res.data;
  } catch (error) {
    throw error;
  }
};
