import { boot } from 'quasar/wrappers';
import todoRoutes from './router/todo-router';
import axios from 'axios';
import { RouteRecordRaw } from 'vue-router';
import { useUserStore } from 'stores/user-store';
import { useMenuStore } from 'stores/menu-store';
// import todoMenus from 'src/marketApps/todo/menu';

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

  const menuStore = useMenuStore(store);

  menuStore.addMenu('Top', {
    icon: 'mdi-view-dashboard',
    title: 'Todo',
  });
  menuStore.addMenu(
    'Top',
    {
      icon: 'mdi-view-dashboard',
      title: 'Dashboard',
      route: '/admin/todo',
    },
    'MM'
  );
});

export { todoApi };
