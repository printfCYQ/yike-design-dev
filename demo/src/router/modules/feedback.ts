import { RouteRecordRaw } from 'vue-router';
const feedbackRoutes: Array<RouteRecordRaw> = [
  {
    path: 'alert',
    component: () => import('@/examples/alert/doc.md'),
  },
  {
    path: 'message',
    component: () => import('@/examples/message/doc.md'),
  },
  {
    path: 'tooltip',
    component: () => import('@/examples/tooltip/doc.md'),
  },
];

export default feedbackRoutes;