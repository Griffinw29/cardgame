import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './game/intro/intro.component';
import { PlayComponent } from './game/play/play.component';
import { StartComponent } from './game/start/start.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  { path: 'intro', component: IntroComponent },
  { path: 'start', component: StartComponent },
  { path: 'play', component: PlayComponent },
  { path: '**', component: StartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
