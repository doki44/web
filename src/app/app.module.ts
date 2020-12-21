import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './shared/services/user.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostService} from './shared/services/post.service';
import {SystemModule} from './system/system.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SystemModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
