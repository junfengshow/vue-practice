import MainLayout from '@/layouts/MainLayout.vue';
import Live from './Live';
import Chat from './Chat';
import Mine from './Mine';
import Message from './Message';
import Login from './Login';
import LiveDetail from './LiveDetail';

export const routes = [
  { 
    path: '/', 
    redirect: '/live', 
    component: MainLayout,
    children: [
      { path: '/chat', component: Chat },
      { path: '/live', component: Live },
      { path: '/mine', component: Mine },
      { path: '/message', component: Message },
    ] 
  },
  { path: '/livedetail', component: LiveDetail },
  { path: '/login', component: Login }
];
