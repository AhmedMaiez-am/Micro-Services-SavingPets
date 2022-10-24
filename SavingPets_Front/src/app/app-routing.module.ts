import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './Components/authentification/authentification.component';

import { EspaceAdminComponent } from './Components/espace-admin/espace-admin.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { HowItWorkComponent } from './Components/how-it-work/how-it-work.component';
import { EventsComponent } from './Components/events/events.component';
import { EventComponent } from './Components/event/event.component';
import { ProfileSettingsComponent } from './Components/profile-settings/profile-settings.component';
import { ConfidentialiteComponent } from './Components/confidentialite/confidentialite.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { UpdateMDPComponent } from './Components/update-mdp/update-mdp.component';

import { GuardAdministrateurService } from './Services/GuardAdministrateur/guard-administrateur.service';
import { GuardAdminOrUniversiteService } from './Services/GuardAdminOrUniversite/guard-admin-or-universite.service';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { GestionEventComponent } from './Components/gestion-event/gestion-event.component';
import { HomeComponent } from './Components/home/home.component';
import { GuardVisitorService } from './Services/GuardVisitor/guard-visitor.service';
import { UniversityComponent } from './Components/university/university.component';

const routes: Routes = [
  //Accueil:
  {
    path: 'home',
    children: [
      { path: '', component: HomeComponent }, //http://localhost:4200/home
      //{ path: 'Register', component: RegisterComponent }, //http://localhost:4200/Register
      { path: 'howitwork', component: HowItWorkComponent }, //http://localhost:4200/home/howitwork
      {
        path: '',
        children: [
          { path: 'profile', component: ProfileComponent, canActivate: [GuardVisitorService] },//http://localhost:4200/home/profile/:id

          { path: 'settings', component: ProfileSettingsComponent, canActivate: [GuardVisitorService] }, //http://localhost:4200/home/:id/settings
          { path: 'universities', component: EspaceAdminComponent, canActivate: [GuardAdministrateurService] }, //http://localhost:4200/home/profile/:id/admin
          //{ path: 'table', component: TableComponent, canActivate: [GuardAdministrateurService] }, //http://localhost:4200/home/profile/:id/table
          { path: 'university', component: UniversityComponent, canActivate: [GuardAdminOrUniversiteService] }, //http://localhost:4200/home/university
          { path: 'changeMdp', component: ChangePasswordComponent, canActivate: [GuardVisitorService] },//http://localhost:4200/home/changeMdp

        ],
      },
      {
        path: 'login',
        children: [
          { path: '', component: AuthentificationComponent },//http://localhost:4200/home/login
          { path: 'confidentialite', component: ConfidentialiteComponent },//http://localhost:4200/home/login/confidentialite
          { path: 'forgotpassword', component: ForgotPasswordComponent },//http://localhost:4200/home/login/forgotpassword
          { path: 'updateMDP', component: UpdateMDPComponent, canActivate: [GuardVisitorService] },//http://localhost:4200/home/login/updateMDP

        ],
      },

      {
        path: 'events',
        children: [
          { path: '', component: EventsComponent }, //http://localhost:4200/home/events
          { path: 'event', component: EventComponent, canActivate: [GuardVisitorService] }, //http://localhost:4200/home/events/event
        ]
      },

      {
        path: 'gestion-event',
        children: [
          { path: '', component: GestionEventComponent }, //http://localhost:4200/home/events
          { path: 'gestion-event', component: GestionEventComponent, canActivate: [GuardVisitorService] }, //http://localhost:4200/home/gestion-event
        ]
      },
    ]
  },

  { path: '**', component: HomeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
