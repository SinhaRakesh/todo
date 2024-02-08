import { RouteRecordRaw } from 'vue-router';

const todoRoutes: RouteRecordRaw[] = [
  {
    path: '/admin/todo',
    component: () => import('../layout/todo-app-layout.vue'),
    children: [
      {
        path: 'todoconfig',
        name: 'config',
        component: () => import('../pages/todo-index-page.vue'),
      },
    ],
  },
];

export default todoRoutes;
