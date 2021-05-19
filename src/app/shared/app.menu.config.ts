import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'books', name: 'BOOKS', icon: 'menu_book', route: '/main/books' },
  { id: 'customers', name: 'CUSTOMERS', icon: 'people', route: '/main/customers' },
  { id: 'reservations', name: 'RESERVATIONS', icon: 'book_online', route: '/main/reservations' },
  { id: 'lendings', name: 'LENDINGS', icon: 'book', route: '/main/lendings' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];
