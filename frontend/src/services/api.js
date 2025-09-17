import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000', // رابط الـ backend
  withCredentials: true, // مهم للسماح بالـ cookies
});

// استدعاء CSRF قبل أي طلب تسجيل دخول أو تسجيل
export const getCsrfToken = async () => {
  await API.get('/sanctum/csrf-cookie');
};

// تسجيل دخول
export const login = async (email, password) => {
  await getCsrfToken();
  return API.post('/login', { email, password });
};

// تسجيل مستخدم جديد
export const register = async (name, email, password, password_confirmation) => {
  await getCsrfToken();
  return API.post('/register', { name, email, password, password_confirmation });
};

// جلب بيانات المستخدم الحالي
export const getUser = async () => {
  return API.get('/user');
};

// تسجيل خروج
export const logout = async () => {
  return API.post('/logout');
};
