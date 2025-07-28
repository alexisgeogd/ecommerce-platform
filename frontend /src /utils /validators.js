export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateProduct = (product) => {
  const errors = {};
  if (!product.name) errors.name = 'Name is required';
  if (!product.price || product.price <= 0) errors.price = 'Invalid price';
  if (!product.category) errors.category = 'Category is required';
  return errors;
};
