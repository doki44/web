import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemRoutingModule} from './system-routing.module';
import {SharedModule} from '../shared/shared.module';
import {SystemComponent} from './system.component';
import {UserService} from '../shared/services/user.service';
import {PostService} from '../shared/services/post.service';
import {ProfileComponent} from './profile/profile.component';
import {MainPageComponent} from './main-page/main-page.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {ReviewsPageComponent} from './reviews-page/reviews-page.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import {SearchPipe} from '../shared/pipes/search.pipe';

@NgModule({
  declarations: [
    SystemComponent,
    ProfileComponent,
    MainPageComponent,
    NewsPageComponent,
    ReviewsPageComponent,
    EditPostComponent,
    AddPostComponent,
    ContactsPageComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  exports: [
    SystemRoutingModule
  ],
  providers: [UserService, PostService]
})
export class SystemModule {

}
