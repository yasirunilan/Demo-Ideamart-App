import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import {PostsComponent} from './posts/posts.component';
import {SubscribersComponent} from './subscribers/subscribers.component';
import {MessageListComponent} from './message-list/message-list.component';
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
  },
  {
    path: 'subscribersurl',
    component: SubscribersComponent
  },
  {
    path: 'messagessurl',
    component: MessageListComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
