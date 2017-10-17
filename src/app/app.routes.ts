import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {PostsComponent} from './posts/posts.component';
import {TasksComponent} from './tasks/tasks.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  // {
  //   path: '',
  //   redirectTo: 'postsviewurl',
  //   pathMatch: 'full'
  // },
  {
    path: 'postsviewurl',
    component: PostsComponent
  },
  {
    path: 'tasksviewurl',
    component: TasksComponent
  },
  {
    path: 'loginviewurl',
    component: LoginComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
