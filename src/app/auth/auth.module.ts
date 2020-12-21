import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegistrationsComponent} from './registrations/registrations.component';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {UserService} from '../shared/services/user.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationsComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: [
    AuthRoutingModule
  ],
  providers: [UserService]
})

export class AuthModule {}

