import { StarterComponent } from './../starter/starter.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      // { path: '', component: SiteComponent},
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
      { path: 'login', component: LoginComponent },

    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
