import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {NavbarComponent} from './core/navbar/navbar.component';
import {JumbotronComponent} from './core/jumbotron/jumbotron.component';
import {EventcardComponent} from './event/eventcard/eventcard.component';
import {FooterComponent} from './core/footer/footer.component';
import {LoginComponent} from './user/login/login.component';
import {RegistrationComponent} from './user/registration/registration.component';
import {ProfileComponent} from './user/profile/profile.component';
import {ProfileEditComponent} from './user/profile-edit/profile-edit.component';
import {EventComponent} from './event/event.component';
import {EventDetailComponent} from './event/event-detail/event-detail.component';
import {EventListComponent} from './event/event-list/event-list.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {AboutComponent} from './about/about.component';
import {BidComponent} from './ticket/bid/bid.component';
import {TicketDetailComponent} from './ticket/ticket-detail/ticket-detail.component';
import {TicketListComponent} from './ticket/ticket-list/ticket-list.component';
import {TicketComponent} from './ticket/ticket.component';

import {AppRoutingModule} from './app-routing.module';
import {EventService} from './shared/event.service';
import {UserService} from './shared/user.service';
import { AlertModule } from 'ngx-bootstrap/alert';
import {TicketService} from './shared/ticket.service';
import {LoggedInGuard} from './shared/logged-in.guard';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventcardComponent,
    EventComponent,
    FooterComponent,
    ...AppRoutingModule.routableComponents


  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    AppRoutingModule,
    AlertModule.forRoot()

  ],
  providers: [EventService, UserService, TicketService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
