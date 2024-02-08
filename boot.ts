import { boot } from 'quasar/wrappers';
import todoRoutes from './router/todo-router';
import axios from 'axios';
import { useUserStore } from 'src/stores/user-store';

const todoApi = axios.create({
  baseURL: process.env.TODOAPI_BASE_URL,
});
export default boot(({ router, store }) => {
  const userStore = useUserStore(store);

  todoRoutes.forEach((route) => {
    router.addRoute(route);
  });

  todoApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${userStore.user.token}`;
    return config;
  });
});
