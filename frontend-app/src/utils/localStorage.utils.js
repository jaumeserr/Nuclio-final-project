export const setJWT = (token) => {
  const data = {
    token,
  };
  localStorage.setItem('JWT_KEY', JSON.stringify(data));
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem('JWT_KEY') || '{}')
};

export const deleteToken = () => {
  localStorage.removeItem('JWT_KEY');
}

