const isEmailValid = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

const isPasswordValid = (password: string): boolean => {
  return /(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(.{8,})/.test(password);
};

export { isEmailValid, isPasswordValid };