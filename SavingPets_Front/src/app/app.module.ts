import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpHeaderResponse, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AuthentificationComponent } from './Components/authentification/authentification.component';

import { EspaceAdminComponent } from './Components/espace-admin/espace-admin.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { HowItWorkComponent } from './Components/how-it-work/how-it-work.component';
import { EventsComponent } from './Components/events/events.component';
import { EventComponent } from './Components/event/event.component';
import { ProfileSettingsComponent } from './Components/profile-settings/profile-settings.component';
import { ConfidentialiteComponent } from './Components/confidentialite/confidentialite.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';

import { NgxCaptchaModule } from 'ngx-captcha';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import resourceTimelinePlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { QRCodeModule } from 'angular2-qrcode';
import { HomeComponent } from './Components/home/home.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { UpdateMDPComponent } from './Components/update-mdp/update-mdp.component';
import { UniversityComponent } from './Components/university/university.component';
import { GestionEventComponent } from './Components/gestion-event/gestion-event.component';



FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  resourceTimelinePlugin,
]);


@NgModule({
  declarations: [
    AppComponent,
    UniversityComponent,
    HeaderComponent,
    FooterComponent,
    AuthentificationComponent,
    UpdateMDPComponent,
    ChangePasswordComponent,
    EspaceAdminComponent,
    ProfileComponent,
    HowItWorkComponent,
    GestionEventComponent,
    EventsComponent,
    EventComponent,
    HomeComponent,
    SidebarComponent,
    ProfileSettingsComponent,
    ConfidentialiteComponent,
    ForgotPasswordComponent,
   
  ],
  imports: [
    Ng2TelInputModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FontAwesomeModule,
    FullCalendarModule,
    CommonModule,
    NgbModalModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    DragDropModule,
    QRCodeModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
