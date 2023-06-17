const routes = [
  {
    path: "/",
    component: () => import("@/views/home.vue"), //路由懒加载
  },
  // {
  //   path: "/home",
  //   component: () => import("@/pages/home.vue"),
  // },
];

export default routes;
