import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/HomePage';
import MyFiles from '../pages/MyFilesPage';
import MyAccount from '../pages/MyAccountPage';
import SettingsPage from '../pages/SettingsPage';
import SpecificFilePage from '../pages/SpecificFilePage';
import RecentFilesPage from '../pages/RecentFilesPage';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage
  },
  {
    path: '/MyFiles',
    name: 'MyFiles',
    component: MyFiles
  },
  {
    path: '/MyAccount',
    name: 'MyAccount',
    component: MyAccount
  },
  {
    path: '/recent',
    name: 'RecentFiles',
    component: RecentFilesPage
  },
  {
    path: '/MyFiles/:fileId',
    name: 'SpecificFile',
    component: SpecificFilePage,
    props: (route) => {
        return ({
          fileId: route.params.fileId,
        });
    }
},
]

const router = new VueRouter({
  routes
});

export default router
