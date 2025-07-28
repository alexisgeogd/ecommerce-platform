export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role
    };
  } catch (e) {
    return null;
  }
};

export const isAuthenticated = () => {
  const user = getCurrentUser();
  return !!user;
};

export const isAdmin = () => {
  const user = getCurrentUser();
  return user?.role === 'ADMIN';
};
