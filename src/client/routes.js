/*
  loadData serves as the page's preloading function
  Should return a Promise
*/

import Home from './components/Home'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  }
];

export default routes;
