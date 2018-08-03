import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {EventListComponent} from './event/event-list/event-list.component';
import {EventComponent} from './event/event.component';
import {HomeComponent} from './home/home.component';
import {LoggedInGuard} from './shared/logged-in.guard';
import {BidComponent} from './ticket/bid/bid.component';
import {TicketDetailComponent} from './ticket/ticket-detail/ticket-detail.component';
import {TicketListComponent} from './ticket/ticket-list/ticket-list.component';
import {TicketComponent} from './ticket/ticket.component';
import {LoginComponent} from './user/login/login.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {ProfileComponent} from './user/profile/profile.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'event',
    component: EventComponent,
    children: [
      {path: 'list', component: EventListComponent},
      {path: 'new', component: EventDetailComponent, canActivate: [LoggedInGuard]},
      {path: ':id', component: EventDetailComponent}
    ]
  },
  {
    path: 'ticket',
    component: TicketComponent,
    children: [
      {path: 'list', component: TicketListComponent},
      {path: 'new', component: TicketDetailComponent, canActivate: [LoggedInGuard]},
      {path: ':id', component: BidComponent, canActivate: [LoggedInGuard]},
    ]
  },
  {path: 'about', component: AboutComponent},
  {
    path: 'user',
    children: [
      {path: '', component: ProfileComponent, canActivate: [LoggedInGuard]},
      {path: 'edit', component: ProfileEditComponent, canActivate: [LoggedInGuard]},
      {path: 'login', component: LoginComponent},
      {path: 'registration', component: ProfileEditComponent}
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
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
    TicketListComponent,
    TicketDetailComponent,
    BidComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    ProfileEditComponent,
    PageNotFoundComponent
  ];
}
