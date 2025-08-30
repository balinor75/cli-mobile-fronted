export const loginWithOTP = async (email, otp) => {
  // Simulated OTP check
  if (email === 'user@example.com' && otp === '123456') {
    localStorage.setItem('auth', 'true');
    return true;
  }
  return false;
};
