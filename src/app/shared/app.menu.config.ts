import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [

  //All the routes called by the left-side menu of the website.

  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'customers-home', name: 'CUSTOMERS_HOME', icon: 'home', route: '/main/customers-home' },
  { id: 'books', name: 'BOOKS', icon: 'menu_book', route: '/main/books' },
  { id: 'customers', name: 'CUSTOMERS', icon: 'people', route: '/main/customers' },
  { id: 'reservations', name: 'RESERVATIONS', icon: 'book_online', route: '/main/reservations' },
  { id: 'lendings', name: 'LENDINGS', icon: 'book', route: '/main/lendings' },
  { id: 'customers-lendings', name:'CUSTOMERS_LENDINGS', icon:'book', route: '/main/customers-lendings'},
  { id: 'customers-reservations', name:'CUSTOMERS_RESERVATIONS', icon:'book_online', route: '/main/customers-reservations'},
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },
  
];
