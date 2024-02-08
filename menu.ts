import { MenuDto } from 'src/DTO/menuDTO';

const todoMenus: MenuDto = {
  label: 'Todo',
  icon: 'pin',
  submenus: [
    {
      label: 'Todo Config',
      url: '/admin/todo/todoconfig',
      icon: 'list',
      description: 'Todo config',
    },
  ],
};
export default [todoMenus];
