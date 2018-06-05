import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {NavbarComponent} from './navbar/navbar.component';
import {JumbotronComponent} from './jumbotron/jumbotron.component';
import {EventcardComponent} from './eventcard/eventcard.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {ProfileComponent} from './profile/profile.component';
import {ProfileEditComponent} from './profile-edit/profile-edit.component';
import {EventComponent} from './event/event.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {EventListComponent} from './event-list/event-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AboutComponent} from './about/about.component';
import {BidComponent} from './bid/bid.component';
import {TicketDetailComponent} from './ticket-detail/ticket-detail.component';
import {TicketListComponent} from './ticket-list/ticket-list.component';
import {TicketComponent} from './ticket/ticket.component';

import {AppRoutingModule} from './app-routing.module';


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
    CollapseModule.forRoot(),
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
