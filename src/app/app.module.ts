import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import {FormsModule} from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { TasksComponent } from './tasks/tasks.component';
import {RouterModule} from '@angular/router';
import {PostsService} from './posts.service';
import {TaskService} from './task.service';
import {SubscribersService} from './subscribers.service';
import {HttpModule} from '@angular/http';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { MessageListComponent } from './message-list/message-list.component';
import {MessageService} from './message.service';
import { CreateMessageComponent } from './create-message/create-message.component';
// import { provideRoutes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PostsComponent,
    TasksComponent,
    SubscribersComponent,
    MessageListComponent,
    CreateMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
    // RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [AuthService, PostsService, TaskService, SubscribersService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
