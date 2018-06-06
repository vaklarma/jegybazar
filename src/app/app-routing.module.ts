import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {EventComponent} from './event/event.component';
import {TicketComponent} from './ticket/ticket.component';
import {createRouterState} from '@angular/router/src/create_router_state';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {EventListComponent} from './event-list/event-list.component';
import {EventDetailComponent} from './event-detail/event-detail.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'event',
    component: EventComponent,
    children: [
      {path: 'list', component: EventListComponent},
      {path: 'new', component: EventDetailComponent},
      {path: ':id/edit', component: EventDetailComponent},
    ],
  },
  {path: 'ticket', component: TicketComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  static routableComponents = [
    HomeComponent,
    EventComponent,
    EventListComponent,
    EventDetailComponent,
    TicketComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    PageNotFoundComponent,
  ];
}
