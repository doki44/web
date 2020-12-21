import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {MainPageComponent} from './main-page/main-page.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {ProfileComponent} from './profile/profile.component';
import {ReviewsPageComponent} from './reviews-page/reviews-page.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {ContactsPageComponent} from './contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: 'system', component: SystemComponent, children: [
      {path: 'main-page', component: MainPageComponent},
      {path: 'news-page', component: NewsPageComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'reviews-page', component: ReviewsPageComponent},
      {path: 'contacts-page', component: ContactsPageComponent},
      {path: 'edit-post/:id', component: EditPostComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {

}
