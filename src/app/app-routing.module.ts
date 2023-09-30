import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'profile/:id', loadComponent: () => import('./politician-profile/politician-profile.component').then(mod => mod.PoliticianProfileComponent)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
