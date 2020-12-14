import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HistoryComponent} from './system/history/history.component';
import {CommandsComponent} from './system/commands/commands.component';
import {ProfileComponent} from './system/profile/profile.component';
import {CalendarComponent} from './system/calendar/calendar.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'history', component: HistoryComponent},
  {path: 'commands', component: CommandsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
